<template>
  <div class="hello">
    <el-container>
      <dl>
        <dt v-for="(item, index) in 5" :key="index">
          <div class="activity-item">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>活动名称-活动申请人</span>
                <el-button style="float: right; padding: 10px 0;;" type="text" >拒绝</el-button>
                <el-button style="float: right; padding: 10px 0" type="text" >同意</el-button>
              </div>
              <div>
                活动申请描述
              </div>
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
