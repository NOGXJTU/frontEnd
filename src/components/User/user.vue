<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="change_component">
          <el-menu-item index="basic">
            <i class="el-icon-menu"></i>
            <span slot="title">基本信息</span>
          </el-menu-item>
          <el-menu-item index="activity">
            <i class="el-icon-document"></i>
            <span slot="title">我的活动</span>
          </el-menu-item>
          <el-menu-item index="confirm" v-show="">
            <i class="el-icon-document"></i>
            <span slot="title">活动审批</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main height="">
          <component :is="componentName"></component>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import infoActivity from './info-activity'
import infoBasic from './info-basic'
import activityConfirm from './activity_confirm'

export default {
  name: 'user',
  data() {
    return {
      componentName: 'infoBasic'
    }
  },

  methods: {
    change_component(key) {
      switch (key) {
        case 'basic':
          this.componentName = 'infoBasic'
          break
        case 'activity':
          this.componentName = 'infoActivity'
          break
        case 'confirm':
          this.componentName = 'activityConfirm'
          break
        default:
          break
      }
    }
  },

  components: {
    infoActivity,
    infoBasic,
    activityConfirm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
