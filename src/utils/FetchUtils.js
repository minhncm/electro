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

const getToken = (isAdmin) => {
  const key = isAdmin ? "electro-admin-auth-store" : "electro-auth-store";
  return JSON.parse(localStorage.getItem(key) || "{}").state?.jwtToken;
};

httpRequest.interceptors.request.use(
  (config) => {
    // if (config.auth) {
    //   const token = getToken(config.isAdmin); // them khi call api coi quyen admin
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    // }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

httpRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  },
);

class FetchUtils {
  static async getAll(url, params = {}) {
    return await httpRequest.get(url, { params });
  }

  static async getById(url, enityId) {
    return await httpRequest.get(url + "/" + enityId);
  }

  static async create(url, data) {
    return await httpRequest.post(url, data);
  }

  static async update(url, entityId, data) {
    return await httpRequest.put(url + "/" + entityId, data);
  }

  static async deleteById(url, entityId) {
    return await httpRequest.delete(url + "/" + entityId);
  }

  static async deleteByIds(url, entityIds) {
    return await httpRequest.delete(url, { data: entityIds });
  }
}

export default FetchUtils;
