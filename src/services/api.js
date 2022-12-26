import Request from "./request";
import { API_ROOT, AuthService } from "./";

const api = {
  login(user, path) {
    return Request.post(`${API_ROOT}${path}`, user);
  },
  logout(path) {
    return Request.post(`${API_ROOT}${path}/logout-user`);
  },
  get(id, path, filter) {
    const q = filter ? `?filter=${JSON.stringify(filter)}` : "";
    return Request.get(`${API_ROOT}${path}/${id}${q}`);
  },
  all(path, filter) {
    const token=AuthService.getAccessToken();
    const q = filter ? `?filter=${JSON.stringify(filter)}` : "";
    return Request.get(`${API_ROOT}${path}${q}`,{ headers: {
      "x-access-token": token,
    },});
  },
  create(data, path) {
    const token=AuthService.getAccessToken();
    return Request.post(`${API_ROOT}${path}`, data,{ headers: {
      "x-access-token": token,
    },});
  },
  sendtoMoodle(path) {
    return Request.post(`${path}`);
  },
  update(data, path) {
    return Request.patch(`${API_ROOT}${path}/${data.id}`, data);
  },
  remove(id, path) {
    const token=AuthService.getAccessToken();
    return Request.delete(`${API_ROOT}${path}?id=${id}`,{ headers: {
      "x-access-token": token,
    },});
  }
};

export default api;
