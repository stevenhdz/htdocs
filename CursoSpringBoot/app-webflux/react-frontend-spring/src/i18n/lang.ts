export type Lang = 'en' | 'es' | 'pt';

export const SUPPORTED_LANGS: Lang[] = ['en','es','pt'];
export const DEFAULT_LANG: Lang = 'es';

export function detectLang(): Lang {
  const saved = localStorage.getItem('lang') as Lang | null;
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('pt')) return 'pt';
  return 'en';
}

export function getLang(): Lang {
  const v = localStorage.getItem('lang') as Lang | null;
  return (v && SUPPORTED_LANGS.includes(v)) ? v : DEFAULT_LANG;
}

export function setLang(lang: Lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem('lang', lang);
  window.dispatchEvent(new CustomEvent('lang-changed', { detail: { lang } }));
}