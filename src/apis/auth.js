import { api } from "./apiClient"

export const signup = async (payload) => {
    const {data} = await api.post("/api/auth/signup", payload);
    return data;
};

export const login = async (payload) => {
    const {data} = await api.post("/api/auth/login", payload);
    return data;
};

export const me = async() => {
    const {data} = await api.get("/api/auth/me");
    return data;
};

export const mypage = async () => {
  const { data } = await api.get("/api/auth/me");
  return data;
};