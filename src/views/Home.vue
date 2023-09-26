<template lang="pug">
.container
  v-container
    NavBar
    .home-body.pa-2
      .introduce.have-border.mb-2.v-col-12
        .d-flex.pa-lg-3.introduce-body
          img(src="../assets/my_avatar.jpg").my_avatar
          .first_introduce.d-flex.flex-column.justify-center.pl-lg-4.align-content-space-around
            label.text-lg-h5.font-weight-bold(style="color: grey") Hello there,
            label.text-lg-h5.font-weight-bold I am Hoang Minh Duc.
            label.text-lg-h6 I am a student at Hanoi University of Science and Technology.
            label.text-lg-h6.font-weight-bold I like coding and want to become a software developer.
      .about-me.have-border.v-col-12.mb-2
        label.font-weight-bold.head-label.pb-4.d-block About me
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Fullname:
          span {{personal_infor.fullname}}
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Birthday:
          span {{personal_infor.birthday}}
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Sex:
          span {{personal_infor.sex}}
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Age:
          span {{personal_infor.age}}
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Address:
          span {{personal_infor.address}}
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Phone:
          span {{personal_infor.phone}}
        .d-flex.text-left
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Current job:
          div
            span(v-for="item in personal_infor.current_job" ) {{item}}
              br
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 Major:
          span {{personal_infor.major}}
        .d-flex.align-center
          label.font-weight-bold.pr-2.v-col-lg-1.v-col-3.text-left.pl-0.py-0 MyCV:
          a(:href="personal_infor.cv_link" target="_blank") CVHoangMinhDuc
      .d-flex.justify-space-between.flex-column.flex-lg-row
        .my-skills.have-border.v-col-lg-6.v-col-12.mb-2
          label.font-weight-bold.head-label.head-label.pb-4.d-block My skills
          .d-flex.align-lg-center.align-start
            label.font-weight-bold.pr-2.v-col-lg-2.v-col-3.text-left.pl-0.py-0 Frontend:
            span {{skills.frontend}}
          .d-flex.align-lg-center.align-start
            label.font-weight-bold.pr-2.v-col-lg-2.v-col-3.text-left.pl-0.py-0 Backend:
            span {{skills.backend}}
          .d-flex.align-lg-center.align-start
            label.font-weight-bold.pr-2.v-col-lg-2.v-col-3.text-left.pl-0.py-0 Database:
            span {{skills.database}}
          .d-flex.align-lg-center.align-start
            label.font-weight-bold.pr-2.v-col-lg-2.v-col-3.text-left.pl-0.py-0 OOP:
            span {{skills.oop}}
          .d-flex.align-lg-center.align-start
            label.font-weight-bold.pr-2.v-col-lg-2.v-col-3.text-left.pl-0.py-0 Others:
            span {{skills.others}},
          .d-flex.align-lg-center.align-start
            label.font-weight-bold.pr-2.v-col-lg-2.v-col-3.text-left.pl-0.py-0 English:
            span {{skills.english}}
        .interest.have-border.v-col-lg-6.v-col-12.mb-2
          label.font-weight-bold.head-label.pb-4.d-block My interest
          ul.ml-6
            li(v-for="item in interests") {{item}}
      .my-story.have-border.v-col-12.mb-2
        label.font-weight-bold.head-label.pb-4.d-block My story
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
      const interests= ref(elements.interests)
      return {
        navList,
        personal_infor,
        skills,
        my_story,
        interests
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
  object-fit: contain
label
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell',"Fira Sans","Droid Sans","Helvetica Neue",sans-serif
  -webkit-font-smoothing: antialiased
.head-label
  color: #008631
  font-size: 18px
ul
  list-style-type: circle
//Responsive
@media only screen and (max-width: 768px)
  .introduce-body
    flex-direction: column
</style>
