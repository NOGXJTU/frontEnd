<template>
  <div class="personal-activityinfo">
      <dt v-for="(item, index) in form.activitiesId" :key="index">
        <div class="activity-item">
          <el-card class="box-card">
            <span>{{infos[index].name}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handle_quit(item)">退出活动</el-button>
          </el-card>
        </div>
      </dt>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { get_activity_by_many_id } from '@/api/api'
import { quit_acitvity } from '@/api/api'
export default {
  name: 'ActivityInfo',
  data() {
    return {
      form: {activitiesId:''},
      infos: get_acticity_by_id()
    }
  },
  // handle_quit(id) {
  //   this.$confirm('此操作将使您退出该活动, 是否继续?', '提示', {
  //     confirmButtonText: '确定',
  //     cancelButtonText: '取消',
  //     type: 'warning'
  //   }).then(() => {
  //     quit_acitvity({activityId:this.userInfo.activityId[id]})
  //   }).catch(() => {
  //     this.$message({
  //       type: 'info',
  //       message: '已取消'
  //     })
  //   })
  // },
  // get_activity_by_id() {
  //   get_activity_by_many_id({activityId:this.userInfo.activityId})
  //     .then(res => {
  //       this.info = Object.assign({},res.data)
  //     })
  // }
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
    },
    get_acticity_by_id() {
      get_activity_by_many_id({activityId:this.userInfo.activityId})
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    this.form = Object.assign({}, this.userInfo)
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
