import axios from "axios";
import { baseurl } from "./baseurl";

const axiosInstance = axios.create({
  baseURL: baseurl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject("No response received from server");
    } else {
      return Promise.reject("Error setting up request");
    }
  }
);

export default axiosInstance;
