<script setup>
  import Header from './components/Common/Header.vue';
  import Footer from './components/Common/Footer.vue';
</script>
<template>
  <div class="wrap">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
    
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300, 400,700|Inconsolata:400,700');
</style>

<script>
  export default {
    created () {
      //Get All Static Keys When Site Loading  
      this.$store.dispatch('staticKeys/fetchStaticKeys')
      //Get About Me data 
      this.$store.dispatch('aboutMe/fetchAboutMe')
      //Get Social Media Items
      this.$store.dispatch('socialMedias/fetchSocialMedias')

    }
}
</script>