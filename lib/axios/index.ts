import axios from "axios";
import { getSession } from "next-auth/react";

const base_URL = process.env.NEXT_PUBLIC_API_URL || "";
const base_API_CEP_URL = process.env.NEXT_PUBLIC_API_CEP_URL || "";

const apiWithoutAuth = axios.create({
  baseURL: base_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

const api = axios.create({
  baseURL: base_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

const apiCEP = axios.create({
  baseURL: base_API_CEP_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    const access_token = session?.user?.access_token;
    if (!!access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      const refreshToken = localStorage.getItem("refresh_token");
      try {
        const { data } = await api.post("/auth/refresh-token", {
          token: refreshToken,
        });
        localStorage.setItem("access_token", data.access_token);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${data.access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.log("🚀 ~ refreshError:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { base_URL, api, apiCEP, apiWithoutAuth };
