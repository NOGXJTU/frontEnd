<template>
  <div id="app">
    <vue-particles class="lizi"></vue-particles>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/common/Navbar'
import Footer from '@/common/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}
.lizi {
  position: absolute;
  background-size: cover;
  width: 100%;
  height: auto;
  z-index: -1;
}
</style>
