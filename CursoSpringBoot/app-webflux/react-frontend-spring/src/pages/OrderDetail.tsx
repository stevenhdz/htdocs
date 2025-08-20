import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getOrder, updateOrderStatus } from '../api/orders';
import type { OrderResponse } from '../types';
import OrderStatusBadge from '../components/OrderStatusBadge';
import { useAuth } from '../auth/AuthContext';
import { useI18n } from '../i18n/I18nContext';

export default function OrderDetail() {
  const { id } = useParams();
  const [sp] = useSearchParams();
  const [resp, setResp] = useState<OrderResponse | null>(null);
  const { isAdmin } = useAuth();
  const [saving, setSaving] = useState(false);
  const { t } = useI18n();

  // Initial fetch
  useEffect(() => {
    if (id) getOrder(Number(id)).then(setResp).catch(console.error);
  }, [id]);

  // Polling every 10s until DELIVERED or CANCELLED
  useEffect(() => {
    if (!id) return;
    const interval = setInterval(async () => {
      if (!resp) return;
      const done = resp.order.status === 'DELIVERED' || resp.order.status === 'CANCELLED';
      if (done) return;
      try {
        const r = await getOrder(Number(id));
        setResp(r);
      } catch (e) { /* noop */ }
    }, 10000);
    return () => clearInterval(interval);
  }, [id, resp]);

  if (!resp) return <div className="container">Cargando...</div>;

  const { order, items, history } = resp;
  const justCreated = sp.get('created') === '1';
  return (
    <div className="container">
      {justCreated && (
        <div className="success" style={{marginBottom:12}}>
          {t('orderDetail.justCreated')} <strong>#{order.id}</strong>.
        </div>
      )}
      <div className="header">
        <h2>{t('orderDetail.title')} #{order.id}</h2>
        <OrderStatusBadge status={order.status} />
      </div>
      {
        <div className="card" style={{marginBottom:12}}>
          <h3>{t('orders.status')}</h3>
          <div style={{display:'flex', gap:8, alignItems:'center'}}>
            <select className="input" defaultValue={order.status} onChange={e => (order.status = e.target.value)} style={{maxWidth:240}}>
              <option value="PLACED">PLACED</option>
              <option value="PREPARING">PREPARING</option>
              <option value="ON_THE_WAY">ON_THE_WAY</option>
              <option value="DELIVERED">DELIVERED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
            <button className="btn primary" disabled={saving} onClick={async ()=>{
              setSaving(true);
              try {
                const r = await updateOrderStatus(order.id, order.status);
                setResp(r);
              } catch (e:any) {
                alert(e?.response?.data?.error || t('orderDetail.errorSaving'));
              } finally {
                setSaving(false);
              }
            }}>{saving ? 'Guardando...' : 'Guardar'}</button>
          </div>
        </div>
      }
      <div className="card">
        <h3>{t('orderDetail.items')}</h3>
        <table className="table">
          <thead>
            <tr><th>{t('cart.product')}</th><th>{t('cart.quantity')}</th><th>{t('cart.price')}</th><th>{t('cart.subtotal')}</th></tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id}>
                <td>{i.productId}</td>
                <td>{i.quantity}</td>
                <td>${i.unitPrice.toFixed(2)}</td>
                <td>${i.subtotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{display:'flex', justifyContent:'flex-end', marginTop:12}}>
          <strong>{t('orderDetail.total')}: ${order.total.toFixed(2)}</strong>
        </div>
      </div>

      <div className="card" style={{marginTop:12}}>
        <h3>{t('orderDetail.history')}</h3>
        <ul>
          {history.map(h => (
            <li key={h.id}>
              <strong>{h.status}</strong> - {h.note || '—'} <span style={{color:'#666'}}>({new Date(h.changedAt).toLocaleString()})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}