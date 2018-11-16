<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="home" @click="$router.push('/')">
        主页
      </el-menu-item>
      <el-menu-item index="activity" @click="$router.push('/activity')">
        活动
      </el-menu-item>
      <el-menu-item index="resource" @click="$router.push('/resource')">
        资源
      </el-menu-item>
      <el-menu-item index="forum" @click="$router.push('/organization')">
        组织
      </el-menu-item>
      <el-menu-item index="user" @click="$router.push('/user')">
        个人中心
      </el-menu-item>
      <el-menu-item v-if="!this.isLogged" index="log" @click="$router.push('/login')" style="float: right">
        登陆/注册
      </el-menu-item>
      <el-menu-item v-if="this.isLogged" index="logout" @click="handle_logout" style="float: right">
        登出
      </el-menu-item>
      <el-menu-item index="regulation" @click="$router.push('/regulation')" style="float: right">
        章程
      </el-menu-item>
      <el-menu-item index="about" @click="$router.push('/about')" style="float: right">
        关于
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { logout } from '../api/api.js'

export default {
  name: 'Navbar',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handle_logout() {
      this.$store.commit('TOGGLE_LOGOUT') // set log out
      this.$store.commit('SET_USERINFO', {}) // clear user information
      // use put method to log out
      logout()
        .then(res => {
          this.$message({
            message: '注销成功',
            type: 'success',
            showClose: true
          })
          this.$router.push('/')
          console.log(this.$store.state.userInfo);
        }).catch(e => {
        console.log("error! Login.vue", e.response.data);
      })
    }
  },
  computed: {
    ...mapState(['isLogged'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 1200px;
  margin: 0 auto;
}
</style>
