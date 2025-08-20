import React, { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';

export default function RegisterPage() {
  const nav = useNavigate();
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null); setMsg(null);
    try {
      const res = await register({ name, email, password });
      setMsg(res.message || 'Registrado');
      setTimeout(()=>nav('/login'), 800);
    } catch (e:any) {
      setErr(e?.response?.data?.error || 'Registro fallido');
    }
  };

  return (
    <div className="container">
      <h2>{t('register.title')}</h2>
      <form className="card" onSubmit={submit}>
        {msg && <div className="success" style={{marginBottom:12}}>{t('register.ok')}</div>}
        {err && <div className="error" style={{marginBottom:12}}>{t('register.fail')}</div>}
        <div className="form-row">
          <label className="label">{t('register.name')}</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="form-row">
          <label className="label">{t('login.email')}</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="form-row">
          <label className="label">{t('login.password')}</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button className="btn primary">{t('register.create')}</button>
      </form>
    </div>
  );
}