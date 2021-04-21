import client from "./index";

export default {
  DepartmentAll() {
    return client.get("departemen/all");
  },
};
