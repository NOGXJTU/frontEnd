<template>
  <div class="intro">
    <el-row :gutter="20">
      <el-col :span="10"><div class="grid-content bg-purple">
        <div class="intro-title">
          筑梦者义教组织
        </div>
        <div class="intro-content">
          筑梦者（NOD），名称源于not only a dreamer，是一支面向全国，以义教地区籍大各大高校的大学生
          利用每年寒暑假返乡的时间为家乡中小学生提供义教的大学生公益组织。
          借助互联网，筑梦者正逐渐将更多不同地区、不同大学、不同团体和个人的公益“孤岛”联结，
          以期在未来打造“大公益”的有机统一体。
        </div>
      </div>
      </el-col>
      <el-col :span="7"><div class="grid-content bg-purple">
        <div class="special">
          <div class="fl">
            <img class="icon " src="../../assets/img_home/icon1.png" alt="icon1">
          </div>
          <div class="special-title">
            优质志愿者
          </div>
          <div class="special-content">
            筑梦者义教组织中的志愿者多为来自双一流高校的优秀大学生，能为孩子们提供良好的师资力量
          </div>
        </div>
        <div class="special">
          <div class="fl">
            <img class="icon " src="../../assets/img_home/icon2.png" alt="icon2">
          </div>
          <div class="special-title">
            丰富兴趣课
          </div>
          <div class="special-content">
            筑梦者义教不仅仅给孩子们带来课程的教学，还有丰富的兴趣课来培养孩子德智体美全面发展
          </div>
        </div>
      </div>
      </el-col>
      <el-col :span="7"><div class="grid-content bg-purple">
        <div class="special">
          <div class="fl">
            <img class="icon " src="../../assets/img_home/icon4.png" alt="icon4">
          </div>
          <div class="special-title">
            反哺家乡
          </div>
          <div class="special-content">
            筑梦者义教提倡大学生假期为家乡提供义教服务，不耽误上学期间的时间，且能有效利用假期时光
          </div>
        </div>
        <div class="special">
          <div class="fl">
            <img class="icon " src="../../assets/img_home/icon3.png" alt="icon3">
          </div>
          <div class="special-title">
            与时俱进
          </div>
          <div class="special-content">
            筑梦者义教组织积极响应“互联网+”的号召，将传统志愿者义教服务与互联网结合，有着无限发展潜力
          </div>
        </div>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Intro"
    }
</script>

<style scoped>
  .grid-content {
    padding: 10px;
    border-radius: 4px;
    min-height: 6px;
  }

  .intro {
    margin-left: 150px;
    margin-right: 150px;
  }

  .intro-title {
    font-size: 25px;
    padding: 20px 25px 5px 25px;
    margin-top: 40px;
    color: #3dac0ac4;
  }

  .intro-content {
    margin: 25px 20px;
    text-align: left;
    font-size: 14px;
    color: #003366;
  }

  .special {
    margin: 20px 10px;
  }

  .special .icon {
    width: 45px;
    height: 45px;
  }

  .special-title {
    font-size: 20px;
    text-align: center;
    padding: 8px;
    color: #3dac0ac4;
  }

  .special-content {
    margin-left: 60px;
    padding-top: 12px;
    font-size: 14px;
    color: #003366;
  }

  .fl {
    float: left;
  }

  .activity .el-row {
    margin-top: 0px;
  }

  .contact-icon .icon {
    margin: 10px;
    width: 60%;
  }


  .special-content {
    margin-left: 60px;
    padding-top: 12px;
    font-size: 14px;
    color: #003366;
  }
</style>
