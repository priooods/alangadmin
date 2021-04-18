export default {
  data() {
    return {
      loading: null,
    };
  },
  methods: {
    helper_loading(text) {
      return (
        this.loading ==
        this.$vs.loading({
          text: text,
        })
      );
    },
    helper_form() {
      return this.$vs.notification({
        color: "danger",
        position: "top-left",
        title: "Gagal Mengirim Permintaan !",
        text:
          "Harap Lengkap semua form yang tersedia untuk melanjutkan permintaan",
      });
    },
  },
};
