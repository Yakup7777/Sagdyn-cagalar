import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Thermometer, Wind, Beaker, Bug, ChevronRight } from 'lucide-react';

export default function Diseases() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: 'fever', icon: <Thermometer className="h-6 w-6" />, titleKey: 'diseases.fever', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
    { id: 'respiratory', icon: <Wind className="h-6 w-6" />, titleKey: 'diseases.respiratory', color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
    { id: 'skin', icon: <Activity className="h-6 w-6" />, titleKey: 'diseases.skin', color: 'text-pink-500', bg: 'bg-pink-50', border: 'border-pink-100' },
    { id: 'digestive', icon: <Beaker className="h-6 w-6" />, titleKey: 'diseases.digestive', color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { id: 'allergies', icon: <Bug className="h-6 w-6" />, titleKey: 'diseases.allergies', color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
  ];

  const categoryContents: Record<string, { id: number, image: string }[]> = {
    fever: [
      { id: 1, image: 'https://images.unsplash.com/photo-1584043720379-b56cd9199c94?auto=format&fit=crop&q=80&w=600&h=400' },
      { id: 2, image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600&h=400' },
    ],
    respiratory: [
      { id: 1, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600&h=400' },
      { id: 2, image: 'https://images.unsplash.com/photo-1550431268-912f2c842fb0?auto=format&fit=crop&q=80&w=600&h=400' },
    ],
    skin: [
      { id: 1, image: 'https://images.unsplash.com/photo-1555252136-1c0993082531?auto=format&fit=crop&q=80&w=600&h=400' },
      { id: 2, image: 'https://images.unsplash.com/photo-1626246473130-f8f2e212fae5?auto=format&fit=crop&q=80&w=600&h=400' },
    ],
    digestive: [
      { id: 1, image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600&h=400' },
    ],
    allergies: [
      { id: 1, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=600&h=400' },
    ],
  };

  return (
    <div className="w-full flex-1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-6 text-blue-600"
          >
            <Activity className="h-10 w-10" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4"
          >
            {t('diseases.title')}
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t('diseases.categories.desc')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Categories */}
          <div className="w-full lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-blue-50 sticky top-24">
              <h3 className="font-bold text-blue-950 px-4 py-2 mb-2">{t('diseases.categories.title')}</h3>
              <div className="space-y-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all ${
                      activeCategory === c.id 
                        ? `${c.bg} ${c.color} font-bold` 
                        : 'hover:bg-slate-50 text-slate-600 font-medium'
                    }`}
                  >
                    <div className={`${activeCategory === c.id ? c.color : 'text-slate-400'}`}>
                      {c.icon}
                    </div>
                    <span className="flex-1 capitalize">{t(c.titleKey)}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${activeCategory === c.id ? 'rotate-90' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <AnimatePresence mode="wait">
              {activeCategory ? (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-50">
                    <h2 className="text-2xl font-bold text-blue-950 mb-6 capitalize flex items-center gap-3">
                      {categories.find(c => c.id === activeCategory)?.icon}
                      {t(`diseases.${activeCategory}`)}
                    </h2>
                    
                    <div className="space-y-6">
                      {categoryContents[activeCategory]?.map((item) => (
                        <div key={item.id} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row group transition-all hover:shadow-lg">
                           <div className="w-full md:w-1/3 aspect-video md:aspect-[3/4] overflow-hidden">
                             <img src={item.image} alt={t(`diseases.data.${activeCategory}.${item.id}.name`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                          </div>
                          <div className="p-6 w-full md:w-2/3 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-blue-950 mb-6">{t(`diseases.data.${activeCategory}.${item.id}.name`)}</h3>
                            
                            <div className="space-y-6">
                              <div className="bg-white p-4 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                  {t('diseases.label.symptoms')}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`diseases.data.${activeCategory}.${item.id}.symptoms`)}</p>
                              </div>
                              <div className="bg-white p-4 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                  {t('diseases.label.treatment')}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`diseases.data.${activeCategory}.${item.id}.treatment`)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {(!categoryContents[activeCategory] || categoryContents[activeCategory].length === 0) && (
                         <div className="text-slate-500 italic p-4 text-center">
                            {t('diseases.info.soon')}
                         </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-3xl p-16 shadow-xl border border-blue-50 text-center flex flex-col items-center justify-center h-full"
                >
                  <Activity className="h-16 w-16 text-slate-200 mb-4" />
                  <h3 className="text-xl font-bold text-slate-400">{t('diseases.category_select')}</h3>
                  <p className="text-slate-400 mt-2">{t('diseases.category_select_desc')}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
