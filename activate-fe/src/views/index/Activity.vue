<template>
  <div class="activity">
    <div class="activity-title">
      近期活动
    </div>
    <el-row :gutter="20">
      <el-col :span="10"><div class="grid-content bg-purple">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://dummyimage.com/500x400" class="image">
          <div style="padding: 5px;">
            <span>第一个活动</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
      <el-col :span="7"><div class="grid-content bg-purple">
        <el-card :body-style="{ padding: '0px' }" class="top-activity">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>第一个活动</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>第一个活动</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
      <el-col :span="7"><div class="grid-content bg-purple">
        <el-card :body-style="{ padding: '0px' }" class="top-activity">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>第一个活动</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>第一个活动</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Activity"
    }
</script>

<style scoped>
  .grid-content {
    padding: 10px;
    border-radius: 4px;
    min-height: 6px;
  }
  .bottom {
    margin-top: 4px;
    line-height: 10px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .special .icon {
    width: 45px;
    height: 45px;
  }

  .activity {
    margin: 0 auto;
    width: 1200px;
  }

  .top-activity {
    margin-bottom: 12px
  }

  .activity-title {
    font-size: 30px;
    margin-bottom: 30px;
    color: #3dac0ac4;
  }

  .contact-icon .icon {
    margin: 10px;
    width: 60%;
  }

</style>
