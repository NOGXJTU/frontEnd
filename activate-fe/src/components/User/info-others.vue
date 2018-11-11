<template>
  <div>
    <el-container>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{user.name}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="$router.push('/activity/'+activity.id)">返回活动</el-button>
        </div>
        <div class="other-info">
          <div>{{user.school}}</div>
          <div>{{user.qq}}</div>
          <div>{{user.description}}</div>
        </div>
        <div v-for="activity in activities" :key="activity" class="text item">
          {{'列表内容 ' + activity }}
        </div>
      </el-card>
    </el-container>
  </div>
</template>

<script>
import { get_user_info_by_id } from '../../api/api.js'
import { get_acticity_by_id } from "../../api/api";


export default {
  name: 'info-others',
  data() {
    return {
      user: {},
      activities:[]
    }
  },

  // 路由发生变化时更新数据
  beforeRouteUpdate(to, from, next) {
    console.log('beforerouterupdate');

    this.get_user_info(to.params.userId)
    next()
  },

  mounted() {
    this.get_user_info(this.$route.params.userId)
    this.get_user_activities(this.user.activitesId)
  },

  methods: {
    get_user_info(userId) {
      let pack = {
        userId: userId
      }

      get_user_info_by_id(pack)
        .then(res => {
          this.user = res.data
          console.log(this.user);

        })
        .catch(e => {
          console.log(e.response.data)
        })
    },
    get_user_activities(activitiesID){
      for(i in activitiesID){
        get_acticity_by_id(i)
          .then(res=>{
            this.activities.append(res.data.name)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
