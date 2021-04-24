import client from "./index";

export default {
  ProkerAll() {
    return client.get("proker/all");
  },
  AddProker(data) {
    return client.post("proker/add", data);
  },
};
