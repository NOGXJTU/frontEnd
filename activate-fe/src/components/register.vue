<template>
  <div class="register">
    <div class="centerPage">
      <el-card style="width: 55%" >
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

        <el-form ref="form" :model="form" :rules="rules" label-width="100px">

          <el-form-item prop="username" label="用户名">
            <el-input type="text" v-model="form.username" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="name" label="真实姓名">
            <el-input type="text" v-model="form.name" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="school" label="学校">
            <el-input type="text" v-model="form.school" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="qq" label="QQ">
            <el-input type="text" v-model="form.qq" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="phone" label="电话">
            <el-input type="text" v-model="form.phone" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="email" label="邮箱">
            <el-input type="text" v-model="form.email" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="token">
            <template slot='label'>
              <el-button @click="handle_click_token" :disabled="getTokenClicked" type="text">
                获取验证码
              </el-button>
            </template>
            <el-input type="text" v-model="form.token" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="password" label="密码">
            <el-input type="password" v-model="form.password" placeholder=""></el-input>
          </el-form-item>

          <el-form-item prop="password2" label="确认密码" required>
            <el-input type="password" v-model="form.password2" placeholder=""></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handle_register">注册</el-button>
          </el-form-item>

        </el-form>
      </el-card>
    </div>
  <vue-particles color="#dedede">  </vue-particles>
  </div>
</template>

<script>
import { request_register, send_token } from '../api/api.js'

export default {
  name: 'register',
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请您再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入的密码不匹配'));
      } else {
        callback();
      }
    }
    return {
      form: {
        username: '',
        name: '',
        school: '',
        qq: '',
        phone: '',
        email: '',
        token: '',
        password: '',
        password2: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, message: '长度在至少6个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
          { min: 2, max:20, message: '姓名长度介于2到20之间', trigger: 'blur' }
        ],
        school: [
          { required: true, message: '请输入学校', trigger: 'blur' }
        ],
        qq: [
          { required: true, message: '请输入QQ', trigger: 'blur' },
          { min: 5, max: 11, message: '请输入5-11位的QQ号码', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { len: 11, message: '请输入11位电话号码', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur', type: 'email' }
        ],
        token: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 8, message: '请输入8位验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, message: '长度在至少8个字符', trigger: 'blur' }
        ],
        password2: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      },
      getTokenClicked: false
    }
  },

  methods: {
    handle_register() {
      this.$refs['form'].validate(
        (valid) => {
          if (valid) {
            request_register(this.form)
              .then(res => {
                // send success message
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  showClose: true
                })
                this.$router.push('/login')
              }).catch(e => {
                // send fail message
                this.$message({
                  message: '注册失败',
                  type: 'error',
                  showClose: true
                })
                console.log("error! organization-register.vue", e.response);
              })
          } else {
            this.$alert('请正确输入', '警告', {
              confirmButtonText: '确定',
              type: 'warning'
            })
          }
        }
      )
    },

    // todo: add time limitation
    handle_click_token() {
      this.getTokenClicked = true
      // delay for 1 min
      setTimeout(() => {
        this.getTokenClicked = false
      }, 60000)

      send_token({ email: this.form.email })
        .then(res => {
          this.$message({
            message: '发送成功',
            type: 'success',
            showClose: true
          })
        })
        .catch(e => {
          console.log(e)
          this.$message({
            message: '发送失败',
            type: 'error',
            showClose: true
          })
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .centerPage{
    padding-left: 30%;
  }
</style>
