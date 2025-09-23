// src/apis/apiClient.ts
import axios from "axios";

// Vite는 반드시 변수명이 VITE_로 시작해야 노출됨
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL, // 방금 위에서 만든거!
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: localStorage에 저장해둔 토큰을 Authorization 헤더로 자동 첨부
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use (
  (response) => response,
  async (error) => {
    if(error.response?.status === 401) {
      localStorage.removeItem("accessToken")
      window.location.href="/login";
      return Promise.reject(error)
    }

    throw error;
  }
)