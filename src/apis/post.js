import { api } from "./apiClient"

export const getPost = async () => {
    const {data} = await api.get("/api/posts");
    return data;
};

export const checkPost = async (id) => {
  const { data } = await api.get(`/api/posts/${id}`);
  return data;
};

export const postcreate = async (payload) => {
    const { data } = await api.post("/api/postcreate", payload);
    return data;
}

export const postedit = async (payload) => {
    const { data } = await api.post("/api/postedit", payload);
    return data;
}

