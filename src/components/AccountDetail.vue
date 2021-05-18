<template>
  <div class="accountdetail">
      <Form ref="formdetail" :rules="rulesForm" :model="formdetail" label-position="top" class="md:grid md:grid-rows-4 md:grid-cols-2 md:gap-2">
        <FormItem prop="department" label="Department">
          <Input :disabled="true" v-model="formdetail.departemen" placeholder="alamat tinggal kamu..."></Input>
        </FormItem>
        <FormItem prop="alamat" label="Alamat">
            <Input :readonly="disable" v-model="formdetail.alamat" placeholder="alamat tinggal kamu..."></Input>
        </FormItem>
        <FormItem prop="motto" label="Motto">
            <Input :readonly="disable" v-model="formdetail.motto" placeholder="Motto kamu..."></Input>
        </FormItem>
        <FormItem prop="pendidikan" label="Pendidikan">
            <Input :readonly="disable" v-model="formdetail.pendidikan" placeholder="pendidikan kamu..."></Input>
        </FormItem>
        <FormItem prop="pekerjaan" label="Pekerjaan">
            <Input :readonly="disable" v-model="formdetail.pekerjaan" placeholder="pekerjaan kamu..."></Input>
        </FormItem>
        <FormItem prop="sosmed" label="Instagram">
            <Input :readonly="disable" v-model="formdetail.sosmed" placeholder="ex: @instagramku."></Input>
        </FormItem>
        <FormItem prop="contact" label="Contact">
            <Input :readonly="disable" v-model="formdetail.contact" placeholder="ex: 08123456789."></Input>
        </FormItem>
      </Form>
      <div class="btn-prio md:w-2/6 px-4 py-1 mt-4" v-show="showedit == false" @click="enables">Enable Editing</div>
      <div class="md:flex grid grid-rows-1 grid-cols-2 gap-2" v-show="showedit">
        <div class="btn-prio px-4 py-1 mt-4" @click="updateDetails">Send Update</div>
        <div class="btn-prio px-4 py-1 mt-4" @click="closeedit">Cancel</div>
      </div>
  </div>
</template>

<script>
import Notifikasi from '../model/Notifikasi';
export default {
  mixins: [Notifikasi],
  props:{
      formdetail: null,
      disable: Boolean
  },
  data() {
    return {
      showedit: false,
      department: [
        { value: 'Chief Exceutive Organizational', label: 'Chief Exceutive Organizational' },
        { value: 'Chief Financial Officer', label: 'Chief Financial Officer' },
        { value: 'Chief Operating Organizational', label: 'Chief Operating Organizational' },
        { value: 'Human and Organizational Resource Development', label: 'Human and Organizational Resource Development' },
        { value: 'Learning and Curriculum Development', label: 'Learning and Curriculum Development' },
        { value: 'Media and Design Management', label: 'Media and Design Management' },
      ],
      rulesForm:{
        alamat: [
            { required: true, message: 'Alamat tidak boleh kosong !', trigger: 'blur' }
        ],
        motto: [
            { required: true, message: 'Motto tidak boleh kosong !', trigger: 'blur' }
        ],
      },
      formupdate: {
        token: this.$cookies.get('token'),
        user_id: this.$store.state.users.user.id,
        alamat: null,
        motto: null,
        pendidikan: null,
        pekerjaan: null,
        sosmed: null,
        contact: null
      }
    }
  },
  methods: {
    updateDetails(){
      this.helper_loading("Mengupdate Data..");
      this.$refs['formdetail'].validate((valid) => {
          if (valid) {
            this.formupdate.alamat = this.formdetail.alamat;
            this.formupdate.motto = this.formdetail.motto;
            this.formupdate.pendidikan = this.formdetail.pendidikan;
            this.formupdate.pekerjaan = this.formdetail.pekerjaan;
            this.formupdate.sosmed = this.formdetail.sosmed;
            this.formupdate.contact = this.formdetail.contact;
            this.$store.dispatch('users/UpdateDetail', this.formupdate);
            this.loading.close();
            return this.helper_success("Berhasil Di Update");
          } else {
            this.loading.close();
            return false;
          }
      });
    },
    enables(){
      this.showedit = true;
      return this.$emit('enableedit', false);
    },
    closeedit(){
      this.showedit = false;
      return this.$emit('disableedit', true);
    }
  },
}
</script>

<style>

</style>