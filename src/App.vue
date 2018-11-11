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
  <!--<organization-register></organization-register>-->
</template>

<script>
import navbar from '@/components/navbar'
// import organizationRegister from './components/organization/register'

export default {
  name: 'App',
  components: {
    navbar,
    // organizationRegister
  }
}
</script>

<style>

</style>
