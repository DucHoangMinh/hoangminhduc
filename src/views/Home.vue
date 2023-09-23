<template lang="pug">
.container
  v-container
    NavBar
    .home-body.pa-2
      .introduce.have-border.mb-2.v-col-12
        .d-flex.pa-3
          img(src="../assets/my_avatar.jpg").my_avatar
          .first_introduce.d-flex.flex-column.justify-center.pl-4.align-content-space-around
            label Hello there
            label I am Hoang Minh Duc
            label I am a student at Hanoi University of Science and Technology
            label I like coding and want to be a software developer
      .about-me.have-border.v-col-12.mb-2
        label.font-weight-bold.head-label About me
        .d-flex.align-center
          label.font-weight-bold Fullname:
          span {{personal_infor.fullname}}
        .d-flex.align-center
          label.font-weight-bold Birthday:
          span {{personal_infor.birthday}}
        .d-flex.align-center
          label.font-weight-bold Sex:
          span {{personal_infor.sex}}
        .d-flex.align-center
          label.font-weight-bold Age:
          span {{personal_infor.age}}
        .d-flex.align-center
          label.font-weight-bold Address:
          span {{personal_infor.address}}
        .d-flex.align-center
          label.font-weight-bold Phone:
          span {{personal_infor.phone}}
        .d-flex.align-center
          label.font-weight-bold Current job:
          div
            span(v-for="item in personal_infor.current_job" ) {{item}}
        .d-flex.align-center
          label.font-weight-bold Major:
          span {{personal_infor.major}}
        .d-flex.align-center
          label.font-weight-bold MyCV:
          a(:href="personal_infor.cv_link") CVHoangMinhDuc
      .d-flex
        .my-skills.have-border.v-col-6.mb-2
          label.font-weight-bold.head-label.head-label My skills
          .d-flex.align-center
            label.font-weight-bold Frontend:
            span {{skills.frontend}}
          .d-flex.align-center
            label.font-weight-bold Backend:
            span {{skills.backend}}
          .d-flex.align-center
            label.font-weight-bold Database:
            span {{skills.database}}
          .d-flex.align-center
            label.font-weight-bold OOP:
            span {{skills.oop}}
          .d-flex.align-center
            label.font-weight-bold Source code management:
            span {{skills.source_code_management}}
          .d-flex.align-center
            label.font-weight-bold Devops:
            span {{skills.devops}}
          .d-flex.align-center
            label.font-weight-bold English:
            span {{skills.english}}
        .interest.have-border.v-col-6.mb-2
          label.font-weight-bold.head-label My interest
      .my-story.have-border.v-col-12.mb-2
        label.font-weight-bold.head-label My story
        br
        label(v-for="item in my_story" ).font-italic {{item}}
          br

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
      const skills = ref(elements.skills)
      const my_story = ref(elements.my_story)
      return {
        navList,
        personal_infor,
        skills,
        my_story
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
  border: 1px solid #008631
.my_avatar
  width: 144px
  border: 1px solid #000
label
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell',"Fira Sans","Droid Sans","Helvetica Neue",sans-serif
  -webkit-font-smoothing: antialiased
.head-label
  color: #008631
  font-size: 18px
</style>
