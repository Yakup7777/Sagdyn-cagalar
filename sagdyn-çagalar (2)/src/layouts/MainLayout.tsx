import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';
import { HeartPulse, Globe, Menu, X, Baby } from 'lucide-react';
import { useState } from 'react';
import FloatingChat from '../components/FloatingChat';

export default function MainLayout() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  const navLinks = [
    { ts: t('nav.home'), path: '/' },
    { ts: t('nav.tuina'), path: '/tuina' },
    { ts: t('nav.diseases'), path: '/diseases' },
    { ts: t('nav.ai_qna'), path: '/qa' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FBFF] flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <HeartPulse className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl text-blue-900 tracking-tight">{t('app.title')}</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-1 justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-semibold border-b-2 transition-colors ${
                    location.pathname === link.path 
                      ? 'border-blue-600 text-blue-600 pb-1' 
                      : 'border-transparent text-slate-600 hover:text-blue-600 hover:border-transparent'
                  }`}
                >
                  {link.ts}
                </Link>
              ))}
            </nav>

            {/* Language & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex bg-slate-100 p-1 rounded-full">
                {(['tk', 'ru', 'en', 'de', 'ko'] as Language[]).map(lang => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 text-xs font-bold rounded-full uppercase ${
                      language === lang
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-slate-500'
                    }`}
                  >
                    {lang === 'tk' && 'TKM'}
                    {lang === 'ru' && 'RUS'}
                    {lang === 'en' && 'ENG'}
                    {lang === 'de' && 'GER'}
                    {lang === 'ko' && 'KOR'}
                  </button>
                ))}
              </div>

              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.ts}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <FloatingChat />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 h-16 flex items-center justify-between px-12 mt-auto">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-widest hidden sm:block">
          {t('footer.text').slice(0, Math.min(45, t('footer.text').length)) + (t('footer.text').length > 45 ? '...' : '')}
        </p>
        <div className="flex gap-6 items-center mx-auto sm:mx-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] text-slate-500 font-bold uppercase">
              {language === 'tk' ? 'Serweriň Ýagdaýy: Işleýär' : language === 'ru' ? 'Статус сервера: Работает' : language === 'de' ? 'Serverstatus: Online' : language === 'ko' ? '서버 상태: 온라인' : 'Server Status: Online'}
            </span>
          </div>
          <span className="text-xs text-blue-500 font-bold cursor-pointer hover:text-blue-600 hidden sm:block">
            {language === 'tk' ? 'Hukuk maglumaty' : language === 'ru' ? 'Правовая информация' : language === 'de' ? 'Rechtliche Hinweise' : language === 'ko' ? '법적 정보' : 'Legal Info'}
          </span>
          <span className="text-xs text-blue-500 font-bold cursor-pointer hover:text-blue-600 hidden sm:block">
            {language === 'tk' ? 'Habarlaşmak' : language === 'ru' ? 'Контакты' : language === 'de' ? 'Kontakt' : language === 'ko' ? '연락처' : 'Contact'}
          </span>
        </div>
      </footer>
    </div>
  );
}
