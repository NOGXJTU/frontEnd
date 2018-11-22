<template>
  <div>
    <div class="activity-button">
      <el-button type="primary"  @click="charge_if_leader">活动申请</el-button>
    </div>
    <div class="activity-content">
      <div class="" v-for="activity in activities" :key="activity.id">
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
  </div>
</template>

<script>
import { get_all_unfinished_activity_info } from '@/api/api'
import {get_all_organization} from "@/api/api";
import {get_user_info} from "@/api/api";

export default {
  name: "Content",
  data() {
    return {
      msg: '',
      activities: [],
      activity_show: [],
      organizationLeaders:[],
      thisUserId:'',
    }
  },
  methods: {
    // 获取所有未完成的活动信息
    get_activity() {
      get_all_unfinished_activity_info()
        .then(res => {
          console.log(res)
          this.activities = res.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    charge_if_leader(){
      for(let i = 0;i< this.organizationLeaders.length;i++){
        console.log(this.organizationLeaders[i])
        if (this.organizationLeaders[i].leaderId == this.thisUserId){
          console.log(this.organizationLeaders[i].id)
          console.log(this.thisUserId)
          // debugger
          this.$router.push('/activityApply')
          break
        }
        else {
          // debugger
          this.$message({
            showClose: true,
            message: '恭喜你，不是组织领导不可以申请活动',
            type: 'error'
          });
        }
      }
    },
    get_current_user(){
      get_user_info()
        .then(res => {
          console.log(res)
          this.thisUserId = res.data.id
        })
        .catch(e => {
          console.log(e)
        })
    },
    get_all_organization_leaderId(){
      get_all_organization()
        .then(res => {
          console.log(res)
          this.organizationLeaders = res.data
        })
        .catch(e => {
          console.log(e)
        })
    },
  },
  mounted() {
    this.get_activity()
    this.get_current_user()
    this.get_all_organization_leaderId()
  }
}
</script>

<style scoped>
.box-card {
  margin: 15px;
  cursor: pointer;
}
.activity-button{
  float: right;
  /*padding-top: 2%;*/
  padding-right: 10%;
}
</style>
