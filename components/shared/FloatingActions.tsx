"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronUp, MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

export function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hello! Welcome to Manola. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const dummyResponses = [
        "That's interesting! Let me check on that for you.",
        "We have a great selection of luxury fragrances that might suit your needs.",
        "You can find our latest combo offers on the homepage.",
        "Is there anything else I can assist you with today?",
        "Our customer support team is available from 9 AM to 6 PM."
      ];
      const randomResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: randomResponse };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Window Modal */}
      <div 
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right ${
          isChatOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
        style={{ height: "450px", maxHeight: "calc(100vh - 120px)" }}
      >
        <div className="bg-pink-700 text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Manola Assistant</h3>
              <p className="text-[10px] text-pink-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsChatOpen(false)}
            className="text-pink-200 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 bg-stone-50 flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "self-end flex-row-reverse" : "self-start"}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-stone-800 text-white" : "bg-pink-100 text-pink-700"}`}>
                {msg.sender === "user" ? <User size={12} /> : <Bot size={12} />}
              </div>
              <div className={`px-4 py-2 rounded-2xl text-sm ${msg.sender === "user" ? "bg-stone-900 text-white rounded-tr-sm" : "bg-white border border-stone-200 text-stone-700 rounded-tl-sm shadow-sm"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-stone-200">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-stone-100 border border-transparent rounded-full text-sm focus:outline-none focus:border-pink-300 focus:bg-white transition-colors"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center shrink-0 hover:bg-pink-500 disabled:opacity-50 disabled:hover:bg-pink-600 transition-colors"
            >
              <Send size={16} className="-ml-0.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-lg shadow-stone-900/20 hover:bg-pink-700 transition-all duration-300 cursor-pointer ${
            showTopBtn && !isChatOpen
              ? "translate-y-0 opacity-100 animate-[bounce_2s_infinite]"
              : "translate-y-10 opacity-0 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>

        <button
          onClick={() => setIsChatOpen((prev) => !prev)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-pink-900/30 transition-all duration-300 cursor-pointer relative group ${
            isChatOpen ? "bg-stone-800 text-white hover:bg-stone-700" : "bg-pink-600 text-white hover:bg-pink-500 hover:scale-110"
          }`}
          aria-label="Toggle Chat"
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
          
          {!isChatOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
          )}
          
          {!isChatOpen && (
            <div className="absolute right-full mr-4 bg-stone-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Chat with us!
            </div>
          )}
        </button>
      </div>
    </>
  );
}
