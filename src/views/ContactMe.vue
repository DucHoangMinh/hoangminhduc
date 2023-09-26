<template lang="pug">
.container
  v-container
    NavBar
    .contact-me.pa-lg-2.pa-4
      .d-flex.text-center.flex-column
        a(href="https://www.facebook.com/duck.hoangminh/" target="_blank").d-flex.align-center
          font-awesome-icon(icon="fa-brands fa-facebook" ).pr-1
          p Hoàng Minh Đức
        a(href="mailto:hoangminhduc4125@gmail.com" target="_blank").d-flex.align-center
          font-awesome-icon(icon="fa-solid fa-envelope" ).pr-1
          p hoangminhduc4125@gmail.com
        a(href="https://www.linkedin.com/in/duc-hoang-minh-724542254/" target="_blank").d-flex.align-center
          font-awesome-icon(icon="fa-brands fa-linkedin" ).pr-1
          p Duc Hoang Minh
        a(href="https://github.com/DucHoangMinh" target="_blank").d-flex.align-center
          font-awesome-icon(icon="fa-brands fa-github" ).pr-1
          p DucHoangMinh

</template>
<script>
  import NavBar from "@/components/NavBar.vue";
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
  export default {
    name: "ContactMe",
    components: {FontAwesomeIcon, NavBar},
    setup(){

    }
  }
</script>
<style lang="sass" scoped>
.container
  background-color: #ccc
  width: 100vw
  height: 100vh
.contact-me
  background-color: #fff
a
  text-decoration: none
  color: black
</style>
