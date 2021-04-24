<template>
  <div id="app" v-bind:class="themes">
    <router-view class="h-auto" @changetheme="changeTheme"/>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      themes: 'theme-light',
      themeOptions: {
          dark: 'theme-dark',
          pink: 'theme-pink',
          light: 'theme-light',
        },
    }
  },
  methods: {
    changeTheme(val){
      switch (val) {
        case 'theme-dark':
          this.themes = this.themeOptions.dark;
          break;
        case 'theme-pink':
          this.themes = this.themeOptions.pink;
          break;
        case 'theme-light':
          this.themes = this.themeOptions.light;
          break;
        // default:
        //   this.themes = val;
        //   break;
      }
    }
  },
  mounted() {
    this.changeTheme(cookies.get('theme'));
  },
  created() {
    this.changeTheme("theme-light");
  },
}
</script>

<style lang="sass">
@import './assets/style.scss';
</style>
