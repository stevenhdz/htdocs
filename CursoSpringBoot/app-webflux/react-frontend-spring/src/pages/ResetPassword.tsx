import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../api/auth';
import { useI18n } from '../i18n/I18nContext';

export default function ResetPasswordPage() {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const token = sp.get('token') || '';
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const { t } = useI18n();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null); setMsg(null);
    try {
      const res = await resetPassword(token, password);
      if (res?.message) {
        setMsg(res.message);
        setTimeout(()=>nav('/login'), 1000);
      } else {
        setErr(res?.error || 'Error');
      }
    } catch (e:any) {
      setErr(e?.response?.data?.error || 'Error');
    }
  };

  return (
    <div className="container">
      <h2>{t('reset.title')}</h2>
      <form className="card" onSubmit={submit}>
        {msg && <div className="success" style={{marginBottom:12}}>{msg}</div>}
        {err && <div className="error" style={{marginBottom:12}}>{err}</div>}
        <div className="form-row">
          <label className="label">{t('reset.newPassword')}</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button className="btn primary">{t('reset.save')}</button>
      </form>
    </div>
  );
}