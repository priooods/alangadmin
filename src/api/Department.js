import client from "./index";

export default {
  DepartmentAll() {
    return client.post("departemen/all");
  },
};
