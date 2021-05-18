import axios from "axios";
const client = axios.create({
  baseURL: "http://priodwisembodo.online/alangdatabase/public/api/auth/",
});

export default client;
