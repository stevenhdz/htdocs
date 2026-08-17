import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useI18n } from '../i18n/I18nContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (e:any) {
      setErr(e.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>{t('login.title')}</h2>
      <form className="card" onSubmit={submit}>
        {err && <div className="error" style={{marginBottom:12}}>{err}</div>}
        <div className="form-row">
          <label className="label">{t('login.email')}</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="form-row">
          <label className="label">{t('login.password')}</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button className="btn primary" disabled={loading}>{loading ? t('login.signingIn') : t('login.signIn')}</button>
        <div style={{marginTop:8}}>
          <Link to="/forgot">{t('login.forgot')}</Link>
        </div>
      </form>
    </div>
  );
}