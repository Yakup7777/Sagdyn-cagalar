import React from 'react';
import { motion } from 'motion/react';
import { useLanguage, Language } from '../context/LanguageContext';
import { HeartPulse } from 'lucide-react';

export default function LanguageSelection() {
  const { setLanguage, setIsLanguageSelected, t } = useLanguage();

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageSelected(true);
  };

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'tk', name: 'Türkmençe', flag: '🇹🇲' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FBFF] flex flex-col items-center justify-center p-4 font-sans text-slate-800">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[40px] shadow-2xl border border-blue-50 p-8 md:p-12 max-w-lg w-full"
      >
        <div className="text-center mb-10">
          <div className="mx-auto w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
            <HeartPulse className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight mb-2">{t('app.title')}</h1>
          <p className="text-slate-500 font-medium">{t('app.subtitle')}</p>
        </div>

        <h2 className="text-lg font-bold text-center text-slate-700 mb-6 uppercase tracking-wider">
          {t('lang.select')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-2xl transition-all font-bold text-slate-700 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 shadow-sm"
            >
              <span className="text-2xl">{l.flag}</span>
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
