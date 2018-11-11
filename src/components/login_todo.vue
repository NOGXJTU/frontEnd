<template>
  <div class="login-container">
    <p>已登录：{{isLogged}}</p>

    <el-form class="login-form" autoComplete="on" :model="form" :rules="rules" ref="form" label-position="left">

      <div class="title-container">
        <h3 class="title">登陆</h3>
      </div>

      <el-form-item prop="passport">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="passport" type="text" v-model="form.passport" autoComplete="on" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="password" :type="password" @keyup.enter.native="handle_submit" v-model="form.password" autoComplete="on" />
        <span class="show-pwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handle_submit">'login.logIn'</el-button>

    </el-form>

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
                console.log("error! login.vue", e);
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
<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
// $bg: #2d3a4b;
$bg: #fff;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
