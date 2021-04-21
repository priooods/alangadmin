export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      formValidation: {
        name: [
          {
            required: true,
            message: "Harap Masukan Username Kamu",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Harap Masukan Password Kamu",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
