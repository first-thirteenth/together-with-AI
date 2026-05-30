import { createContext } from 'react';
import type { LanguageCode, TranslationSchema } from './translations';

export interface LangContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: TranslationSchema;
}

export const LangContext = createContext<LangContextType | undefined>(undefined);



