// src/utils/axios.ts
import axios from "axios";

const Axios = axios.create({
  baseURL: "https://stage-api.sanaap.co/api/v2/app/", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Example: Request Interceptor (Optional)
Axios.interceptors.request.use(
  (config) => {
    // You can modify headers before sending the request (e.g., add authorization token)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example: Response Interceptor (Optional)
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally (e.g., show notifications or redirect)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
    }
    return Promise.reject(error);
  }
);

export default Axios;
