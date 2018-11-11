<template>
  <div>
    <div class="header"></div>
    <!-- 空（已完成，模板） -->
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
    <div class="footer"></div>
    <!-- 空（已完成，模板） -->
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
    // set_activity_status(){
    //
    //   for(i = activity; i < this.activities.size ; i++){
    //     this.activity_show.append({name:i.id,show:true})
    // }
    // },
    // classify_activity(activityType){
    //   for(i = 0; i < this.activities.size ; i++){
    //     if (i.type() != activityType){
    //       this.activity_show[i].show = false;
    //     }
    //   }
    // },
  },

  mounted() {
    this.get_activity()
    // this.set_activity_status()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
