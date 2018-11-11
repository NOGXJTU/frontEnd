<template>
<el-container>
  <el-main>
    <div class="banner">
      <el-carousel >
        <el-carousel-item>
          <img src="../assets/img_home/banner1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img_home/banner2.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/img_home/banner3.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
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
              <img class="icon " src="../assets/img_home/icon1.png" alt="icon1">
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
              <img class="icon " src="../assets/img_home/icon2.png" alt="icon2">
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
            <img class="icon " src="../assets/img_home/icon4.png" alt="icon4">
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
            <img class="icon " src="../assets/img_home/icon3.png" alt="icon3">
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
    <div class="map">
      <div class="content">
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple">
            <img class="chinese-map" src="../assets/img_home/map.png">
        </div>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <div class="map-caption">
            <div class="map-caption-title">
              we need your help
            </div>
            <div class="map-caption-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis nulla eligendi! Debitis blanditiis magnam asperiores velit commodi iusto fugiat repellat reiciendis nobis deserunt ut, optio repudiandae, incidunt, odio ipsa.
            </div>
          </div>
        </div>
        </el-col>
      </el-row>
      </div>

    </div>
    <div class="contact-information">
      <div class="information">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-row :type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="contact-icon">
                <img class="icon" src="../assets/img_home/contact3.png" alt="">
              </div>
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
               <div class="contact-infor">
                wangwangwang
              </div>
            </div>
            </el-col>
          </el-row>
        </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-row :type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="contact-icon">
                <img class="icon" src="../assets/img_home/contact2.png" alt="">
              </div>
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              <div class="contact-infor">
                13323332333
              </div>
            </div>
            </el-col>
          </el-row>
        </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-row :type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="contact-icon">
                <img class="icon" src="../assets/img_home/contact3.png" alt="">
              </div>
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              <div class="contact-infor mail">
                wangwangwang@163.com
              </div>
            </div>
            </el-col>
          </el-row>
        </div>
        </el-col>
      </el-row>
      </div>
    </div>
  </el-main>
  <el-footer height="120px">
    <div class="footer-content">
      <div class="fl-content fl">一</div>
      <div class="fl-content fl">场</div>
      <div class="fl-content fl">伟</div>
      <div class="fl-content fl">大</div>
      <div class="fl-content fl">理</div>
      <div class="fl-content fl">想</div>
      <div class="fl-content fr">春</div>
      <div class="fl-content fr">青</div>
      <div class="fl-content fr">悔</div>
      <div class="fl-content fr">无</div>
      <div class="fl-content fr">段</div>
      <div class="fl-content fr">一</div>
    </div>
  </el-footer>
</el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "这里是主页"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .el-main {

    text-align: center;
  }

  .el-row {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    padding: 10px;
    border-radius: 4px;
    min-height: 6px;
  }
  .row-bg {
    padding: 10px 0;
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

  .fr {
    float: right;
  }

  .activity {
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 60px;
  }

  .activity .el-row {
    margin-top: 0px;
  }

  .top-activity {
    margin-bottom: 12px
  }

  .activity-title {
    font-size: 30px;
    margin-bottom: 30px;
    color: #3dac0ac4;
  }

  .map {
    background-color: #003366;
    min-height: 1px;
  }

  .content {
    margin-left: 150px;
    margin-right: 150px;
  }

  .chinese-map {
    width: 70% ;
  }

  .map-caption {
    margin: 50px  60px ;
    color: rgb(241, 236, 250);
  }

  .map-caption-title {
    font-size: 24px;
  }

  .contact-information {
    margin-left: 100px;
    margin-right: 100px;
  }

  .contact-icon {
    padding: 2px;
    width: 50px;
    height: 50px;
    border: 2px solid #3dac0ac4;
  }

  .contact-icon .icon {
    margin: 10px;
    width: 60%;
  }

  .contact-infor {
    text-align: left;
    margin: 20px 50px 20px 0px ;
  }

  .mail {
    margin: 0px 50px 20px 0px ;
  }

  .el-footer {
    background-color: #3dac0ac4;
    color: rgb(252, 252, 252);
    text-align: center;
  }

  .footer-content {
    margin: 50px 220px 0px 220px;
  }

  .fl-content {
    margin-right: 40px;
    font-size: 18px;
  }

</style>
