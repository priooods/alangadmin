import axios from "axios";
const client = axios.create({
  baseURL: "https://jajandong.com/alangdatabase/public/api/auth/",
});

export default client;
