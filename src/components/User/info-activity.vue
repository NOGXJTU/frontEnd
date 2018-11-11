<template>
  <div class="hello">
    <el-container>
      <dl>
        <dt v-for="(item, index) in 5" :key="index">
          <div class="activity-item">
            <el-card class="box-card">
              <span>活动名称-活动状态</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handle_quit(item)">退出活动</el-button>
            </el-card>
          </div>
        </dt>
      </dl>
    </el-container>

  </div>
</template>

<script>
// import '../../assets/bootstrap.js'

export default {
  name: 'info-activity',
  data() {
    return {
      msg: '这里是user'
    }
  },

  methods: {
    handle_quit(item) {
      console.log(item)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  import bootstrap from file without css */
@import url("../../assets/bootstrap.css");

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
