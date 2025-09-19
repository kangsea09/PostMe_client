import { api } from "./apiClient"

export const getPost = async () => {
    const res = await api.get("/api/posts");
    return res.data;
};

