<template>
  <div class="personal-view">
    <el-menu default-active="1" class="el-menu-vertical-demo personal-sidenav" @select="change_component">
      <el-menu-item index="basic">
        <i class="el-icon-menu"></i>
        <span slot="title">基本信息</span>
      </el-menu-item>
      <el-menu-item index="activity">
        <i class="el-icon-document"></i>
        <span slot="title">我的活动</span>
      </el-menu-item>
      <el-menu-item index="activity-confirm" v-show="userPower">
        <i class="el-icon-document"></i>
        <span slot="title">活动成员审批</span>
      </el-menu-item>
      <el-menu-item index="organization-confirm" v-show="userPower">
        <i class="el-icon-document"></i>
        <span slot="title">组织成员审批</span>
      </el-menu-item>
    </el-menu>
    <el-main class="personal-content">
      <component :is="componentName"></component>
    </el-main>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import Basic from './content/Basic'
import ActivityInfo from './content/ActivityInfo'
import ActivityConfirm from './content/ActivityConfirm'
import OrganizationConfirm from './content/OrganizationConfirm'
import { mapState } from 'vuex'

export default {
  name: 'Personal',
  data() {
    return {
      componentName: 'Basic',
      userPower: false
    }
  },
  methods: {
    change_component(key) {
      switch (key) {
        case 'basic':
          this.componentName = 'Basic'
          break
        case 'activity':
          this.componentName = 'ActivityInfo'
          break
        case 'activity-confirm':
          this.componentName = 'ActivityConfirm'
          break
        case 'organization-confirm':
          this.componentName = 'OrganizationConfirm'
        default:
          break
      }
    }
  },
  components: {
    Basic,
    ActivityInfo,
    ActivityConfirm,
    OrganizationConfirm
  },
  computed: {
  ...mapState(['userInfo'])
  },
  mounted() {
    this.userPower = this.userInfo.superUser
  }
}
</script>

<style scoped>
.personal-view {
  width: 1200px;
  margin: 0 auto;
}
.personal-sidenav {
  width: 20%;
  float: left;
}
.personal-content {
  width: 75%;
  float: right;
}
</style>
