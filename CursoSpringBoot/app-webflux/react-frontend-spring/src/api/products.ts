import api from './http';
import type { Product } from '../types';

export type CreateProduct = {
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  categoryId: number;
};

export async function listProducts(category?: string): Promise<Product[]> {
  const res = await api.get('/api/products', { params: category ? { category } : {} });
  return res.data;
}

export async function getProduct(id: number): Promise<Product> {
  const res = await api.get(`/api/products/${id}`);
  return res.data;
}

export async function searchProducts(q: string): Promise<Product[]> {
  const res = await api.get('/api/products/search', { params: { q } });
  return res.data;
}

export async function createProduct(p: CreateProduct): Promise<Product> {
  // Backend esperado: { name, price, description?, imageUrl?, categoryId }
  const res = await api.post('/api/products', p);
  return res.data;
}