<template>
    <div class="login">
        <div class="h-screen flex justify-center items-center">
            <div class="block md:w-72 w-11/12">
                <h1 class="text-3xl mb-5 font-bold">Alang Institut <br>
                    <p class="text-sm font-light mt-2">Masukan informasi account kamu dengan benar <br>Hubungi administrator apabila melukapan informasi account kamu</p>
                </h1>
                <a-form>
                    <div class="space-y-2">
                        <label for="username" class="font-light">username</label>
                        <a-input id="username" placeholder="Masukan username kamu"/>
                    </div>
                    <div class="mt-5 space-y-2">
                        <label for="password" class="font-light">password</label>
                        <a-input-password id="password" placeholder="input password" />
                    </div>
                    <a-button @click="login" block class="mt-8" type="primary" size="default">Log in</a-button>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
import Notifikasi from '../model/Notifikasi';
export default {
    mixins: [Notifikasi],
    name: "login",
    methods: {
        login(){
            this.helper_loading("Mencari Informasi Account ..");
        }
    },
}
</script>

<style lang="scss">

</style>