import api from './http';
import type { Order, OrderResponse } from '../types';

export type CreateOrderItem = { productId: number; quantity: number; };
export type CreateOrderPayload = { items: CreateOrderItem[]; note?: string };

export async function createOrder(payload: CreateOrderPayload): Promise<OrderResponse> {
  const res = await api.post('/api/orders', payload);
  return res.data;
}

export async function getOrder(id: number): Promise<OrderResponse> {
  const res = await api.get(`/api/orders/${id}`);
  return res.data;
}

export async function myOrders(): Promise<Order[]> {
  const res = await api.get('/api/orders/me');
  return res.data;
}

export async function updateOrderStatus(id: number, status: string, note?: string): Promise<OrderResponse> {
  const res = await api.patch(`/api/orders/${id}/status`, { status, note });
  return res.data;
}