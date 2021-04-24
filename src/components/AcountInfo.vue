<template>
  <div class="account">
      <Form ref="formItem" :rules="rulesForm" :model="formItem" label-position="top" class="md:grid md:grid-rows-2 md:grid-cols-2 md:gap-2">
        <FormItem label="Username" prop="name">
            <Input :readonly="disable" v-model="formItem.name" placeholder="username kamu..."></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
            <Input :readonly="disable" type="password" v-model="formItem.password" placeholder="password kamu..."></Input>
        </FormItem>
        <FormItem label="Fullname" prop="fullname">
            <Input :readonly="disable" v-model="formItem.fullname" placeholder="Fullname kamu..."></Input>
        </FormItem>
        <FormItem label="gender" prop="gender">
          <Select :readonly="disable" v-model="formItem.gender">
            <Option v-for="item in gender" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
      </Form>
      <div class="md:flex">
          <Upload action :disabled="disable" :before-upload="onFileChange" class="my-auto">
            <Button icon="ios-cloud-upload-outline">Update Foto Profile</Button>
          </Upload>
          <div v-if="this.avatar !== null" class="my-auto md:ml-3">{{ this.avatar.name }}</div>
        </div>
      <div class="btn-prio md:w-2/6 px-4 py-1 mt-4" v-show="showedit == false" @click="enables">Enable Editing</div>
      <div class="md:flex grid grid-rows-1 grid-cols-2 gap-2" v-show="showedit">
        <div class="btn-prio px-4 py-1 mt-4" @click="updateInfo">Send Update</div>
        <div class="btn-prio px-4 py-1 mt-4" @click="closeedit">Cancel</div>
      </div>
  </div>
</template>

<script>
import Notifikasi from '../model/Notifikasi';
export default {
  mixins: [Notifikasi],
  name: "AccountInfo",
  props:{
    formItem: null,
    disable: Boolean
  },
  data() {
    return {
      showedit: false,
      avatar: null,
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
    }
  },
  methods: {
    onFileChange (file) {
      this.avatar = file;
      return false;
    },
    updateInfo(){
      this.helper_loading("Mengupdate Data..");
      this.$refs['formItem'].validate((valid) => {
          if (valid) {
            var formData = new FormData();
            formData.append('id', this.formItem.id);
            formData.append('name', this.formItem.name);
            formData.append('fullname', this.formItem.fullname);
            formData.append('password', this.formItem.password);
            formData.append('gender', this.formItem.gender);
            if(this.avatar != null){
              formData.append('avatar', this.avatar);
            }
            this.$store.dispatch('users/UpdateUser', formData);
            this.loading.close();
            this.helper_success("Berhasil Di Update");
            return this.closeedit();
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
      this.$emit('disableedit', true);
    }
  },
}
</script>

<style>

</style>