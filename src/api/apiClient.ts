import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { STATUS_MESSAGE_MAP } from './statusMessages';

// Base Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for tokens
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor (optional global error handling)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message = STATUS_MESSAGE_MAP[status] || 'Unexpected error occurred.';

    // You could log this or show a toast
    console.error(`API Error (${status}): ${message}`);

    // Optional: handle toast messages here
    return Promise.reject(error);
  }
);

// Generic request function to auto-handle FormData vs JSON
const request = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const isFormData = data instanceof FormData;

  const response: AxiosResponse<T> = await axiosInstance.request({
    method,
    url,
    data,
    headers: {
      ...(isFormData ? { 'Content-Type': 'multipart/form-data' } : {}),
    },
    ...config,
  });

  return response.data;
};

// Exported API methods
const apiClient = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    request<T>('GET', url, undefined, config),

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>('POST', url, data, config),

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>('PUT', url, data, config),

  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>('PATCH', url, data, config),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    request<T>('DELETE', url, undefined, config),
};

export default apiClient;
