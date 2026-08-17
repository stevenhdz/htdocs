import React, { useEffect, useMemo, useState } from 'react';
import { listProducts, searchProducts } from '../api/products';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { useI18n } from '../i18n/I18nContext';

type CartItem = { productId: number; quantity: number; product: Product };

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [q, setQ] = useState('');
  const { t } = useI18n();

  useEffect(() => {
    listProducts().then(setProducts).catch(console.error);
  }, []);

  const addToCart = (p: Product) => {
    const raw = localStorage.getItem('cart');
    let items: CartItem[] = raw ? JSON.parse(raw) : [];
    const idx = items.findIndex(i => i.productId === p.id);
    if (idx >= 0) items[idx].quantity += 1;
    else items.push({ productId: p.id, quantity: 1, product: p });
    localStorage.setItem('cart', JSON.stringify(items));
    alert('Producto agregado al carrito');
  };

  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) { listProducts().then(setProducts); return; }
    const res = await searchProducts(q.trim());
    setProducts(res);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>{t('products.title')}</h2>
        <form onSubmit={onSearch} style={{display:'flex', gap:8}}>
          <input className="input" placeholder={t('search.placeholder')} value={q} onChange={e=>setQ(e.target.value)} />
          <button className="btn">{t('search.button')}</button>
        </form>
      </div>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
      </div>
    </div>
  );
}