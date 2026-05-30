import React, { useState, useMemo } from 'react';
import { LangContext } from './LangContext';
import { translations } from './translations';
import type { LanguageCode } from './translations';

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageCode>(() => {
    const savedLang = localStorage.getItem('app_lang');
    return (savedLang === 'EN' || savedLang === 'PL' || savedLang === 'RU' || savedLang === 'UA') 
      ? savedLang 
      : 'RU';
  });

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  const value = useMemo(() => ({
    lang,
    setLang,
    t: translations[lang]
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

