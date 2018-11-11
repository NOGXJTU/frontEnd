<template>
  <div>
    <el-container>
      <el-header height="">
        <!-- Header content -->
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/activity' }">活动</el-breadcrumb-item>
            <el-breadcrumb-item>{{activity.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-container class="activity-info">
          <el-aside width="510px">
            <img class="activity-img" src="https://dummyimage.com/600x400/732973/eaecf7" />
          </el-aside>
          <el-main class="activity-info-right">
            <div class="activity-title">活动名称:{{activity.name}}</div>
            <div class="activity-time">
              活动时间:{{activity.beginTime}}
              <br/>
              <br/>
              <br/>
              <el-steps :space="200" :active="1" finish-status="success">
                <el-step title="活动筹备"></el-step>
                <el-step title="活动进行"></el-step>
                <el-step title="活动结束"></el-step>
              </el-steps>
            </div>
            <div class="activity-motion">
              <el-button type="primary" @click="get_nowLogin_user">报名参与</el-button>
              <!--活动申请表单-->
              <el-dialog title="活动申请" :visible.sync="activityApplyDialog">
                <el-form :model="form">
                  <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.activityName" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="活动申请" :label-width="formLabelWidth">
                    <el-input v-model="form.activityApply" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="activityApplyDialog = false">取 消</el-button>
                  <el-button type="primary" @click="activity_apply_send">确 定</el-button>
                </div>
              </el-dialog>
            </div>
          </el-main>
        </el-container>
      </el-header>
      <el-main height="">
        <!-- Main content -->
        <div>
          <el-header height="">
            <!-- Header content -->
            <el-button type="text" @click="componentName='activityDetail' ">活动详情</el-button>
            <el-button type="text" @click="componentName='activityMember'">活动成员</el-button>
          </el-header>
          <el-main height="">
            <!-- Main content -->
            <el-row>
              <el-col :span="18">
                <component :is="componentName" :activity="activity"></component>
              </el-col>
              <el-col :span="6">
                <activityOwner :ownerId="activity.ownerId"></activityOwner>
              </el-col>
            </el-row>
          </el-main>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import { get_acticity_by_id } from '../../api/api.js'
import { send_application } from '../../api/api.js'
import { get_user_info } from "../../api/api";
import activityDetail from './activity-detail'
import activityMember from './activity-member'
import activityOwner from './activity-owner'

export default {
  name: 'activity',
  data() {
    return {
      componentName: 'activityDetail',
      activity: {},
      activityDesc: '',
      activityApplyDialog: false,
      form: {
        activityName: '',
        activityApply: ''
      },
      formLabelWidth: '120px'
    }
  },
  // 路由发生变化时更新数据
  beforeRouteUpdate(to, from, next) {
    this.get_activity_info(to.params.activityId)
    next()
  },

  // 挂载组件时加载数据
  mounted() {
    this.get_activity_info(this.$route.params.activityId)
  },

  methods: {
    get_activity_info(activityId) {
      get_acticity_by_id({ activityId: activityId })
        .then(res => {

          this.activity = res.data
        })
        .catch(e => {
          console.log(e.response.data)
        })
    },
    get_nowLogin_user(){
      get_user_info()
        .then(res => {
          this.$message({
            type: 'success',
            showClose: true
          })
          this.activityApplyDialog = true
        })
        .catch(e => {
          console.log(e)
          this.$message({
            message: '请先进行登录操作',
            type: 'error',
            showClose: true
          })
        })
    },
    activity_apply_send(){
      this.activityApplyDialog = false
      send_application({ activityId: this.$route.params.activityId, description: this.form.activityApply})
        .then(res => {
          this.$message({
            message: '申请成功',
            type: 'success',
            showClose: true
          })
        })
        .catch(e => {
          console.log(e)
          this.$message({
            message: '申请失败',
            type: 'error',
            showClose: true
          })
        })
    }
  },

  components: {
    activityDetail,
    activityMember,
    activityOwner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activity-info-main {
  height: 400px;
}
.activity-info {
  background: white;
}
.activity-img {
  width: 508px;
  height: 288px;
}
.activity-info-right {
}
.activity-title {
  padding: 15px;
}
.activity-time {
  padding: 10px;
}
.activity-motion {
  padding: 30px;
  position: relative;
  margin-bottom: 0px;
}
</style>
