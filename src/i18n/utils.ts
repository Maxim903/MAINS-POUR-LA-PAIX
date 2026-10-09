import fr from './fr.json';
import en from './en.json';

export type Lang = 'fr' | 'en';
export const getT = (lang: Lang) => (lang === 'en' ? en : fr);
export const prefix = (lang: Lang) => (lang === 'en' ? '/en' : '');
export const fmtDate = (d: Date, lang: Lang = 'fr') =>
  d.toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
