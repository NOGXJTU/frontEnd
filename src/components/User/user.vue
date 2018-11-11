<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">基本信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">我的活动</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main height="">
          主要内容:
          <component :is="componentName"></component>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      msg: '这里是user'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
