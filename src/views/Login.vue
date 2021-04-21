<template>
    <div class="login">
        <div class="h-screen flex justify-center items-center">
            <div class="block md:w-72 w-11/12">
                <h1 class="text-3xl mb-5 font-bold">Alang Institut <br>
                    <p class="text-sm font-light mt-2">Masukan informasi account kamu dengan benar .Hubungi administrator apabila melukapan informasi account kamu</p>
                </h1>
                <Form ref="loginform" :model="form" :rules="formValidation" label-position="top">
                    <FormItem label="Username" prop="name">
                        <Input v-model="form.name" placeholder="Masukan username kamu"></Input>
                    </FormItem>
                    <FormItem label="Password" prop="password">
                        <Input type="password" v-model="form.password" placeholder="Masukan Password kamu"></Input>
                    </FormItem>
                    <Button class="mt-5" type="primary" long @click="login">Log In</Button>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import Notifikasi from '../model/Notifikasi';
import Form from '../model/Form';
export default {
    mixins: [Notifikasi,Form],
    name: "login",
    methods: {
        login(){
            this.$refs['loginform'].validate((valid) => {
                if (valid) {
                    this.helper_loading("Mencari Informasi Account ..");
                    this.$store.dispatch('users/LoginPengguna', this.form);
                    return this.helper_request_login();
                } 
                return false;
            })
            // if(this.form.name.length <= 2 || this.form.password <= 2){
            //     this.loading.close();
            //     return this.helper_form();
            // }
            // this.$store.dispatch('users/LoginPengguna', this.form);
            // this.helper_request_login();
        }
    },
}
</script>

<style lang="scss">

</style>