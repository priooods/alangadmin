import client from "./index";

export default {
  ProkerAll() {
    return client.get("proker/all");
  },
};
