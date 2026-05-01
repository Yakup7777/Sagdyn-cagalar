import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { BookOpen, Hand, CheckCircle, Quote, PlayCircle, HelpCircle, Activity, Heart } from 'lucide-react';

export default function Tuina() {
  const { t } = useLanguage();
  
  const techniques = [
    { title: t('tuina.tech.1.title'), text: t('tuina.tech.1.desc'), img: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=600&h=400" },
    { title: t('tuina.tech.2.title'), text: t('tuina.tech.2.desc'), img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600&h=400" },
    { title: t('tuina.tech.3.title'), text: t('tuina.tech.3.desc'), img: "https://images.unsplash.com/photo-1522771930-78848d52695d?auto=format&fit=crop&q=80&w=600&h=400" }
  ];

  return (
    <div className="w-full flex-1 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-2xl mb-6 text-emerald-600"
          >
            <Hand className="h-10 w-10" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4"
          >
            {t('tuina.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {t('tuina.header.subtitle')}
          </motion.p>
        </div>

        {/* Introduction */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-50 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <BookOpen className="h-32 w-32" />
          </div>
          <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
            {t('tuina.intro.title')}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {t('tuina.intro.desc')}
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
           className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-3xl p-8 md:p-10 text-white shadow-xl mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <CheckCircle className="h-8 w-8 text-white/80" />
            {t('tuina.benefits.title')}
          </h2>
          <ul className="space-y-4 text-base md:text-lg text-white/90">
            {[1, 2, 3, 4, 5].map((num) => (
               <li key={num} className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
                 {t(`tuina.benefits.${num}`)}
               </li>
            ))}
          </ul>
        </motion.div>

        {/* Techniques */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
           className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-50 mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-950 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm">2</span>
            {t('tuina.techniques.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techniques.map((tech, idx) => (
              <div key={idx} className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <img src={tech.img} alt={tech.title} className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
                <div className="p-5">
                  <h5 className="font-bold text-xl text-blue-950 mb-2">{tech.title}</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">{tech.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
           className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-50 mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">3</span>
            {t('tuina.steps.title2')}
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((num) => {
              const str = t(`tuina.step2.${num}`);
              const splitIndex = str.indexOf(':');
              const stepPart1 = splitIndex > -1 ? str.slice(0, splitIndex + 1) : `Step ${num}:`;
              const stepPart2 = splitIndex > -1 ? str.slice(splitIndex + 1) : str;
              return (
              <div key={num} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-700">
                  <strong className="text-blue-950 mr-2">{stepPart1}</strong>
                  {stepPart2}
                </p>
              </div>
            )})}
          </div>
        </motion.div>

        {/* Body Parts */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
           className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-50 mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-sm">4</span>
            {t('tuina.body.title')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-3">
                <h3 className="font-bold text-lg text-blue-950">{t(`tuina.body.${num}.title`)}</h3>
                <p className="text-sm text-slate-700"><strong>{t(`tuina.body.${num}.how`).split(':')[0]}:</strong>{t(`tuina.body.${num}.how`).substring(t(`tuina.body.${num}.how`).indexOf(':') + 1)}</p>
                <div className="bg-emerald-50 rounded-lg p-3 mt-2 border border-emerald-100">
                  <p className="text-sm text-emerald-800">
                    <strong>{t(`tuina.body.${num}.benefits`).split(':')[0]}:</strong>
                    {t(`tuina.body.${num}.benefits`).substring(t(`tuina.body.${num}.benefits`).indexOf(':') + 1)}
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 mt-1 border border-indigo-100">
                  <p className="text-sm text-indigo-800">
                    <strong>{t(`tuina.body.${num}.when`).split(':')[0]}:</strong>
                    {t(`tuina.body.${num}.when`).substring(t(`tuina.body.${num}.when`).indexOf(':') + 1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* When to use detailed */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}
           className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-3xl p-8 md:p-10 shadow-xl border border-blue-800 mb-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
            <Activity className="w-7 h-7 text-blue-300" />
            {t('tuina.timing.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
             <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
               <strong className="block text-xl mb-2 text-blue-200">{t('tuina.timing.daily').split(':')[0]}</strong>
               <p className="text-white/90 leading-relaxed">{t('tuina.timing.daily').substring(t('tuina.timing.daily').indexOf(':') + 1)}</p>
             </div>
             <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
               <strong className="block text-xl mb-2 text-blue-200">{t('tuina.timing.special').split(':')[0]}</strong>
               <p className="text-white/90 leading-relaxed">{t('tuina.timing.special').substring(t('tuina.timing.special').indexOf(':') + 1)}</p>
             </div>
          </div>
        </motion.div>

        {/* Key Benefits Detailed */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}
           className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-50 mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center justify-center gap-3 text-center">
            <CheckCircle className="w-7 h-7 text-emerald-500" />
            {t('tuina.keybenefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl text-center flex flex-col items-center">
               <Heart className="w-10 h-10 text-rose-500 mb-4" />
               <h3 className="font-bold text-lg text-slate-800 mb-2">{t('tuina.keybenefits.health').split(':')[0]}</h3>
               <p className="text-slate-600">{t('tuina.keybenefits.health').substring(t('tuina.keybenefits.health').indexOf(':') + 1)}</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl text-center flex flex-col items-center">
               <Activity className="w-10 h-10 text-blue-500 mb-4" />
               <h3 className="font-bold text-lg text-slate-800 mb-2">{t('tuina.keybenefits.relieves').split(':')[0]}</h3>
               <p className="text-slate-600">{t('tuina.keybenefits.relieves').substring(t('tuina.keybenefits.relieves').indexOf(':') + 1)}</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl text-center flex flex-col items-center">
               <Heart className="w-10 h-10 text-indigo-500 mb-4" />
               <h3 className="font-bold text-lg text-slate-800 mb-2">{t('tuina.keybenefits.sleep').split(':')[0]}</h3>
               <p className="text-slate-600">{t('tuina.keybenefits.sleep').substring(t('tuina.keybenefits.sleep').indexOf(':') + 1)}</p>
            </div>
          </div>
        </motion.div>

        {/* When to Use & Children */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
             className="bg-white rounded-3xl p-8 shadow-xl border border-blue-50 flex flex-col"
          >
            <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-rose-500" />
              {t('tuina.whentouse.title')}
            </h3>
            <p className="text-slate-600 mb-4">{t('tuina.whentouse.intro')}</p>
            <ul className="space-y-3 mt-auto">
              {[1, 2, 3, 4].map((num) => (
                 <li key={num} className="flex items-start gap-2 text-slate-700">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                   <span>{t(`tuina.whentouse.${num}`)}</span>
                 </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
             className="bg-emerald-50 rounded-3xl p-8 shadow-xl border border-emerald-100 flex flex-col"
          >
            <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-600" />
              {t('tuina.children.title')}
            </h3>
            <p className="text-emerald-800 mb-6 leading-relaxed">
              {t('tuina.children.desc')}
            </p>
            <img src="/regenerated_image_1777541891571.png" alt="Tuina for children" className="w-full h-40 object-cover rounded-2xl mt-auto" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
           className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-50 mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-950 mb-8 flex items-center gap-3">
            <Quote className="h-6 w-6 text-indigo-500" />
            {t('tuina.testimonial.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[1, 2].map((num) => (
               <div key={num} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative mt-4">
                  <div className="absolute -top-4 -left-2 bg-indigo-100 p-2 rounded-full border-4 border-white">
                    <Quote className="h-5 w-5 text-indigo-500" />
                  </div>
                  <p className="text-slate-600 italic mb-4 relative z-10 pt-2 px-2">
                    {t(`tuina.testimonial.${num}.text`)}
                  </p>
                  <p className="font-semibold text-blue-950 text-right text-sm">
                    {t(`tuina.testimonial.${num}.author`)}
                  </p>
               </div>
             ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
           className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow border border-slate-200"
        >
          <h2 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <HelpCircle className="h-7 w-7 text-blue-500" />
            {t('tuina.faq.title')}
          </h2>
          <div className="space-y-6">
            {[1, 2, 3].map((num) => (
              <div key={num}>
                <h4 className="font-bold text-slate-800 text-lg mb-1">{t(`tuina.faq.${num}.q`)}</h4>
                <p className="text-slate-600">{t(`tuina.faq.${num}.a`)}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
