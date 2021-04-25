import client from "./index";

export default {
  LoginUser(data) {
    return client.post("user/login", data);
  },
  SemuaUser() {
    return client.get("user/userall");
  },
  UpdateUser(data) {
    return client.post("user/update", data);
  },
  UpdateDetail(data) {
    return client.post("user/detail/update", data);
  },
  MeUser(token) {
    return client.post("user/me", { token: token });
  },
  Register(data) {
    return client.post("user/register", data);
  },
  AddDetail(data) {
    return client.post("user/detail/add", data);
  },
};
