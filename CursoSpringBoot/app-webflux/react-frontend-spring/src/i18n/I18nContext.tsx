import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { detectLang, getLang, setLang as setLangLS, type Lang } from './lang';
import { t as tRaw } from './dictionary';

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nCtx | undefined>(undefined);

export const I18nProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => getLang() || detectLang());

  useEffect(() => {
    const listener = (e: Event) => {
      const l = getLang();
      setLangState(l);
    };
    window.addEventListener('lang-changed', listener as any);
    return () => window.removeEventListener('lang-changed', listener as any);
  }, []);

  const setLang = (l: Lang) => {
    setLangLS(l);
    setLangState(l);
  };

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (key: string) => tRaw(lang, key)
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}