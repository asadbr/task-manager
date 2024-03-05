import axios from "axios";

export const apiService = axios.create({
  baseURL: process.env.VUE_APP_DB_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
