import client from "./index";

export default {
  LoginUser(data) {
    return client.post("user/login", data);
  },
  SemuaUser() {
    return client.get("user/userall");
  },
};
