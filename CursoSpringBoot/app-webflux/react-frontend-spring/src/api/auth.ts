import api from './http';
import type { AuthResponse } from '../types';

export type LoginPayload = { email: string; password: string; };
export type RegisterPayload = { name: string; email: string; password: string; };

export async function login(data: LoginPayload): Promise<AuthResponse> {
  const res = await api.post('/api/auth/login', data);
  return res.data;
}

export async function register(data: RegisterPayload): Promise<AuthResponse> {
  const res = await api.post('/api/auth/register', data);
  return res.data;
}

export async function forgotPassword(email: string): Promise<{message: string}> {
  const res = await api.post('/api/auth/forgot-password', { email });
  return res.data;
}

export async function resetPassword(token: string, newPassword: string): Promise<{message?: string, error?: string}> {
  const res = await api.post('/api/auth/reset-password', { token, newPassword });
  return res.data;
}