<template>
  <div class="personal-activityinfo">
      <dt v-for="(item, index) in 5" :key="index">
        <div class="activity-item">
          <el-card class="box-card">
            <span>活动名称-活动状态</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handle_quit(item)">退出活动</el-button>
          </el-card>
        </div>
      </dt>
  </div>
</template>

<script>
export default {
  name: 'ActivityInfo',
  data() {
    return {
      msg: ''
    }
  },

  methods: {
    handle_quit(item) {
      this.$confirm('此操作将使您退出该活动, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style scoped>
.activity-item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
