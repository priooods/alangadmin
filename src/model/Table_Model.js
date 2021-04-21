export default {
  data() {
    return {
      Proker: [],
      Department: [
        {
          title: "No",
          key: "index",
          width: 55,
        },
        {
          title: "Nama Department",
          key: "departemen",
        },
      ],
      Anggota: [
        {
          title: "No",
          key: "index",
          width: 55,
        },
        {
          title: "Nama",
          key: "fullname",
          width: 200,
        },
        {
          title: "Gender",
          key: "gender",
          width: 100,
        },
        {
          title: "Department",
          key: "departemen",
          ellipsis: true,
        },
        {
          title: "Motto",
          key: "motto",
          ellipsis: true,
        },
        {
          title: "Instagram",
          key: "sosmed",
          width: 140,
        },
      ],
    };
  },
  computed: {
    dataAnggota() {
      return this.$store.state.users.userall.map((items, index) => ({
        ...items,
        motto: items.detail.motto,
        sosmed: items.detail.sosmed,
        departemen: items.detail.department.departemen,
        index: index + 1,
      }));
    },
    dataDepartment() {
      return this.$store.state.department.departmentall.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
    dataProker() {
      if (this.$store.state.proker.ProkerAll != null) {
        return this.$store.state.proker.ProkerAll.map((items, index) => ({
          ...items,
          index: index + 1,
        }));
      }
    },
  },
};
