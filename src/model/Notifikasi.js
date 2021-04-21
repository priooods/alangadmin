export default {
  data() {
    return {
      loading: '',
    };
  },
  methods: {
    helper_loading(text) {
      return (
        this.loading =
        this.$vs.loading({
          text: text,
        })
      );
    },
    helper_form() {
      return this.$Message.error({
        content: "Harap Lengkapi Semua Form Yang Tersedia ",
        duration: 6,
      });
    },
    helper_success(text) {
      return this.$Message.success({
        content: text,
        duration: 6,
      });
    },
    helper_failure(text) {
      return this.$Message.error({
        content: text,
        duration: 6,
      });
    },
    helper_request(text) {
      setTimeout(() => {
        if (this.$cookies.get("next") == 1) {
          this.loading.close();
          return this.helper_success(text);
        }
        this.loading.close();
        return this.helper_failure(
          "Kamu gagal mengirim permintaan ke server. Harap periksa kembali koneksi internet kamu"
        );
      }, 3000);
    },
    helper_request_login() {
      setTimeout(() => {
        if (this.$cookies.get("next") == 1) {
          this.loading.close();
          this.helper_success(
            "Haii selamat datang kembali. Bagaimana kabar kamu hari ini ?"
          );
          return this.$router.push({ path: "admin/dashboard" }, () => {});
        }
        this.loading.close();
        return this.helper_failure(
          "Harap periksa kembali informasi akun kamu dan koneksi internet kamu"
        );
      }, 3000);
    },
  },
};
