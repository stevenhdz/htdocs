import React, { useState } from 'react';
import { forgotPassword } from '../api/auth';
import { useI18n } from '../i18n/I18nContext';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const { t } = useI18n();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null); setMsg(null);
    try {
      const res = await forgotPassword(email);
      setMsg(res.message || 'Revisa tu correo');
    } catch (e:any) {
      setErr(e?.response?.data?.message || 'Error enviando el correo');
    }
  };

  return (
    <div className="container">
      <h2>{t('forgot.title')}</h2>
      <form className="card" onSubmit={submit}>
        {msg && <div className="success" style={{marginBottom:12}}>{t('forgot.checkEmail')}</div>}
        {err && <div className="error" style={{marginBottom:12}}>{err}</div>}
        <div className="form-row">
          <label className="label">{t('login.email')}</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <button className="btn primary">{t('forgot.sendLink')}</button>
      </form>
    </div>
  );
}