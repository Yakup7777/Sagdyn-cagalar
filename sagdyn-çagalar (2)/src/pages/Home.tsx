import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Hand, Activity, Sparkles } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      id: 'tuina',
      icon: <Hand className="h-8 w-8 text-blue-500" />,
      title: t('home.feature.tuina.title'),
      desc: t('home.feature.tuina.desc'),
      link: '/tuina',
      color: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      id: 'diseases',
      icon: <Activity className="h-8 w-8 text-emerald-500" />,
      title: t('home.feature.diseases.title'),
      desc: t('home.feature.diseases.desc'),
      link: '/diseases',
      color: 'bg-emerald-50',
      border: 'border-emerald-100'
    },
    {
      id: 'ai',
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      title: t('home.feature.ai.title'),
      desc: t('home.feature.ai.desc'),
      link: '/qa',
      color: 'bg-purple-50',
      border: 'border-purple-100'
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-emerald-50 px-4 sm:px-12 py-16 flex flex-col sm:flex-row items-center overflow-hidden relative">
        <div className="w-full sm:w-1/2 pr-0 sm:pr-8 mb-10 sm:mb-0 relative z-10">
          <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
            {t('app.subtitle')}
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight mb-4"
          >
            {t('app.title')} <br/> <span className="text-blue-600">{t('home.hero.title')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-lg mb-8 max-w-md leading-relaxed"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/qa"
              className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all text-center"
            >
              {t('nav.ai_qna')}
            </Link>
          </motion.div>
        </div>
        <div className="w-full sm:w-1/2 relative flex justify-center z-10 mt-12 sm:mt-0">
          <div className="w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/50"
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Healthcare" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
             />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-12 -mt-10 pb-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const hoverBorder = feature.id === 'tuina' ? 'hover:border-emerald-200' :
                               feature.id === 'diseases' ? 'hover:border-blue-200' : 'hover:border-purple-200';
            const iconBg = feature.id === 'tuina' ? 'bg-emerald-50' :
                           feature.id === 'diseases' ? 'bg-blue-50' : 'bg-purple-50';
            const linkColor = feature.id === 'tuina' ? 'text-emerald-600' :
                              feature.id === 'diseases' ? 'text-blue-600' : 'text-purple-600';
            return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={feature.link} className="block h-full group">
                <div className={`h-full p-8 bg-white rounded-3xl shadow-xl border border-blue-50 ${hoverBorder} transition-all duration-300 relative overflow-hidden flex flex-col`}>
                  <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                    {React.cloneElement(feature.icon as React.ReactElement, { className: `w-8 h-8 ${linkColor}` })}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {feature.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          )})}
        </div>
      </section>
    </div>
  );
}
