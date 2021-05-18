<template>
  <div class="navigasi">
      <div class="md:block hidden h-auto relative md:bg-transparent ">
          <div class="menus">
              <router-link to="/admin/dashboard" class="flex">
                <i class='bx bx-home-alt bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Dashboard</p>
              </router-link>
          </div>
          <div class="menus mt-4">
              <router-link to="/admin/proker" class="flex">
                <i class='bx bx-library bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Proker</p>
              </router-link>
          </div>
          <div class="menus mt-4">
              <router-link to="/admin/news" class="flex">
                <i class='bx bx-building-house bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">News</p>
              </router-link>
          </div>
          <div class="menus mt-4">
              <router-link to="/admin/department" class="flex">
                <i class='bx bx-building-house bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Department</p>
              </router-link>
          </div>
          <div class="menus mt-4">
              <router-link to="/admin/profile" class="flex">
                <i class='bx bx-user bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Profile</p>
              </router-link>
          </div>
          <div class="menus mt-4">
              <router-link to="/" exact class="flex">
                <i class='bx bx-log-out bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Logout</p>
              </router-link>
          </div>
      </div>
      <div class="fixed z-50 pt-5 min-h-screen w-full md:hidden block bg-koment px-3" v-show="showing == 0">
          <div @click="closenav" class="menus">
              <router-link to="/admin/dashboard" class="flex">
                <i class='bx bx-home-alt bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Dashboard</p>
              </router-link>
          </div>
          <div @click="closenav" class="menus mt-4">
              <router-link to="/admin/proker" class="flex">
                <i class='bx bx-library bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Proker</p>
              </router-link>
          </div>
          <div @click="closenav" class="menus mt-4">
              <router-link to="/admin/news" class="flex">
                <i class='bx bx-building-house bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">News</p>
              </router-link>
          </div>
          <div @click="closenav" class="menus mt-4">
              <router-link to="/admin/department" class="flex">
                <i class='bx bx-building-house bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Department</p>
              </router-link>
          </div>
          <div @click="closenav" class="menus mt-4">
              <router-link to="/admin/profile" class="flex">
                <i class='bx bx-user bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Profile</p>
              </router-link>
          </div>
          <div class="menus mt-4">
              <router-link to="/" exact class="flex">
                <i class='bx bx-log-out bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Logout</p>
              </router-link>
          </div>
          <div class="flex grid-rows-1 grid-cols-3 gap-2 mt-16">
            <div class="theme w-3 h-3 bg-pink-500 cursor-pointer" @click="changetheme('theme-pink')"></div>
            <div class="theme w-3 h-3 bg-black cursor-pointer" @click="changetheme('theme-dark')"></div>
            <div class="theme w-3 h-3 bg-white cursor-pointer" @click="changetheme('theme-light')"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    showing: Number
  },
    name: "Navigasi",
    methods: {
      closenav(){
        return this.$emit('closenav', 1);
      },
      changetheme(value){
        return this.$emit('changethememobile', value);
      }
    },
}
</script>

<style>

</style>