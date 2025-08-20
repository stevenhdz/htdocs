import axios from 'axios';
import { getLang } from '../i18n/lang';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers = config.headers ?? {};
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  // Always send Accept-Language for i18n on backend
  config.headers['Accept-Language'] = getLang();
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Optionally logout on 401
      // localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default api;