<template>
  <div class="register">
    <div class="centerPage">
      <el-card style="width:350px" align="left">

        <div slot="header" class="clearfix">
          <h2>
            注册
            <i class='el-icon-caret-left'></i>

            <router-link to="/login">
              <el-button type="text" style="float: right; padding: 3px 0">
                登陆
              </el-button>
            </router-link>

          </h2>
        </div>

        <el-form ref="form" :model="form" :rules="rule">

          <el-form-item prop="username">
            <el-input type="text" v-model="form.username" placeholder="用户名"></el-input>
          </el-form-item>

          <el-form-item prop="realname">
            <el-input type="text" v-model="form.realname" placeholder="真实姓名"></el-input>
          </el-form-item>

          <el-form-item prop="college">
            <el-input type="text" v-model="form.college" placeholder="学校"></el-input>
          </el-form-item>

          <el-form-item prop="qq">
            <el-input type="text" v-model="form.qq" placeholder="QQ"></el-input>
          </el-form-item>

          <el-form-item prop="tel">
            <el-input type="text" v-model="form.tel" placeholder="电话"></el-input>
          </el-form-item>

          <el-form-item prop="email">
            <el-input type="text" v-model="form.email" placeholder="邮箱"></el-input>
          </el-form-item>

          <el-form-item prop="chaptcha">
            <el-input type="text" v-model="form.chaptcha" placeholder="验证码"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
          </el-form-item>

          <el-form-item prop="password2">
            <el-input type="password" v-model="form.password2" placeholder="确认密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">注册</el-button>
          </el-form-item>

        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      form: {
        username: '',
        realname: '',
        college: '',
        qq: '',
        tel: '',
        email: '',
        chaptcha: '',
        password: '',
        password2: ''
      }
    }
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
