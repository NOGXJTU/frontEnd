<template>
  <div class="activity-chose">
    <p class="status-chooser">
      <el-button type="primary">活动类型：</el-button>
      <el-button @click="sendChose">文化课</el-button>
      <el-button>兴趣课</el-button>
      <el-button>思想沙龙</el-button>
      <el-button>公益晚会</el-button>
      <el-button>其他</el-button>
    </p>
    <p class="time-chooser">
      <el-button type="primary">活动时间：</el-button>
      <el-button>2016</el-button>
      <el-button>2017</el-button>
      <el-button>2018</el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "chose",
  methods: {
    sendChose: function () {
      this.$emit("choseEvent",'aaa')
    }
  }
}
</script>

<style scoped>

</style>
