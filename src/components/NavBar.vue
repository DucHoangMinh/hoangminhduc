<template lang="pug">
.nav-bar.bg-white.d-flex.mb-4
  .div(v-for="(item,index) in navList").pa-2.navItem.have-border
    p {{ item }}
</template>
<script>
  import elements from "@/utils/elements";
  import {ref} from "vue"
  export default {
    name: 'NavBar',
    setup() {
      const navList = ref(elements.navbar_element)
      return {
        navList
      }
    }
  }
</script>
<style lang="sass" scoped>
.navItem
  cursor: pointer
.navItem:hover
  background-color: #ccc
</style>
