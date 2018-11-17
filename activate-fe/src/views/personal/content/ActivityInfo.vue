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
import { get_acticity_by_id } from '@/api/api'

export default {
  name: 'ActivityInfo',
  data() {
    return {
      form: {activitiesId:''},
      infos: [[]]
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
    },
    async funcget_acticity_by_id() {
      for ( let aid in this.form.activitiesId ) {
        await get_acticity_by_id({activityId:this.form.activitiesId[aid]})
          .then(res => {
            this.infos[aid] = res.data
          })
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    this.form = Object.assign({}, this.userInfo)
    // console.log(this.form)
    // console.log(this.form.activitiesId)
    this.funcget_acticity_by_id()
    console.log(this.infos)
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
