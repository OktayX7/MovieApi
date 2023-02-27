import {axiosAgent} from "../libs";

const responseBody = (response) => response?.data;

export const requests = {
  get: (url, params) => axiosAgent.get(url, {params}).then(responseBody),
  post: (url, body = {}) => axiosAgent.post(url, body).then(responseBody),
  put: (url, body) => axiosAgent.put(url, body).then(responseBody),
  patch: (url, body) => axiosAgent.patch(url, body).then(responseBody),
  del: (url, body) => axiosAgent.delete(url, {data: body}).then(responseBody),
};
