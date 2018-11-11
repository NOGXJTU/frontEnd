<template>
  <div class="hello">
    <el-container>
      <el-main>
        <el-form :model="form">
          <el-form-item label="昵称">
            <el-input disabled v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="个人简介">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input disabled v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="大学">
            <el-input disabled v-model="form.school"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input disabled v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input disabled v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="QQ">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
          <el-button type="primary" @click="handle_modify">保存修改</el-button>
          <el-button type="primary" @click="$router.push('/passwordModify')">修改密码</el-button>
        </el-form>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { modify_user_info } from '../../api/api.js'

export default {
  name: 'info-basic',
  data() {
    return {
      form: {}
    }
  },

  mounted() {
    // let form=userInfo when this component is mounted
    this.form = Object.assign({}, this.userInfo)
  },

  methods: {
    // todo: make post request
    handle_modify() {
      console.log('modify clicked')
      let pack = { qq: this.form.qq, description: this.form.description, avatar: this.form.avatar }
      console.log(pack)

      modify_user_info(pack)
        .then(res => {
          this.$message({
            message: '修改成功',
            type: 'success',
            showClose: true
          })
        })
        .catch(e => {
          console.log(e.response.data)
          this.$message({
            message: '修改失败',
            type: 'error',
            showClose: true
          })
        })
    }
  },

  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
