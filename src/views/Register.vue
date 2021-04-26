<template>
  <div class="register">
        <div v-show="showform == 1" class="flex py-5 h-screen justify-center items-center">
          <div class="md:w-2/6 px-2">
            <h1 class="font-bold text-lg">Daftar Anggota Alang Institute</h1>
            <p>Harap lengkapi semua form yang tersedia untuk mendaftar keanggotaan baru</p>
            <Form ref="formItem" :rules="rulesForm" :model="formItem" label-position="top" class="mt-7 md:grid md:grid-rows-4 md:gap-2">
                <FormItem label="Username" prop="name">
                    <Input v-model="formItem.name" placeholder="username kamu..."></Input>
                </FormItem>
                <FormItem label="Password" prop="password">
                    <Input type="password" v-model="formItem.password" placeholder="password kamu..."></Input>
                </FormItem>
                <FormItem label="Fullname" prop="fullname">
                    <Input v-model="formItem.fullname" placeholder="Fullname kamu..."></Input>
                </FormItem> 
                <FormItem label="gender" prop="gender">
                <Select v-model="formItem.gender">
                    <Option v-for="item in gender" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                </FormItem>
            </Form>
            <div class="flex">
                <Upload action :before-upload="onFileChange" class="my-auto">
                    <Button icon="ios-cloud-upload-outline">Upload Foto Profile</Button>
                </Upload>
                <div v-if="this.avatar !== null" class="my-auto ml-3">{{ this.avatar.name }}</div>
            </div>
            <div class="flex grid grid-rows-1 grid-cols-2 gap-2">
                <div class="btn-prio px-4 py-1 mt-4" @click="saveinfo">Simpan & Lanjutkan</div>
            </div>
          </div>
      </div>
      <div v-show="showform == 2" class="flex py-5 justify-center items-center">
          <div class="md:w-2/6 px-2 mb-7">
              <p class="my-5">Harap lengkapi semua form yang diberi tanda bintang</p>
              <Form ref="formdetail" :rules="rulesdetail" :model="formdetail" label-position="top" class="md:mt-7 md:grid  md:gap-2">
                <FormItem prop="departemen" label="Department">
                    <Select v-model="formdetail.departemen">
                        <Option v-for="item in department" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem prop="alamat" label="Alamat">
                    <Input v-model="formdetail.alamat" placeholder="alamat tinggal kamu..."></Input>
                </FormItem>
                <FormItem prop="motto" label="Motto">
                    <Input v-model="formdetail.motto" placeholder="Motto kamu..."></Input>
                </FormItem>
                <FormItem prop="pendidikan" label="Pendidikan">
                    <Input v-model="formdetail.pendidikan" placeholder="pendidikan kamu..."></Input>
                </FormItem>
                <FormItem prop="pekerjaan" label="Pekerjaan">
                    <Input v-model="formdetail.pekerjaan" placeholder="pekerjaan kamu..."></Input>
                </FormItem>
                <FormItem prop="sosmed" label="Instagram">
                    <Input v-model="formdetail.sosmed" placeholder="ex: @instagramku."></Input>
                </FormItem>
                <FormItem prop="contact" label="Contact">
                    <Input v-model="formdetail.contact" placeholder="ex: 08123456789."></Input>
                </FormItem>
            </Form>
            <div class="md:flex grid grid-rows-1 grid-cols-2 gap-2">
                <div class="btn-prio px-4 py-1 mt-4" @click="addDetails">Simpan Semua Data</div>
            </div>
          </div>
      </div>
      <div v-show="showform == 3" class="h-screen flex justify-center px-5 items-center">
          <div class="md:w-2/6">
            <h1 class="mb-10">Berhasil Menyimpan Semua Informasi Account Anda. <br>
                silahkan pergi kehalaman admin untuk masuk <br>
                ke website utama menggunakan account yang sudah anda daftarkan</h1>
            <router-link to="/">Click text ini untuk pergi ke halaman login</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import Notifikasi from '../model/Notifikasi';
export default {
    mixins: [Notifikasi],
    name: 'Register',
    data() {
        return {
            showform: 1,
            avatar: null,
            formItem: {
                name: '',
                password: '',
                gender: '',
                fullname: ''
            },
            gender: [
                {
                    value: 'Pria',
                    label: 'Pria'
                },
                {
                    value: 'Wanita',
                    label: 'Wanita'
                },
            ],
            rulesForm:{
                name: [
                    { required: true, message: 'Username tidak boleh kosong !', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Password tidak boleh kosong !', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'Panjang password minimal 6 charakter', trigger: 'blur' }
                ],
                fullname: [
                    { required: true, message: 'Fullname tidak boleh kosong !', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: 'Gender tidak boleh kosong !', trigger: 'blur' }
                ],
            },
            formdetail: {
                departemen: '',
                alamat: '',
                motto: '',
                pendidikan: '',
                pekerjaan: '',
                sosmed: '',
                contact: '',
            },
            department: [
                { value: 1, label: 'Chief Exceutive Organizational' },
                { value: 3, label: 'Chief Financial Officer' },
                { value: 2, label: 'Chief Operating Organizational' },
                { value: 5, label: 'Human and Organizational Resource Development' },
                { value: 4, label: 'Learning and Curriculum Development' },
                { value: 6, label: 'Media and Design Management' },
            ],
            rulesdetail:{
                alamat: [
                    { required: true, message: 'Alamat tidak boleh kosong !', trigger: 'blur' }
                ],
                motto: [
                    { required: true, message: 'Motto tidak boleh kosong !', trigger: 'blur' }
                ],
                departemen: [
                    { required: true, message: 'Departement tidak boleh kosong !',trigger: 'change'  }
                ],
            },
        }
  },
  methods: {
    onFileChange (file) {
        this.avatar = file;
        return false;
    },
    saveinfo(){
        this.helper_loading("Menyimpan Data..");
        this.$refs['formItem'].validate((valid) => {
          if (valid) {
            var formData = new FormData();
            formData.append('name', this.formItem.name);
            formData.append('fullname', this.formItem.fullname);
            formData.append('type', 'Pengguna');
            formData.append('password', this.formItem.password);
            formData.append('gender', this.formItem.gender);
            if(this.avatar != null){
              formData.append('avatar', this.avatar);
            }
            this.$store.dispatch('users/AddUsers', formData);
            this.loading.close();
            this.helper_success("Berhasil Di Simpan");
            return this.showform = 2;
          } else {
            this.loading.close();
            return false;
          }
      });
    },
    addDetails(){
        this.helper_loading("Menyimpan Semua Data..");
        this.$refs['formdetail'].validate((valid) => {
        if (valid) {
            var formData = new FormData();
            formData.append('user_id', this.$store.state.users.newuser.id); 
            formData.append('alamat', this.formdetail.alamat);
            formData.append('motto', this.formdetail.motto);
            formData.append('departemen_id', this.formdetail.departemen);
            if (this.formdetail.pendidikan != null) {
                if (this.formdetail.pendidikan.length > 0) {
                    formData.append('pendidikan', this.formdetail.pendidikan); 
                }
            }
            if (this.formdetail.pekerjaan != null) {
                if (this.formdetail.pekerjaan.length > 0) {
                    formData.append('pekerjaan', this.formdetail.pekerjaan);
                } 
            }
            if (this.formdetail.sosmed != null) {
                if (this.formdetail.sosmed.length > 0) {
                    formData.append('sosmed', this.formdetail.sosmed);
                }
            }
            if (this.formdetail.contact != null) {
                if (this.formdetail.contact.length > 0) {
                    formData.append('contact', this.formdetail.contact);
                }
            }
            this.$store.dispatch('users/AddDetail', formData);
            this.loading.close();
            this.showform = 3;
            return this.helper_success("Berhasil Menyimpan Semua Data");
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