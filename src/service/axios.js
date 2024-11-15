import axios from "axios";

const instance = axios.create({
  // change two place
  baseURL: "https://ksp-server-production.up.railway.app",

  // baseURL: "https://api.apancollections.com",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    Accept: "multipart/form-data",
  },
});

export default instance;
