<template>
  <div id="app" v-bind:class="themes">
    <router-view/>
  </div>
</template>

<script>
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
    changeTheme(){
      switch (this.themeOptions) {
        case this.themeOptions.dark:
          this.themes = this.themeOptions.dark;
          break;
        case this.themeOptions.pink:
          this.themes = this.themeOptions.pink;
          break;
        case this.themeOptions.light:
          this.themes = this.themeOptions.light;
          break;
        default:
          this.themes = this.themeOptions.light;
          break;
      }
    }
  },
}
</script>

<style lang="sass">
@import './assets/style.scss';
</style>
