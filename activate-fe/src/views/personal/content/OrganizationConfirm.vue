<template>
  <div class="organization-confirm">
    <dt v-for="(item, index) in 5" :key="index">
      <div class="activity-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>组织申请人</span>
            <el-button style="float: right; padding: 10px 0;;" type="text" >拒绝</el-button>
            <el-button style="float: right; padding: 10px 0" type="text" >同意</el-button>
          </div>
          <div>
            申请描述
          </div>
        </el-card>
      </div>
    </dt>
  </div>
</template>

<script>
export default {
  name: "OrganizationConfirm"
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
