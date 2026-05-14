import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import OpenAI from "openai";
import { SYSTEM_PROMPT } from "./knowledge-base";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

// In-memory chat sessions
const chatSessions = new Map<string, { role: "user" | "assistant"; content: string }[]>();

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
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, sessionId } = req.body;
      if (!message || !sessionId) {
        return res.status(400).json({ error: "Message and sessionId are required" });
      }

      // Get or create session history
      let history = chatSessions.get(sessionId) || [];

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
        max_completion_tokens: 2048,
      });

      const aiResponse = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process your request. Please try again or contact our team directly.";

      // Add AI response to history
      history.push({ role: "assistant", content: aiResponse });

      // Keep only last 20 messages to manage memory
      if (history.length > 20) {
        history = history.slice(history.length - 20);
      }
      chatSessions.set(sessionId, history);

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
    if (sessionId) {
      chatSessions.delete(sessionId);
    }
    res.json({ success: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
