<template>
  <div>
      <div class="centerPage">
        <el-card class="box-card" style="padding: 20px">
          <div slot="header" class="clearfix">
            <span>忘记密码</span>
          </div>
          <div class="old-password">
            <span >邮箱：</span>
            <el-input placeholder="请输入邮箱地址" v-model="send_email"></el-input>
          </div>
          <div class="captcha">
            <span>验证码：</span>
            <div>
              <el-input placeholder="验证码" style="width: 60%;float: left" v-model="email_token"></el-input>
              <el-button type="primary" style="float: right" @click="captcha_send">发送验证码</el-button>
            </div>
          </div>
          <div class="new-password-once">
            <br>
            <br>
            <span >新密码：</span>
            <el-input placeholder="请输入新的密码" type="password" v-model="new_password"></el-input>
          </div>
          <div class="new-password-twice">
            <span >再次输入：</span>
            <el-input placeholder="请再次输入密码" type="password" v-model="new_password2"></el-input>
          </div>
          <div class="confirmButton" >
            <el-button type="primary" @click="modify_passsword">确认</el-button>
          </div>
          <div class="concealButton" style="float: right">
            <el-button type="primary">取消</el-button>
          </div>
        </el-card>
      </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { send_token } from "../../api/api";
import { forget_password_by_token } from "../../api/api";

export default {
  name: 'password-forget',
  data() {
    return {
      msg: '修改密码',
      send_email: '',
      email_token:'',
      new_password:'',
      new_password2:''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods:{
    captcha_send(){
      send_token({email: this.send_email})
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
    },
    modify_passsword(){
      forget_password_by_token({email: this.send_email,newPassword: this.new_password,token: this.email_token})
        .then(res => {
          this.$message({
            message: '修改成功',
            type: 'success',
            showClose: true
          })
        })
        .catch(e => {
          console.log(e)
          this.$message({
            message: '修改失败',
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
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.centerPage {
  /*垂直居中*/
  position: absolute;
  width: 27%;
  height: 250px;
  top: 40%;
  left: 40%;
  margin-top: -100px;
  margin-left: -100px;
}
.confirmButton{
  float: left;
  margin-left: 10%;
  margin-top: 10px;
}
.concealButton{
  float: right;
  margin-right: 10%;
  margin-top: 10px;
}
</style>
