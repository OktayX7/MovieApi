import axios from "axios";

export const axiosAgent = axios.create({
  baseURL: "https://api.themoviedb.org/3/", //her url bunun sonuna eklenecek//instance
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apiKey: "95c5482cbad02604a3e55f1981d24710",
    language: localStorage.getItem("language") ? localStorage.getItem("language") : "en-US",
  },
});

// hatalar buraya düşecek responsun içine alert çıkartma vb burdan yapılacak

axiosAgent.interceptors.response.use(
  (response) => response,
  async (error) => {
    alert(error?.response?.data?.status_message ?? "Bir hata meydana geldi...");

    const response = error.response;
    return Promise.resolve(response);
  }
);

// aldığımız token key koyacağız
axiosAgent.interceptors.request.use(
  async (config) => {
    config.headers.Authorization =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM1NDgyY2JhZDAyNjA0YTNlNTVmMTk4MWQyNDcxMCIsInN1YiI6IjYzZjRjMmJlZmJlMzZmMDA4MTk1OTIxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yn29srmHma9x7ETncUnEmWgVwAo8azuSiHrEOn4I_Ww";

    config.params.language = localStorage.getItem("language") ?? "en-US";

    return config;
  },
  (error) => Promise.reject(error)
);
