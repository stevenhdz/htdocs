import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';

type Props = { product: Product; onAdd?: (p: Product) => void };

const ProductCard: React.FC<Props> = ({ product, onAdd }) => {
  const { t } = useI18n();
  return (
    <div className="card">
      <img src={product.imageUrl || 'https://via.placeholder.com/400x250?text=Producto'} alt={product.name} style={{width:'100%', height:160, objectFit:'cover', borderRadius:8, marginBottom:8}} />
      <h3 style={{margin: '8px 0'}}>{product.name}</h3>
      <div style={{color:'#666'}}>{product.category?.name}</div>
      <div style={{fontWeight:600, margin:'6px 0'}}>${product.price.toFixed(2)}</div>
      <div style={{display:'flex', gap:8}}>
        <Link className="btn" to={`/product/${product.id}`}>{t('product.details')}</Link>
        {onAdd && <button className="btn primary" onClick={()=>onAdd(product)}>{t('product.add')}</button>}
      </div>
    </div>
  );
}
export default ProductCard;