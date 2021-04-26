export default {
  data() {
    return {
      proker: {
        formproker: {
          judul: "",
          ketua: "",
          lokasi: "",
          desc: "",
          tgl_mulai: "",
          tgl_selesai: "",
          department_id: this.$store.state.users.user.departemen.id,
          gol_point: null,
        },
        departemen: this.$store.state.users.user.departemen.departemen,
        formValidation: {
          judul: [
            {
              required: true,
              message: "Harap Masukan Judul Proker",
              trigger: "blur",
            },
          ],
          ketua: [
            {
              required: true,
              message: "Harap Masukan Nama Ketua Pelaksana",
              trigger: "blur",
            },
          ],
          lokasi: [
            {
              required: true,
              message: "Harap Masukan lokasi Pelaksanaan Proker",
              trigger: "blur",
            },
          ],
          desc: [
            {
              required: true,
              message: "Harap Masukan Deskripsi Proker",
              trigger: "blur",
            },
          ],
          tgl_mulai: [
            {
              required: true,
              type: "date",
              message: "Please select the date",
              trigger: "change",
            },
          ],
          tgl_selesai: [
            {
              required: true,
              type: "date",
              message: "Please select the date",
              trigger: "change",
            },
          ],
        },
      },
    };
  },
};
