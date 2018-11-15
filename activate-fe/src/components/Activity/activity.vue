<template>
  <div>
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
            <el-button>文化课</el-button>
            <el-button>兴趣课</el-button>
            <el-button>思想沙龙</el-button>
            <el-button> </el-button>
            <el-button>其他</el-button>
          </p>
          <p class="time-chooser">
            <el-button type="primary">活动时间：</el-button>
            <el-button>2016</el-button>
            <el-button>2017</el-button>
            <el-button>2018</el-button>
          </p>
        </div>
        <div class="activity-list" v-for="activity in activities" :key="activity.id">
          <div @click="$router.push('/activity/'+activity.id)">
            <el-card class="box-card" >
              <div slot="header" class="clearfix">
                <a @click="$router.push('/activity/'+activity.id)" style="text-decoration: none">活动名称：{{activity.name}}</a>
              </div>
              <div>
                活动时间：{{activity.beginTime}}
                <br> {{activity.description}}
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="right-bar" style="float: right">
        <div class="hot-activities">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>近期活动</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'活动 ' + o }}
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import { get_all_unfinished_activity_info } from '../../api/api.js'

export default {
  name: 'activity',
  data() {
    return {
      msg: '这里是activity',
      activities: [],
      activity_show: []
    }
  },
  methods: {
    // 获取所有未完成的活动信息
    get_activity() {
      get_all_unfinished_activity_info()
        .then(res => {
          console.log(res.data)
          this.activities = res.data
        })
        .catch(e => {
          console.log(e)
        })
    },
  },

  mounted() {
    this.get_activity()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
