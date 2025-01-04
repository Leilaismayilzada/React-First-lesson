import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export const getImages = async (url, cb) => {
  try {
    const response = await AxiosInstance.get(url);
    cb(response.data);
  } catch (error) {
    cb(null);
  }
};
