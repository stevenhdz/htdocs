import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { login as apiLogin } from '../api/auth';

type AuthContextType = {
  token: string | null;
  isAuth: boolean;
  roles: string[];
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

function parseJwt(token: string): any | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch { return null; }
}

function extractRoles(payload: any): string[] {
  if (!payload) return [];
  const candidates = [payload.roles, payload.authorities, payload.role, payload.scope];
  for (const c of candidates) {
    if (!c) continue;
    if (Array.isArray(c)) return c.map(String);
    if (typeof c === 'string') return c.split(/[ ,]+/).map(s=>s.trim()).filter(Boolean);
  }
  return [];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [roles, setRoles] = useState<string[]>(() => {
    const t = localStorage.getItem('token');
    const p = t ? parseJwt(t) : null;
    return extractRoles(p);
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      const p = parseJwt(token);
      setRoles(extractRoles(p));
    } else {
      localStorage.removeItem('token');
      setRoles([]);
    }
  }, [token]);

  const value = useMemo(() => ({
    token,
    isAuth: !!token,
    roles,
    isAdmin: roles.includes('ADMIN') || roles.includes('ROLE_ADMIN'),
    login: async (email: string, password: string) => {
      const res = await apiLogin({ email, password });
      if (res.token) {
        setToken(res.token);
      } else {
        throw new Error(res?.error || 'Inicio de sesión fallido');
      }
    },
    logout: () => setToken(null),
  }), [token, roles]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}