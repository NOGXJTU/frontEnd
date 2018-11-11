<template>
  <div class="hello">
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>这里是banner</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="present-block">
        一块块的展示模块
      </div>
      <div class="present-block">
        一块块的展示模块
      </div>
      <div class="present-block">
        一块块的展示模块
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '这里是主页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
