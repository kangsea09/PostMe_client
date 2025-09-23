import { api } from "./apiClient"

export const getPost = async () => {
    const res = await api.get("/api/posts");
    return res.data;
};

export const postcreate = async (payload) => {
    const { data } = await api.post("/api/auth/postcreate", payload);
    return data;
}

export const postedit = async (payload) => {
    const { data } = await api.post("/api/auth/postedit", payload);
    return data;
}


export const checkPost = async (payload) => {
  const { data } = await api.post("/api/auth/checkPost", payload);
  return data;
};