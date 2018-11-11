<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/">主页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/activity">活动</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/about">关于</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/user">个人中心</router-link>
      </el-menu-item>
      <el-menu-item v-if="!this.isLogged" index="5">
        <router-link  to="/login">登陆/注册</router-link>
      </el-menu-item>
      <el-menu-item v-if="this.isLogged" index="6">
        <a><el-button type="text" @click="handle_logout">登出</el-button></a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navbar',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handle_logout(){
      this.$store.commit('TOGGLE_LOGOUT') // set log out
      this.$store.commit('SET_USERINFO',{}) // clear user information
    }
  },
  computed: {
    ...mapState(['isLogged'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
