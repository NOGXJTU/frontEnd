<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-header>
          <!-- 导航栏 -->
          <navbar></navbar>
        </el-header>
          <!-- 主体页面 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navbar from '@/components/navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>

</style>
