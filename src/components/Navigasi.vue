<template>
  <div class="navigasi">
      <div class="md:block hidden fixed md:relative z-20 h-screen md:bg-transparent bg-white">
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
          <!-- <div class="menus mt-4">
              <router-link to="/admin/department" class="flex">
                <i class='bx bx-building-house bx-sm'></i>
                <p class="md:text-base font-bold my-auto ml-4">Department</p>
              </router-link>
          </div> -->
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
  </div>
</template>

<script>
export default {
    name: "Navigasi"
}
</script>

<style>

</style>