import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { SUPPORTED_LANGS, type Lang } from '../i18n/lang';

const LangPicker: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  return (
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      <label className="label" style={{margin:0}}>{t('nav.lang')}</label>
      <select className="input" style={{width:110}} value={lang} onChange={(e)=>setLang(e.target.value as Lang)}>
        {SUPPORTED_LANGS.map(l => (
          <option key={l} value={l}>{l.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
};
export default LangPicker;