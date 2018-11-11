<template>
  <div>
    <div class="header"></div><!-- 空（已完成，模板） -->
    <div class="main">
      <div class="activity" style="width: 70%; float: left">
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="screening-box">
          <p class="status-chooser">
            <el-button type="primary">活动类型：</el-button>
            <el-button >文化课</el-button>
            <el-button >兴趣课</el-button>
            <el-button >思想沙龙</el-button>
            <el-button >公益晚会</el-button>
            <el-button >其他</el-button>
          </p>
          <p class="time-chooser">
            <el-button type="primary">活动时间：</el-button>
            <el-button >2016</el-button>
            <el-button >2017</el-button>
            <el-button >2018</el-button>

          </p>
        </div>
        <div class="activity-list" v-for="o in 4" :key="o">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>活动名称</span>
            </div>
            <div >
              {{ '活动' + o}}
            </div>
          </el-card>
        </div>
      </div>
      <div class="right-bar" style="width:auto; float: right">
        <div class="hot-activities">
          <h4>近期活动：</h4>
          <ul class="hot-activities-list">
            <li>排名第一</li>
            <li>第二</li>
            <li>第三</li>
            <li>第四</li>
          </ul>
        </div>
        <div class="excel-volunteer">
          <h4>近期优秀志愿者：</h4>
          <ul class="hot-activities-list">
            <li>whh</li>
            <li>lsd</li>
            <li>bdd</li>
            <li>app</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer"></div><!-- 空（已完成，模板） -->
  </div>
</template>

<script>
export default {
  name: 'activity',
  data() {
    return {
      msg: '这里是activity'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
