import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/products';
import type { Product } from '../types';
import { useI18n } from '../i18n/I18nContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [p, setP] = useState<Product | null>(null);
  const { t } = useI18n();

  useEffect(() => {
    if (id) getProduct(Number(id)).then(setP).catch(console.error);
  }, [id]);

  const addToCart = () => {
    if (!p) return;
    const raw = localStorage.getItem('cart');
    let items: any[] = raw ? JSON.parse(raw) : [];
    const idx = items.findIndex((i:any) => i.productId === p.id);
    if (idx >= 0) items[idx].quantity += 1;
    else items.push({ productId: p.id, quantity: 1, product: p });
    localStorage.setItem('cart', JSON.stringify(items));
    alert(t('productDetail.added'));
  };

  if (!p) return <div className="container">...</div>;

  return (
    <div className="container">
      <div className="card">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
          <img src={p.imageUrl || 'https://via.placeholder.com/600x400?text=Producto'} alt={p.name} style={{width:'100%', borderRadius:8}}/>
          <div>
            <h2>{p.name}</h2>
            <div style={{color:'#666'}}>{p.category?.name}</div>
            <p>{p.description}</p>
            <h3>${p.price.toFixed(2)}</h3>
            <button className="btn primary" onClick={addToCart}>{t('product.add')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}