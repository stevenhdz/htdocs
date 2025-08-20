import React, { useEffect, useState } from 'react';
import { myOrders } from '../api/orders';
import type { Order } from '../types';
import { Link } from 'react-router-dom';
import OrderStatusBadge from '../components/OrderStatusBadge';
import { useI18n } from '../i18n/I18nContext';

export default function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { t } = useI18n();

  useEffect(() => {
    myOrders().then(setOrders).catch(console.error);
    const t = setInterval(() => {
      myOrders().then(setOrders).catch(()=>{});
    }, 15000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="container">
      <h2>{t('orders.mine')}</h2>
      <div className="notice" style={{margin:'8px 0'}}>
        {t('orders.autorefresh')}
      </div>
      <div className="card">
        {orders.length === 0 ? <div>{t('orders.none')}</div> : (
          <table className="table">
            <thead>
              <tr><th>{t('orders.number')}</th><th>{t('orders.status')}</th><th>{t('orders.total')}</th><th>{t('orders.createdAt')}</th><th></th></tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td>#{o.id}</td>
                  <td><OrderStatusBadge status={o.status} /></td>
                  <td>${o.total.toFixed(2)}</td>
                  <td>{new Date(o.createdAt).toLocaleString()}</td>
                  <td><Link to={`/orders/${o.id}`}>{t('orders.view')}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}