<template>
  <div class="activity-content" v-for="activity in activities" :key="activity.id">
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
</template>

<script>
import { get_all_unfinished_activity_info } from '@/api/api.js'

export default {
  name: "Content",
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

<style scoped>

</style>
