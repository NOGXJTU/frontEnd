<template>

  <div id="Login">
    <div class="centerPage">
      <el-card style="width:350px;left: 20%" align="left">

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

        <el-form ref="form" :model="form" :rules="rules">

          <el-form-item prop="passport">
            <el-input type="text" v-model="form.passport" placeholder="用户名/邮箱/手机号"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
          </el-form-item>
          <router-link to="/passwordForget">
              <el-button type="text">
                忘记密码？
              </el-button>
            </router-link>
          <el-form-item>
            <el-button type="primary" @click="handle_submit">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <vue-particles color="#dedede">  </vue-particles>
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
      },
      rules: {
        passport: [
          { required: true, message: '请输入用户名/邮箱/手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    handle_submit() {
      console.log('click login');

      this.$refs['form'].validate(
        (valid) => {
          if (valid) {
            request_login(this.form)
              .then(res => {
                this.$store.commit('SET_USERINFO', res.data) // save user information
                this.$store.commit('TOGGLE_LOGIN') // change login status
                // send success message
                this.$message({
                  message: '登陆成功',
                  type: 'success',
                  showClose: true
                })
                this.$router.push('/')
                console.log(this.$store.state.userInfo);
              }).catch(e => {
                // send fail message
                this.$message({
                  message: '登陆失败',
                  type: 'error',
                  showClose: true
                })
                console.log("error! login.vue", e.response.data);
              })
          } else {
            this.$alert('请正确输入', '警告', {
              confirmButtonText: '确定',
              type: 'warning'
            })
          }
        }
      )
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
  padding-top: 5%;
  padding-left: 35%;
}
</style>
