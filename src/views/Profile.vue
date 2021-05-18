<template>
  <div class="profile md:py-3">
    <div class="md:flex grid gap-2 grid-cols-1 min-h-screen">
      <div class="md:w-4/6 w-full">
        <div class="content-profile boxs pb-4 relative">
          <div class="h-36 relative boxs-bg-img"></div>
          <div class="avatar z-10 absolute md:px-6 px-2">
            <img v-if="$store.state.users.user.avatar != null" class="w-16 h-16 md:-mt-12 -mt-8 md:w-20 md:h-20 rounded-full" :src="'http://priodwisembodo.online/alangdatabase/public/images/user/' + $store.state.users.user.avatar" alt="avatar">
            <img v-else src="../assets/avatar.png" alt="">
          </div>
          <div class="md:mt-10 mt-12 md:px-6 px-2">
            <h3 class="font-bold text-xl">{{$store.state.users.user.fullname}}</h3>
            <p class="my-auto text-medium md:mt-1">{{$store.state.users.user.detail.motto}}</p>
            <p class="text-medium">{{$store.state.users.user.detail.pekerjaan}} - {{$store.state.users.user.detail.pendidikan}} - {{$store.state.users.user.detail.sosmed}}</p>
          </div>
        </div>
        <div class="boxs my-7 pt-3 tab-profile">
          <div class="grid grid-rows-1 md:grid-cols-3 gap-0 grid-cols-3">
            <div class="text-center tab cursor-pointer" @click="tabactive = 1" :class="{'active': tabactive == 1}">
                <h5 class="md:font-bold font-semibold">Proker</h5>
                <div class="tab-indicator w-full h-1 mt-2 bg-gray-100"></div>
            </div>
            <div class="text-center tab cursor-pointer" @click="tabactive = 2" :class="{'active': tabactive == 2}">
                <h5 class="md:font-bold font-semibold">Information</h5>
                <div class="tab-indicator w-full h-1 mt-2 bg-gray-100"></div>
            </div>
            <div class="text-center tab cursor-pointer" @click="tabactive = 3" :class="{'active': tabactive == 3}">
                <h5 class="md:font-bold font-semibold">Detail</h5>
                <div class="tab-indicator w-full h-1 mt-2 bg-gray-100"></div>
            </div>
          </div>
        </div>
        <div v-show="tabactive == 1" class="boxs md:p-2">
          <div v-if="prokers" class="grid md:grid-cols-3 grid-cols-1 gap-2">
            <div v-for="(item,index) in prokers" v-bind:key="index">
              <div class="cards-box md:p-3 h-auto w-full p-2">
                  <h5 class="font-bold text-sm">{{item.judul}}</h5>
                  <p class="md:mt-1">{{item.department.departemen}}</p>
                  <p class="md:mt-2">{{item.ketua}}</p>
                  <p>
                      {{item.tgl_mulai | moment('timezone','Asia/Jakarta', 'DD-MMMM-yyyy')}} - 
                      {{item.tgl_selesai | moment('timezone','Asia/Jakarta', 'DD-MMMM-yyyy')}}
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div class="boxs md:p-5 p-2 py-3 md:py-0 account-info" v-show="tabactive == 2">
          <h1 class="md:mb-5 mb-4">Informasi Account Kamu</h1>
          <acount-info :formItem="accountinfo" @disableedit="disableaccount" @enableedit="enableaccount" :disable="disable.accountinfo"></acount-info>
        </div>
        <div class="boxs md:p-5 account-info py-3 md:py-0 p-2" v-show="tabactive == 3">
          <h1 class="md:mb-5 mb-4">Detail Informasi Kamu</h1>
          <account-detail :formdetail="detailinfo" @disableedit="disabledetail" @enableedit="enabledetail" :disable="disable.accountdetail"></account-detail>
        </div>
      </div>
      <div class="boxs h-10 w-2/6 md:ml-2 md:block hidden">
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
          name: this.$store.state.users.user.name,
          password: this.$store.state.users.user.password_verif,
          fullname: this.$store.state.users.user.fullname,
          gender: this.$store.state.users.user.gender,
          avatar: this.$store.state.users.user.avatar,
          id: this.$store.state.users.user.id,
        },
        detailinfo:{
          departemen: this.$store.state.users.user.departemen.departemen,
          alamat: this.$store.state.users.user.detail.alamat,
          motto: this.$store.state.users.user.detail.motto,
          pendidikan: this.$store.state.users.user.detail.pendidikan,
          pekerjaan: this.$store.state.users.user.detail.pekerjaan,
          sosmed: this.$store.state.users.user.detail.sosmed,
          contact: this.$store.state.users.user.detail.contact,
          user_id: this.$store.state.users.user.id,
          token: this.$cookies.get('token'),
        }
      }
    },
    components: {
      'acount-info': AccountInfo,
      'account-detail': AccountDetail
    },
    computed:{
      prokers(){
        return this.$store.state.proker.prokerall.filter(e =>{
          return e.department.departemen_id == this.$store.state.users.user.departemen_id
        });
      },
    },
    mounted() {
      console.log(this.$store.state.users.user);
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
    },
    created(){
      this.$store.dispatch('proker/ProkerAll');
      this.$store.dispatch('users/Me', this.$cookies.get('token'));
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