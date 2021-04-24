<template>
  <div class="profile">
    <div class="md:flex">
      <div class="md:w-4/6 w-full">
        <div class="h-36 relative boxs-bg-img"></div>
        <div class="content-profile boxs pb-4 md:px-5">
          <vs-avatar circle size="90" class="avatar md:-mt-10">
            <img v-if="$store.state.users.user.avatar" :src="'https://jajandong.com/alangdatabase/public/images/' + $store.state.users.user.avatar" alt="avatar">
            <img v-else src="../assets/avatar.png" alt="">
          </vs-avatar>
          <h3 class="font-bold text-xl md:mt-6">{{$store.state.users.user.fullname}}</h3>
          <p class="my-auto text-medium md:mt-1">{{$store.state.users.user.detail.motto}}</p>
          <p class="text-medium">{{$store.state.users.user.detail.pekerjaan}} - {{$store.state.users.user.detail.pendidikan}} - {{$store.state.users.user.detail.sosmed}}</p>
        </div>
        <div class="boxs md:my-7 pt-3 tab-profile">
          <div class="md:grid md:grid-rows-1 md:grid-cols-3">
            <div class="text-center tab cursor-pointer" @click="tabactive = 1" :class="{'active': tabactive == 1}">
                <h5 class="font-bold">Proker Department</h5>
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
        <div class="boxs md:p-2 account-info grid grid-cols-3 gap-2" v-show="tabactive == 1">
          <div v-for="(item,index) in prokers" v-bind:key="index">
            <div class="cards-box md:p-3 h-auto">
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
          return e.department.departemen === this.$store.state.users.user.departemen.departemen
        });
      }
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