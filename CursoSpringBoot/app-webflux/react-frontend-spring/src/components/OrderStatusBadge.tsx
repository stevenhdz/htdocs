import React from 'react';
import { useI18n } from '../i18n/I18nContext';

const colors: Record<string, string> = {
  PLACED: '#e7f1ff',
  PREPARING: '#fff3cd',
  ON_THE_WAY: '#e2e3e5',
  DELIVERED: '#d1e7dd',
  CANCELLED: '#f8d7da'
};

const OrderStatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const { t } = useI18n();
  return <span className="badge" style={{ background: colors[status] || '#f1f1f1' }}>{t(`status.${status}`)}</span>;
};
export default OrderStatusBadge;