import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Product } from '../types';
import { useI18n } from '../i18n/I18nContext';

type CartItem = { productId: number; quantity: number; product: Product };

export default function CartPage() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [items, setItems] = useState<CartItem[]>(() => {
    const raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : [];
  });

  const total = useMemo(() => items.reduce((acc, i) => acc + i.quantity * i.product.price, 0), [items]);

  const updateQty = (pid: number, q: number) => {
    const next = items.map(i => i.productId === pid ? { ...i, quantity: Math.max(1, q) } : i);
    setItems(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  const removeItem = (pid: number) => {
    const next = items.filter(i => i.productId !== pid);
    setItems(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  return (
    <div className="container">
      <h2>{t('cart.title')}</h2>
      <div className="card">
        {items.length === 0 ? <div>{t('cart.empty')}</div> : (
          <>
            <table className="table">
              <thead>
                <tr><th>{t('cart.product')}</th><th>{t('cart.price')}</th><th>{t('cart.quantity')}</th><th>{t('cart.subtotal')}</th><th></th></tr>
              </thead>
              <tbody>
                {items.map(i => (
                  <tr key={i.productId}>
                    <td>{i.product.name}</td>
                    <td>${i.product.price.toFixed(2)}</td>
                    <td>
                      <input className="input" type="number" value={i.quantity} min={1} onChange={e=>updateQty(i.productId, Number(e.target.value))} style={{width:90}}/>
                    </td>
                    <td>${(i.quantity * i.product.price).toFixed(2)}</td>
                    <td><button className="btn danger" onClick={()=>removeItem(i.productId)}>{t('cart.remove')}</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12}}>
              <strong>{t('cart.total')}: ${total.toFixed(2)}</strong>
              <button className="btn primary" onClick={()=>navigate('/checkout')}>{t('cart.checkout')}</button>
            </div>
          </>
        )}
      </div>
      <div style={{marginTop:12}}><Link to="/">{t('cart.continue')}</Link></div>
    </div>
  );
}