import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, AlertCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Greetings, traveler. I am **Brown tree**, your dedicated Luxe Sanctuary concierge. How may I assist you on your journey of discovery today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Handle unread counts
  useEffect(() => {
    if (!isOpen && messages.length > 1 && messages[messages.length - 1].sender === "bot") {
      setUnreadCount((prev) => prev + 1);
    }
  }, [messages, isOpen]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleSend = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    setError(null);
    const newMessages = [...messages, { sender: "user", text: trimmed } as Message];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An error occurred while calling the concierge.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.text || "I apologize, but I could not formulate a response at this moment." }]);
    } catch (err: any) {
      console.error("ChatBot error:", err);
      let errMsg = err.message || "An error occurred.";
      if (errMsg.includes("GEMINI_API_KEY")) {
        errMsg = "I require a Gemini API Key to function. Please add your GEMINI_API_KEY in the Settings > Secrets panel of your AI Studio workspace to begin chatting.";
      }
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "Recommend a romantic getaway in Ooty",
    "Tell me about Azure Orchid Resort",
    "What experiences are available?",
    "How do I make a reservation?",
  ];

  // Simple formatter to support basic Markdown like bolding (**) and lists
  const formatMessage = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      // Check for bullet lists
      const isBullet = line.trim().startsWith("* ") || line.trim().startsWith("- ");
      const cleanLine = isBullet ? line.trim().substring(2) : line;

      // Handle Bold formatting (**text**)
      const parts = cleanLine.split(/\*\*([\s\S]*?)\*\*/g);
      const content = parts.map((part, index) => {
        if (index % 2 === 1) {
          return <strong key={index} className="font-semibold text-brand-dark">{part}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={lineIdx} className="ml-4 list-disc text-sm leading-relaxed mb-1 text-gray-700">
            {content}
          </li>
        );
      }

      return (
        <p key={lineIdx} className="text-sm leading-relaxed mb-2 text-gray-700 last:mb-0">
          {content}
        </p>
      );
    });
  };

  return (
    <div id="chatbot-container" className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Chat Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-drawer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[380px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-stone-900 to-stone-850 px-5 py-4 flex items-center justify-between border-b border-stone-800 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brand-secondary/20 flex items-center justify-center border border-brand-secondary/30">
                  <Sparkles className="w-4 h-4 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-white">Brown tree</h3>
                  <p className="text-[10px] text-stone-400 font-medium tracking-wider uppercase">Luxe Sanctuary Concierge</p>
                </div>
              </div>
              <button
                id="chatbot-close-btn"
                onClick={handleOpenToggle}
                className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
                title="Minimize chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-5 bg-stone-50 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                      msg.sender === "user"
                        ? "bg-stone-800 text-white rounded-br-none"
                        : "bg-white text-stone-800 border border-stone-100 rounded-bl-none"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    ) : (
                      formatMessage(msg.text)
                    )}
                  </div>
                </div>
              ))}

              {/* Server/API Error Display */}
              {error && (
                <div className="bg-red-50 border border-red-100 rounded-xl p-3.5 flex items-start space-x-2.5 text-red-800">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-semibold">Concierge Connection Error</p>
                    <p className="leading-relaxed">{error}</p>
                  </div>
                </div>
              )}

              {/* Typing/Loading State */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-stone-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions panel if conversation is new */}
            {messages.length === 1 && !isLoading && (
              <div className="px-5 py-3 bg-white border-t border-gray-100">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2 flex items-center">
                  <HelpCircle className="w-3 h-3 mr-1" /> Suggestion Prompts
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(suggestion)}
                      className="text-xs bg-stone-50 hover:bg-stone-100 text-stone-700 px-2.5 py-1.5 rounded-lg border border-stone-200 transition-all text-left truncate max-w-full"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <form
              id="chatbot-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2"
            >
              <input
                id="chatbot-input-field"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Brown tree a question..."
                disabled={isLoading}
                className="flex-1 text-sm bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 border border-stone-200 focus:border-stone-400 focus:ring-1 focus:ring-stone-400 rounded-xl px-4 py-2.5 outline-none transition-all disabled:opacity-50"
              />
              <button
                id="chatbot-submit-btn"
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-stone-800 hover:bg-stone-900 text-white p-2.5 rounded-xl disabled:opacity-40 disabled:hover:bg-stone-800 transition-all flex items-center justify-center shrink-0"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button
        id="chatbot-trigger-btn"
        onClick={handleOpenToggle}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 relative select-none cursor-pointer ${
          isOpen
            ? "bg-stone-850 rotate-90 scale-95"
            : "bg-gradient-to-tr from-stone-900 to-stone-850 hover:shadow-2xl hover:scale-105"
        }`}
        title="Chat with Brown tree"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6" />
            {/* Unread dot */}
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse border border-white">
                {unreadCount}
              </span>
            )}
            {/* Soft pulsing halo */}
            {!isOpen && messages.length === 1 && (
              <span className="absolute inset-0 rounded-full border border-stone-900/40 animate-ping opacity-75"></span>
            )}
          </>
        )}
      </button>
    </div>
  );
}
