<template>
  <div>
      <div class="centerPage">
        <el-card class="box-card" style="padding: 20px">
          <div slot="header" class="clearfix">
            <h1>修改密码</h1>
          </div>
          <div class="old-password">
            <span>用户名/邮箱：</span>
            <el-input v-model="passport"></el-input>
          </div>
          <div class="old-password">
            <span>旧密码：</span>
            <el-input type="password" v-model="password"></el-input>
          </div>
          <div class="new-password-once">
            <span >新密码：</span>
            <el-input type="password" v-model="new_password"></el-input>
          </div>
          <div class="new-password-twice">
            <span >再次输入：</span>
            <el-input type="password" v-model="new_password2"></el-input>
          </div>
          <div class="confirmButton" >
            <el-button type="primary" @click="modify_password">确认</el-button>
          </div>
          <div class="concealButton" style="float: right">
            <el-button type="primary" @click="$router.push('/user')">取消</el-button>
          </div>
        </el-card>
      </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { modify_password_by_tocken} from "../../api/api";

export default {
  name: 'password-modify',
  data() {
    return {
      passport: '',
      password: '',
      new_password: '',
      new_password2: ''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods:{
    modify_password(){
      console.log(this.new_password)
      console.log(this.passport)
      modify_password_by_tocken({newPassword: this.new_password, passport: this.passport, password: this.password})
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
