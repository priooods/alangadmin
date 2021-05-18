<template>
  <div class="department">
    <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div class="w-full md:h-screen md:py-3 md:mr-1">
        <h1 class="font-bold text-lg hidden md:block">Department</h1>
        <div class="md:mt-9 mt-5 md:block" v-if="showeditaccess == 1">
          <h3 class="cursor-pointer" @click="showeditaccess = 2" v-show="$store.state.users.user.access_id != 6">Edit Akses Anggota</h3>
          <div class="mt-5 w-full">
            <TableGlobal :totalpage="pagesbydepart" :columns="MyDepartment" :datas="bydepartment"></TableGlobal>
          </div>
        </div>
        <div class="md:mt-9 mt-5 block" v-else>
          <div class="flex cursor-pointer w-16 justify-start" @click="showeditaccess = 1; formmodel.access_id = ''; formmodel.id = ''">
            <i class='bx bx-left-arrow-alt bx-xs my-auto'></i>
            <p class="my-auto ml-2">Kembali</p>
          </div>
          <p class="mt-7 mb-6">Editing Access Anggota</p>
          <Form label-position="top" :rules='rulesmodel' :model="formmodel" ref="formmodel">
            <FormItem prop="access_id" label="Type Access">
              <Select v-model="formmodel.access_id">
                <Option value="6">Anggota</Option>
                <Option value="5">Writer</Option>
              </Select>
            </FormItem>
            <FormItem prop="id" label="Nama Anggota">
              <Select v-model="formmodel.id">
                <Option v-for="item in finduser" :value="item.id" :key="item.id">{{ item.fullname }}</Option>
              </Select>
            </FormItem>
          </Form>
          <div class="mt-7 btn-prio py-2 w-40" @click="simpanaccess">Simpan Access</div>
        </div>
      </div>
      <div class="md:h-screen w-full md:ml-1 md:py-3">
        <div class="flex justify-center md:mt-20 md:px-3 text-center">
          <p>Fitur notes dan chatt untuk departement kamu sedang dalam developing. Mohon sabar menunggu informasi selanjutnya</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableGlobal from '../components/TableGlobal';
import Table_Model from '../model/Table_Model';
import Notifikasi from '../model/Notifikasi';
export default {
    name: "Department",
    components: {TableGlobal},
    mixins:[Table_Model, Notifikasi],
    data() {
      return {
        showeditaccess: 1,
        formmodel: {
          id: '',
          access_id: ''
        },
        rulesmodel:{
          access_id: [
              { required: true, message: 'Type Access harus di pilih !', trigger: 'change' },
          ],
        }
      }
    },
    computed:{
      finduser(){
        return this.$store.state.users.userall.filter((e) => {
          return (
            e.detail.department.departemen ===
            this.$store.state.users.user.departemen.departemen && e.access_id !== 1 &&  e.access_id !== 4
          );
        });
      },
      userslist() {
        return this.finduser.map((items) => ({
          ...items,
          value: items.id,
          label: items.fullname,
        }));
      },
    },
    methods: {
      simpanaccess(){
        this.helper_loading("Mengupdate Access..");
        this.$refs['formmodel'].validate((valid) => {
          if (valid) {
            this.$store.dispatch('users/UpdateUser', this.formmodel);
            return this.helper_request("Berhasil Di Berikan Access");
          } else {
            this.loading.close();
            return false;
          }
      });
      }
    },
}
</script>

<style>

</style>