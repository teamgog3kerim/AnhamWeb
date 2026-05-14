import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  User,
  Bot,
  ChevronDown,
  Loader2,
  Headphones,
  Sparkles,
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const WHATSAPP_NUMBER = "971562737327"; // +971 56 273 7327 without +
const CALL_NUMBER = "+251959636234";

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export function WhatsAppCRM() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! Welcome to ANHAMA Trading PLC. I'm your AI assistant. How can I help you learn about our construction machinery, EV trucks, gold mining, or agricultural exports today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const aiMessage: ChatMessage = {
          id: `ai_${Date.now()}`,
          role: "assistant",
          content: data.response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        const errorMessage: ChatMessage = {
          id: `err_${Date.now()}`,
          role: "assistant",
          content:
            "I'm sorry, I couldn't process your request right now. Please try again or contact our team directly via WhatsApp or phone.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: `err_${Date.now()}`,
        role: "assistant",
        content:
          "I'm having trouble connecting right now. Please try again later or reach out to us directly.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, sessionId]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const welcomeMsg =
      "Hello! I was chatting with your AI assistant and would like to speak with a human representative about ANHAMA Trading PLC.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(welcomeMsg)}`;
    window.open(url, "_blank");
  };

  const handleCall = () => {
    window.open(`tel:${CALL_NUMBER}`, "_self");
  };

  const clearChat = async () => {
    setMessages([
      {
        id: "welcome_new",
        role: "assistant",
        content:
          "Hello! Welcome to ANHAMA Trading PLC. I'm your AI assistant. How can I help you today?",
        timestamp: new Date(),
      },
    ]);
    try {
      await fetch("/api/chat/clear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
    } catch {
      // silently fail
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            {/* Pulse ring animation */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <Button
              onClick={() => setIsOpen(true)}
              className="relative bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 shadow-2xl border-0 p-0 flex items-center justify-center transition-colors duration-300"
              aria-label="Open WhatsApp Chat"
            >
              {/* Custom WhatsApp icon - fully visible and polished */}
              <svg
                viewBox="0 0 32 32"
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.585.732 5.01 2.004 7.072L2 30l7.072-2.004C11.134 29.268 13.56 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.2c-2.16 0-4.188-.576-5.928-1.584l-.424-.252-4.32 1.216 1.216-4.32-.252-.424A11.14 11.14 0 0 1 4.8 16c0-6.188 5.012-11.2 11.2-11.2S27.2 9.812 27.2 16 22.188 27.2 16 27.2zm6.272-8.584c-.336-.168-1.992-.984-2.3-1.096-.308-.112-.532-.168-.756.168-.224.336-.868 1.096-1.064 1.316-.196.224-.392.252-.728.084-1.988-1.008-3.276-1.792-4.592-4.032-.344-.592.344-.552.988-1.848.108-.224.056-.42-.028-.588-.084-.168-.756-1.848-1.036-2.52-.272-.652-.548-.564-.756-.576-.196-.012-.42-.012-.644-.012-.224 0-.588.084-.896.42-.308.336-1.176 1.148-1.176 2.8 0 1.652 1.204 3.248 1.372 3.472.168.224 2.38 3.628 5.768 5.088.804.348 1.428.556 1.916.712.804.256 1.536.22 2.116.136.644-.096 1.992-.816 2.272-1.608.28-.792.28-1.456.196-1.608-.084-.168-.308-.26-.644-.428z" />
              </svg>
            </Button>
            {/* Tooltip label */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg pointer-events-none">
              Chat with us
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-48px)] flex flex-col rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                {/* WhatsApp icon in header */}
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-6 h-6 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.585.732 5.01 2.004 7.072L2 30l7.072-2.004C11.134 29.268 13.56 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.2c-2.16 0-4.188-.576-5.928-1.584l-.424-.252-4.32 1.216 1.216-4.32-.252-.424A11.14 11.14 0 0 1 4.8 16c0-6.188 5.012-11.2 11.2-11.2S27.2 9.812 27.2 16 22.188 27.2 16 27.2zm6.272-8.584c-.336-.168-1.992-.984-2.3-1.096-.308-.112-.532-.168-.756.168-.224.336-.868 1.096-1.064 1.316-.196.224-.392.252-.728.084-1.988-1.008-3.276-1.792-4.592-4.032-.344-.592.344-.552.988-1.848.108-.224.056-.42-.028-.588-.084-.168-.756-1.848-1.036-2.52-.272-.652-.548-.564-.756-.576-.196-.012-.42-.012-.644-.012-.224 0-.588.084-.896.42-.308.336-1.176 1.148-1.176 2.8 0 1.652 1.204 3.248 1.372 3.472.168.224 2.38 3.628 5.768 5.088.804.348 1.428.556 1.916.712.804.256 1.536.22 2.116.136.644-.096 1.992-.816 2.272-1.608.28-.792.28-1.456.196-1.608-.084-.168-.308-.26-.644-.428z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    ANHAMA Assistant
                  </h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-100 text-xs">
                      AI + Human Support
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  onClick={clearChat}
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10 w-8 h-8"
                  title="New conversation"
                >
                  <Sparkles className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10 w-8 h-8"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Action Chips */}
            <div className="bg-gray-50 px-3 py-2 flex gap-2 overflow-x-auto shrink-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {[
                "Construction Equipment",
                "EV Trucks",
                "Gold Mining",
                "Coffee/Sesame",
                "Contact",
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setInputValue(`Tell me about ${chip.toLowerCase()}`);
                    inputRef.current?.focus();
                  }}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 px-4 py-3" ref={scrollRef}>
              <div className="space-y-3">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] flex items-start space-x-2 ${
                        msg.role === "user"
                          ? "flex-row-reverse space-x-reverse"
                          : ""
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-[#DCF8C6]"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <User className="w-3.5 h-3.5" />
                        ) : (
                          <Bot className="w-3.5 h-3.5 text-green-700" />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div
                        className={`px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-[#DCF8C6] text-gray-800 rounded-bl-md"
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                        <p
                          className={`text-[10px] mt-1 ${
                            msg.role === "user"
                              ? "text-primary-foreground/60"
                              : "text-gray-500"
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="w-7 h-7 rounded-full bg-[#DCF8C6] flex items-center justify-center shrink-0">
                        <Bot className="w-3.5 h-3.5 text-green-700" />
                      </div>
                      <div className="bg-[#DCF8C6] px-3 py-2 rounded-2xl rounded-bl-md">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Human Support & Call Buttons */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 shrink-0">
              <div className="flex gap-2">
                <Button
                  onClick={openWhatsApp}
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs h-8 rounded-lg font-medium"
                  size="sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1" />
                  Talk to Human
                </Button>
                <Button
                  onClick={handleCall}
                  className="flex-1 bg-[#075E54] hover:bg-[#054740] text-white text-xs h-8 rounded-lg font-medium"
                  size="sm"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  Call Now
                </Button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-1">
                WhatsApp: +971 56 273 7327 | Call: +251 95 963 6234
              </p>
            </div>

            {/* Input Area */}
            <div className="px-3 py-2 bg-white border-t border-gray-200 shrink-0">
              <div className="flex items-center space-x-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 h-10 rounded-full border-gray-300 bg-gray-50 focus:bg-white text-sm"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white p-0 flex items-center justify-center shrink-0 disabled:opacity-50"
                  size="icon"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
