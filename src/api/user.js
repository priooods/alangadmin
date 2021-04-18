import client from "./index";

export default {
  LoginUser(data) {
    return client.post("login/user", data);
  },
};
