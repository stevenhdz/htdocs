import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../api/orders';
import { useAuth } from '../auth/AuthContext';
import type { Product } from '../types';
import { useI18n } from '../i18n/I18nContext';

type CartItem = { productId: number; quantity: number; product: Product };

export default function CheckoutPage() {
  const { isAuth } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [items] = useState<CartItem[]>(() => {
    const raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : [];
  });

  const total = useMemo(() => items.reduce((acc, i) => acc + i.quantity * i.product.price, 0), [items]);

  const submit = async () => {
    if (!isAuth) { alert(t('checkout.mustLogin')); return; }
    if (items.length === 0) { alert(t('checkout.emptyCart')); return; }
    setLoading(true);
    try {
      const payload = { items: items.map(i => ({ productId: i.productId, quantity: i.quantity })), note };
      const res = await createOrder(payload);
      localStorage.removeItem('cart');
      navigate(`/orders/${res.order.id}?created=1`);
    } catch (err: any) {
      alert(err?.response?.data?.error || 'Error creando la orden');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>{t('checkout.title')}</h2>
      <div className="card">
        <div className="form-row">
          <label className="label">{t('checkout.note')}</label>
          <textarea className="input" value={note} onChange={e=>setNote(e.target.value)} rows={4} />
        </div>
        <div className="notice" style={{marginBottom:12}}>
          {t('checkout.totalToPay')}: <strong>${total.toFixed(2)}</strong>
        </div>
        <button className="btn primary" onClick={submit} disabled={loading}>{loading ? t('checkout.creating') : t('checkout.create')}</button>
      </div>
    </div>
  );
}