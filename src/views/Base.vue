<template>
  <div class="base">
    <div class="relative md:flex justify-start">
      <div class="sider static md:h-screen md:block md:fixed md:z-10 md:w-1/6 py-3 md:px-3">
        <div class="flex justify-end md:px-0 px-3">
          <h1 class="text-lg uppercase mr-auto font-bold">alang institute</h1>
          <i v-if="shownav == 1" class='bx bx-menu bx-sm my-auto md:hidden block' @click="shownav = 0"></i>
          <i v-if="shownav == 0" class='bx bx-x bx-sm my-auto md:hidden block' @click="shownav = 1"></i>
        </div>
        <Navigasi class="md:mt-8" @changethememobile="changethememobile" @closenav="closenav" :showing="shownav"></Navigasi>
        <div class="md:grid hidden z-20 grid-rows-1 grid-cols-3 md:gap-2 absolute bottom-3">
          <div class="theme w-3 h-3 bg-pink-500 cursor-pointer" @click="changetheme('theme-pink')"></div>
          <div class="theme w-3 h-3 bg-black cursor-pointer" @click="changetheme('theme-dark')"></div>
          <div class="theme w-3 h-3 bg-white cursor-pointer" @click="changetheme('theme-light')"></div>
        </div>
      </div>
      <div class="relative md:min-h-screen ml-auto md:w-5/6 w-screen md:px-5 px-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigasi from '../components/Navigasi';
import cookies from "vue-cookies";
export default {
  name: "Base",
  components: {Navigasi},
  data() {
    return {
      shownav: 1
    }
  },
  methods: {
    changetheme(event){
      cookies.set('theme', event);
      return this.$emit('changetheme', event);
    },
    closenav(val){
      return this.shownav = val;
    },
    changethememobile(event){
      cookies.set('theme', event);
      return this.$emit('changetheme', event);
    }
  },
}
</script>

<style>
</style>