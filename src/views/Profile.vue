<template>
  <div class="profile">
    <div class="md:flex">
      <div class="md:w-4/6 w-full">
        <div class="h-36 relative boxs-bg-img"></div>
        <div class="content-profile boxs pb-4 md:px-5">
          <vs-avatar circle size="90" class="avatar md:-mt-10">
            <img src="../assets/avatar.png" alt="avatar">
          </vs-avatar>
          <h3 class="font-bold text-xl md:mt-6">{{$store.state.users.user.fullname}}</h3>
          <p class="my-auto text-base md:mt-1">{{$store.state.users.user.detail.motto}}</p>
          <p>{{$store.state.users.user.detail.pekerjaan}} - {{$store.state.users.user.detail.pendidikan}} - {{$store.state.users.user.detail.sosmed}}</p>
        </div>
        <div class="boxs md:my-7 pt-3 tab-profile">
          <div class="md:grid md:grid-rows-1 md:grid-cols-3">
            <div class="text-center tab cursor-pointer" @click="tabactive = 1" :class="{'active': tabactive == 1}">
                <h5 class="font-bold">Proker Deparment</h5>
                <div class="tab-indicator w-full h-1 mt-2 bg-gray-100"></div>
            </div>
            <div class="text-center tab cursor-pointer" @click="tabactive = 2" :class="{'active': tabactive == 2}">
                <h5 class="font-bold">Login information</h5>
                <div class="tab-indicator w-full h-1 mt-2 bg-gray-100"></div>
            </div>
            <div class="text-center tab cursor-pointer" @click="tabactive = 3" :class="{'active': tabactive == 3}">
                <h5 class="font-bold">Detail Account</h5>
                <div class="tab-indicator w-full h-1 mt-2 bg-gray-100"></div>
            </div>
          </div>
        </div>
        <div class="boxs md:p-5 account-info" v-show="tabactive == 2">
          <h1 class="md:mb-5">Informasi Account Kamu</h1>
          <acount-info :formItem="accountinfo" @disableedit="disableaccount" @enableedit="enableaccount" :disable="disable.accountinfo"></acount-info>
        </div>
        <div class="boxs md:p-5 account-info" v-show="tabactive == 3">
          <h1 class="md:mb-5">Detail Informasi Kamu</h1>
          <account-detail :formdetail="detailinfo" @disableedit="disabledetail" @enableedit="enabledetail" :disable="disable.accountdetail"></account-detail>
        </div>
      </div>
      <div class="boxs h-10 w-2/6 md:ml-2">
      </div>
    </div>
  </div>
</template>

<script>
import AccountInfo from '../components/AcountInfo';
import AccountDetail from '../components/AccountDetail';
export default {
    name: "Profiles",
    data() {
      return {
        tabactive: 1,
        disable: {
          accountinfo: true,
          accountdetail: true
        },
        accountinfo: {
          username: this.$store.state.users.user.name,
          password: this.$store.state.users.user.password_verif,
          fullname: this.$store.state.users.user.fullname,
          gender: this.$store.state.users.user.gender,
        },
        detailinfo:{
          departemen: this.$store.state.users.user.departemen.departemen,
          alamat: this.$store.state.users.user.detail.alamat,
          motto: this.$store.state.users.user.detail.motto,
          pendidikan: this.$store.state.users.user.detail.pendidikan,
          pekerjaan: this.$store.state.users.user.detail.pekerjaan,
          sosmed: this.$store.state.users.user.detail.sosmed,
        }
      }
    },
    components: {
      'acount-info': AccountInfo,
      'account-detail': AccountDetail
    },
    methods:{
      enableaccount(val){
        return this.disable.accountinfo = val;
      },
      disableaccount(val){
        return this.disable.accountinfo = val;
      },
      enabledetail(val){
        return this.disable.accountdetail = val;
      },
      disabledetail(val){
        return this.disable.accountdetail = val;
      }
    }
}
</script>

<style lang="scss">
#app.theme-light{
  .boxs-bg-img{
      background-image: url('../assets/bg-light.jpg');
  }
}
#app.theme-pink{
  .boxs-bg-img{
      background-image: url('../assets/bg-pink.jpg');
  }
}
#app.theme-dark{
  .boxs-bg-img{
      background-image: url('../assets/bg-dark.jpg');
  }
}
.boxs-bg-img{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-size: cover;
}
</style>