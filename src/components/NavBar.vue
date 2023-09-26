<template lang="pug">
.nav-bar.bg-white.d-flex.mb-4
  .div(v-for="(item,index) in navList").px-2.my-2.navItem.have-border
    router-link(:to="item.route") {{item.name}}
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
  position: relative
  z-index: 1
.navItem:hover
  color: #91640F
.navItem:after
  transition: all .5s
  position: absolute
  bottom: 0
  left: 0
  right: 0
  margin: auto
  width: 0%
  content: ''
  color: black
  background: #000
  height: 2px
.navItem:hover:after
  width: 100%


::v-deep .navItem:first-child
  border-right: 2px solid #000
::v-deep a
  text-decoration: none
</style>
