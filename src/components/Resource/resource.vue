<template>
  <div>
    <el-container style="margin-bottom: 20px">
      <el-aside width="350px">
        <el-col :span="12">
          <el-menu class="el-menu-vertical-demo">
            <el-menu-item index="1" @click="$router.push('/resource/resourceKnowledge')">
              <i class="el-icon-menu"></i>
              <span class="side-title" slot="title">知识点概括</span>
            </el-menu-item>
            <el-menu-item index="2" @click="$router.push('/resource/resourceQuestionType')">
              <i class="el-icon-tickets"></i>
              <span class="side-title" slot="title">重点题型讲解</span>
            </el-menu-item>
            <el-menu-item index="3" @click="$router.push('/resource/resourceSubjectDirect')">
              <i class="el-icon-document"></i>
              <span class="side-title" slot="title">学科学习指导</span>
            </el-menu-item>
            <el-menu-item index="4" @click="$router.push('/resource/resourceVideoList')">
              <i class="el-icon-view"></i>
              <span class="side-title" slot="title">典型例题精析</span>
            </el-menu-item>
            <el-menu-item index="5" @click="$router.push('/resource/resourceExperience')">
              <i class="el-icon-edit-outline"></i>
              <span class="side-title" slot="title">学习经验经历</span>
            </el-menu-item>
            <el-menu-item index="6" @click="$router.push('/resource/resourceSchool')">
              <i class="el-icon-star-on"></i>
              <span class="side-title" slot="title">带学介绍</span>
            </el-menu-item>
            <el-menu-item index="7" @click="$router.push('/resource/resourceSchoolSubject')">
              <i class="el-icon-star-off"></i>
              <span class="side-title" slot="title">带学学科介绍</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <div class="select-menu">
          <div class="banner-img">
            <div class="banner">
              <el-carousel indicator-position="outside">
                <el-carousel-item>
                  <h3>知识点概括</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3>重点题型讲解</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3>学科学习指导</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3>典型例题精析</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3>学习经验经历</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3>带学介绍</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3>带学学科介绍</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div></div>
        </div>
      </el-main>
    </el-container>
    <div class="video-recommend">
      <div class="video-title">最新例题精析：</div>
      <el-container>
        <el-main height="">
          <!-- Main content -->
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in 8" :key="index">
              <el-card :body-style="{ padding: '0px' }"  class="video-item">
                <img src="https://dummyimage.com/120x100/000/fff" class="image">
                <div style="padding: 14px;">
                  <span>视频标题</span>
                  <div class="bottom clearfix">
                    <time class="time">日期 </time>
                    <el-button type="text" class="button" @click="$router.push('/resource/resourceVideoList/'+index)">点一下，看一年</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

export default {
  name: 'resource',
  data() {
    return {

    }
  },
  components: {
    videoPlayer
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    background: rgba(0, 0, 0, 0.0);
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
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
    clear: both;
  }

  .side-title {
    font-size: 15px;
  }

  .video-item{
    margin-bottom: 10px;
  }

  .video-recommend {
    margin-top: 50px;
  }

  .video-title {
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }

</style>
