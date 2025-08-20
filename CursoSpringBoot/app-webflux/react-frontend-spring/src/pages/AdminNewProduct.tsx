import React, { useState } from 'react';
import { createProduct } from '../api/products';
import { useNavigate } from 'react-router-dom';

export default function AdminNewProduct() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categoryId, setCategoryId] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null); setMsg(null);
    setLoading(true);
    try {
      const p = await createProduct({ name, price: Number(price), description, imageUrl, categoryId: Number(categoryId) });
      setMsg('Producto creado correctamente');
      setTimeout(()=> nav(`/product/${p.id}`), 700);
    } catch (e:any) {
      setErr(e?.response?.data?.error || 'Error creando producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Nuevo Producto</h2>
      <form className="card" onSubmit={submit}>
        {msg && <div className="success" style={{marginBottom:12}}>{msg}</div>}
        {err && <div className="error" style={{marginBottom:12}}>{err}</div>}
        <div className="form-row">
          <label className="label">Nombre</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="form-row">
          <label className="label">Precio</label>
          <input className="input" type="number" step="0.01" value={price} onChange={e=>setPrice(Number(e.target.value))} required />
        </div>
        <div className="form-row">
          <label className="label">Descripción</label>
          <textarea className="input" value={description} onChange={e=>setDescription(e.target.value)} rows={3} />
        </div>
        <div className="form-row">
          <label className="label">Imagen (URL)</label>
          <input className="input" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} />
        </div>
        <div className="form-row">
          <label className="label">Categoría (ID)</label>
          <input className="input" type="number" value={categoryId} onChange={e=>setCategoryId(Number(e.target.value))} min={1} required />
        </div>
        <button className="btn primary" disabled={loading}>{loading ? 'Creando...' : 'Crear'}</button>
      </form>
    </div>
  );
}