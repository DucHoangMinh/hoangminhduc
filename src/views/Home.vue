<template lang="pug">
.container
  v-container
    NavBar
    .home-body.pa-2
      .introduce.have-border.mb-2
        .d-flex.pa-3
          img(src="../assets/my_avatar.jpg").my_avatar
      .about-me.have-border
        label About me
        .d-flex.align-center
          label Fullname:
          span {{personal_infor.fullname}}
        .d-flex.align-center
          label Birthday:
          span {{personal_infor.birthday}}
        .d-flex.align-center
          label Sex:
          span {{personal_infor.sex}}
        .d-flex.align-center
          label Age:
          span {{personal_infor.age}}
        .d-flex.align-center
          label Address:
          span {{personal_infor.address}}
        .d-flex.align-center
          label phone:
          span {{personal_infor.phone}}
        .d-flex.align-center
          label Current job:
          div
            span(v-for="item in personal_infor.current_job" ) {{item}}
        .d-flex.align-center
          label Major:
          span {{personal_infor.major}}
        .d-flex.align-center
          label MyCV:
          a(:href="personal_infor.cv_link") CVHoangMinhDuc

</template>
<script>
  import NavBar from "@/components/NavBar.vue";
  import elements from "@/utils/elements";
  import {ref} from "vue"
  export default {
    name: 'HomePage',
    components: {NavBar},
    setup(){
      const navList = ref(elements.navbar_element)
      const personal_infor = ref(elements.personal_infor)
      return {
        navList,
        personal_infor
      }
    }
  }

</script>
<style lang="sass" scoped>
.container
  width: 100%
  height: 100%
  background-color: #ccc
.home-body
  background-color: #fff
.have-border
  border: 1px solid #ccc
.my_avatar
  width: 144px
  border: 1px solid #000
</style>
