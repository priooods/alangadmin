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
          key: "department",
          ellipsis: true,
          width: 300,
        },
        {
          title: "Motto",
          key: "motto",
          ellipsis: true,
          width: 300,
        },
        {
          title: "Instagram",
          key: "sosmed",
          slot: "sosmed",
          width: 140,
        },
      ],
      MyDepartment: [
        {
          title: "No",
          key: "index",
          width: 55,
        },
        {
          title: "Nama Lengkap",
          key: "fullname",
        },
        {
          title: "Access",
          key: "access",
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
        department: items.detail.department ? items.detail.department.departemen : '---',
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
    allbydepartment() {
      return this.$store.state.users.userall.filter((e) => {
        return e.detail.department.departemen ===
          this.$store.state.users.user.departemen.departemen
          
      });
    },
    bydepartment() {
      return this.allbydepartment.map((items, index) => ({
        ...items,
        index: index + 1,
        access: items.access.access,
      }));
    },
    pagesbydepart() {
      return (this.bydepartment.length / 5) * 10;
    },
  },
};
