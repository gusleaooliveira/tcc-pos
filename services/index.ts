import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { io } from 'socket.io-client';

export const queryClient = new QueryClient();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const apiDarcio = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DARCIO_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const socket = io(process.env.NEXT_PUBLIC_API_URL, {
  // withCredentials: true,
});
