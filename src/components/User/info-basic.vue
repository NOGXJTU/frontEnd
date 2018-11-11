<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        侧栏
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">个人中心</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">个人信息</a></el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main >
          主要内容
          {{this.userInfo}}
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'info-basic',
    data() {
      return {
        msg: '这里是user'
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
