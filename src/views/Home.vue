<template>
  <div class="home layout md:py-3 min-h-screen">
    <div class="md:flex justify-end pt-4 md:pt-0">
      <h1 class="font-bold text-xl mr-auto hidden md:block">Dashboard</h1>
      <div class="flex" v-if="$store.state.users.user">
        <h6 class="hidden md:block my-auto font-medium">{{$store.state.users.user.fullname}}</h6>
        <vs-avatar circle class="hidden md:block mr-4 ml-2" size="25">
          <img v-if="$store.state.users.user.avatar != null" :src="'http://priodwisembodo.online/alangdatabase/public/images/user/' + $store.state.users.user.avatar" alt="">
          <img v-else src="../assets/avatar.png" alt="">
        </vs-avatar>
      </div>
    </div>
    <div class="mt-5 grid md:grid-cols-4 grid-rows-3 md:grid-rows-1 grid-flow-col gap-2">
      <div class="p-3 cards-box" :class="{ active: boxactive == 1 }">
        <p class="font-semibold text-xs">Total Proker Alang Terdaftar</p>
        <h5 class="font-semibold text-base mt-5">{{prokers.length}} Proker</h5>
      </div>
      <div class="p-3 cards-box" @click="boxactive = 2;totalpage = $store.state.users.userall.length/5 * 10;" :class="{ active: boxactive == 2 }">
        <p class="font-semibold text-xs">Total Anggota Alang Terdaftar</p>
        <h5 class="font-semibold text-base mt-5">{{anggotaleng.length}} Anggota</h5>
      </div>
      <div class="p-3 cards-box" @click="boxactive = 3;totalpage = $store.state.department.departmentall.length/5 * 10;" :class="{ active: boxactive == 3 }">
        <p class="font-semibold text-xs">Total Department Terdaftar</p>
        <h5 class="font-semibold text-base mt-5">{{department.length}} Department</h5>
      </div>
    </div>
    <div class="grid grid-rows-1 mt-5 md:mt-10" v-if="boxactive == 2">
      <p class="mb-5">Lihat Semua Anggota yang terdaftar. Tap pada item Instagram untuk pergi ke halaman profile instagram</p>
      <Table border stripe :columns="Anggota" size="small" :data="tableanggota">
        <template class="cursor-pointer" slot-scope="{ row }" slot="sosmed">
            <span class="cursor-pointer" @click="showmed(row.sosmed)">{{ row.sosmed }}</span>
        </template>
      </Table>
      <div style="margin: 10px;overflow: hidden">
          <div style="float: right;">
              <Page :total="totalpage" class="pages" class-name="pages" :current="1" size="small"  @on-change="setPageAnggota"></Page>
          </div>
      </div>
    </div>
    <div class="grid grid-rows-1 mt-5 md:mt-10" v-else>
      <p class="mb-5">Lihat Semua Department yang terdaftar. Tap pada item untuk melihat detail pada baris table</p>
      <table-department :totalpage="totalpage"
        :columns="Department" 
        :datas="dataDepartment">
      </table-department>
    </div>
  </div>
</template>

<script>
import TableGlobal from '../components/TableGlobal';
import Table_Model from '../model/Table_Model';
export default {
  components: {
   'table-department': TableGlobal,
  },
  mixins:[Table_Model],
  name: 'Home',
  data() {
    return {
      boxactive: 2,
      totalpage: this.$store.state.users.userall.length/5 * 10,
      tableanggota: []
    }
  },
  computed:{
    anggotaleng() {
      return this.$store.state.users.userall;
    },
    department() {
      return this.$store.state.department.departmentall;
    },
    prokers() {
      return this.$store.state.proker.prokerall;
    },
  },
  methods:{
    setPageAnggota(val){
        return this.tableanggota = this.dataAnggota.slice((val - 1) * 5, val * 5);
    },
    showmed(value){
      var name = value.split("@");
      window.location.href = "https://instagram.com/" + name[1];
    },
  },
  mounted() {
      this.setPageAnggota(1);
  },
  created() {
    this.$store.dispatch('users/AllUsers');
    this.$store.dispatch('users/Me');
    this.$store.dispatch('department/DepartmentAll');
    this.$store.dispatch('proker/ProkerAll');
  },
}
</script>
