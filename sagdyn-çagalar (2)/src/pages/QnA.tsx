import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Sparkles, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
}

export default function QnA() {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // NOTE: Ensure process.env.GEMINI_API_KEY is available in your environment builder setup
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const systemInstruction = `You are a helpful pediatric medical assistant for parents on the website "Sagdyn Çagalar". 
      Always provide safe, accurate, and easy-to-understand advice about child health, diseases, and Tuina massage.
      IMPORTANT: Detect the language of the user's prompt and respond in that same language (e.g. Turkmen, Russian, English, German, or Korean). 
      Current default selected language in app is ${language}, but always prefer the language the user actually types in.
      Include a disclaimer that you are an AI and they should consult a doctor for serious issues.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      if (response.text) {
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', text: response.text }]);
      } else {
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', text: t('qa.error.empty') }]);
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'ai', text: t('qa.error.connect') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex-1 py-8 flex flex-col">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-2xl mb-4 text-indigo-600"
          >
            <Sparkles className="h-8 w-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-blue-950 mb-2"
          >
            {t('qa.title')}
          </motion.h1>
          <p className="text-slate-500">
            {t('qa.subtitle')}
          </p>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-blue-50 flex flex-col overflow-hidden">
          
          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto min-h-[400px]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                <Bot className="h-16 w-16 text-indigo-500 mb-4" />
                <p className="text-slate-500 max-w-sm">
                  {t('qa.subtitle')} <br/>
                  <span className="text-xs pt-2 block">{t('qa.disclaimer')}</span>
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map(msg => (
                  <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      msg.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      {msg.role === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                    </div>
                    <div className={`px-5 py-4 rounded-2xl max-w-[80%] shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'
                    }`}>
                      <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="px-5 py-4 rounded-2xl bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100 flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
                      <span className="text-slate-500 text-sm">{t('qa.thinking')}</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-slate-50 border-t border-slate-100">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={t('qa.placeholder')}
                className="flex-1 bg-white border border-slate-200 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-indigo-600 text-white px-6 py-4 flex items-center gap-2 rounded-full font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-indigo-200"
              >
                <span>{t('qa.send')}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
