import axios from "axios";
import ApplicationPath from "~/constants/ApplicationPath";

const httpRequest = axios.create({
  baseURL: ApplicationPath.HOME_PATH,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

httpRequest.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpRequest.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    const isRefreshRequest = originalRequest?.url?.includes(
      "/auth/refresh-token",
    );

    // Access token hết hạn
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshRequest
    ) {
      originalRequest._retry = true;

      try {
        // Backend sẽ đọc refresh token từ cookie
        await axios.post("/auth/refresh-token");

        // Gọi lại request cũ
        return httpRequest(originalRequest);
      } catch (refreshError) {
        // Refresh thất bại → logout
        window.location.href = "/signin";

        return Promise.reject(refreshError.response?.data ?? refreshError);
      }
    }

    return Promise.reject(error.response?.data ?? error);
  },
);

class FetchUtils {
  static async getAll(url, params = {}) {
    return await httpRequest.get(url, { params });
  }

  static async getById(url, enityId) {
    return await httpRequest.get(url + "/" + enityId);
  }

  static async get(url) {
    return await httpRequest.get(url);
  }

  static async post(url, data) {
    return await httpRequest.post(url, data);
  }

  static async putById(url, entityId, data) {
    return await httpRequest.put(url + "/" + entityId, data);
  }

  static async put(url, data) {
    return await httpRequest.put(url, data);
  }

  static async patch(url, data) {
    return await httpRequest.patch(url, data);
  }

  static async deleteById(url, entityId) {
    return await httpRequest.delete(url + "/" + entityId);
  }

  static async deleteByIds(url, entityIds) {
    return await httpRequest.delete(url, { data: entityIds });
  }
}

export default FetchUtils;
