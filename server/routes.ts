import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./knowledge-base";
import rateLimit from "express-rate-limit";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const MAX_MESSAGE_LENGTH = 1000;
const MAX_SESSION_ID_LENGTH = 128;
const MAX_SESSIONS = 500;
const SESSION_TTL_MS = 30 * 60 * 1000; // 30 minutes

type ChatMessage = { role: "user" | "assistant"; content: string };
type SessionEntry = { history: ChatMessage[]; lastActive: number };

// In-memory chat sessions with TTL tracking
const chatSessions = new Map<string, SessionEntry>();

function evictExpiredSessions() {
  const now = Date.now();
  for (const [id, entry] of chatSessions.entries()) {
    if (now - entry.lastActive > SESSION_TTL_MS) {
      chatSessions.delete(id);
    }
  }
}

function enforceSessionCap() {
  if (chatSessions.size < MAX_SESSIONS) return;
  // Evict the least-recently-active session
  let oldestId: string | null = null;
  let oldestTime = Infinity;
  for (const [id, entry] of chatSessions.entries()) {
    if (entry.lastActive < oldestTime) {
      oldestTime = entry.lastActive;
      oldestId = id;
    }
  }
  if (oldestId) chatSessions.delete(oldestId);
}

// Periodically sweep expired sessions every 10 minutes
setInterval(evictExpiredSessions, 10 * 60 * 1000).unref();

// Rate limiter: 20 requests per 15 minutes per IP
const chatRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Too many requests. Please try again later." },
});

const chatInputSchema = z.object({
  message: z.string().min(1).max(MAX_MESSAGE_LENGTH),
  sessionId: z.string().min(1).max(MAX_SESSION_ID_LENGTH),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon!",
        id: contactSubmission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  // AI Chat API - WhatsApp CRM
  app.post("/api/chat", chatRateLimiter, async (req, res) => {
    try {
      const parsed = chatInputSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ success: false, error: "Invalid request. Message must be 1–1000 characters and sessionId must be present." });
      }
      const { message, sessionId } = parsed.data;

      // Evict expired sessions on every request
      evictExpiredSessions();

      // Get or create session entry; only enforce the cap for brand-new sessions
      const existing = chatSessions.get(sessionId);
      if (!existing) {
        enforceSessionCap();
      }
      let history: ChatMessage[] = existing ? existing.history : [];

      // Add user message to history
      history.push({ role: "user", content: message });

      // Build messages for OpenAI
      const messages = [
        { role: "system" as const, content: SYSTEM_PROMPT },
        ...history,
      ];

      // Call OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-5.4",
        messages,
        temperature: 0.7,
        max_completion_tokens: 512,
      });

      const aiResponse = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process your request. Please try again or contact our team directly.";

      // Add AI response to history
      history.push({ role: "assistant", content: aiResponse });

      // Keep only last 20 messages to manage memory
      if (history.length > 20) {
        history = history.slice(history.length - 20);
      }

      chatSessions.set(sessionId, { history, lastActive: Date.now() });

      res.json({
        success: true,
        response: aiResponse,
        sessionId,
      });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to process your message. Please try again.",
      });
    }
  });

  // Clear chat session
  app.post("/api/chat/clear", async (req, res) => {
    const { sessionId } = req.body;
    if (sessionId && typeof sessionId === "string") {
      chatSessions.delete(sessionId);
    }
    res.json({ success: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
