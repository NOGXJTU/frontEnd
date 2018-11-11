<template>
  <div id="Login">
    这里是测试用的啦
    <p>已登录：{{isLogged}}</p>

    <div class="centerPage">
      <el-card style="width:350px" align="left">

        <div slot="header" class="clearfix">
          <h2>
            登陆
            <i class='el-icon-caret-left'></i>

            <router-link to="/register">
              <el-button type="text" style="float: right; padding: 3px 0">
                注册
              </el-button>
            </router-link>

          </h2>
        </div>

        <el-form ref="form" :model="form">

          <el-form-item prop="user">
            <el-input type="text" v-model="form.passport" placeholder="用户名/邮箱/手机号"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
            <router-link to="/">
              <el-button type="text">
                忘记密码？//todo
              </el-button>
            </router-link>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handle_submit">登陆</el-button>
          </el-form-item>

        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { request_login } from '../api/api.js'

export default {
  name: 'login',

  data() {
    return {
      form: {
        passport: '',
        password: ''
      }
    }
  },

  methods: {
    handle_submit() {
      request_login(this.form)
        .then(info => {
          if (info) {
            this.$store.commit('SET_USERINFO', info) // save user information
            this.$store.commit('TOGGLE_LOGIN') // change login status
            // send success message
            this.$message({
              message: '登陆成功',
              type: 'success',
              showClose: true
            })
            this.$router.push('/')
          } else {
            // send fail message
            this.$message({
              message: '登陆失败',
              type: 'error',
              showClose: true
            })
            console.log("error! login.vue");
          }
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
.centerPage {
  /*垂直居中*/
  position: absolute;
  width: 200px;
  height: 200px;
  top: 40%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
}
</style>
