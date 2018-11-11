<template>
  <div>
    <div>
      <span style="margin-left: 40px">请选择年级与科目：</span>
      <el-cascader></el-cascader>
    </div>
    <el-container>
      <el-main height="">
        <!-- Main content -->
        <el-row :gutter="20">
          <el-col :span="6" v-for="video in videos" :key="video.id">
            <el-card :body-style="{ padding: '0px' }"  class="video-item">
              <img :src=video.image class="image" height="200">
              <div style="padding: 14px;">
                <span>{{ video.name }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{video.teacher}} </time>
                  <el-button type="text" class="button" @click="$router.push('/resource/resourceVideoList/'+video.id)">点一下，看一年</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
import { video_list } from "../../api/api";

export default {
  name: 'video',
  data() {
    return {
      videos: [],

    }
  },
  components: {
    videoPlayer
  },
  methods: {
    get_all_video() {
      console.log('get video here');
      
      video_list()
        .then(res => {
          this.$message({
            message: '成功',
            type: 'success',
            showClose: true
          })
          this.videos = res.data.data;
          console.log(this.videos)
        })
        .catch(e => {
          console.log(e)
          this.$message({
            message: '失败',
            type: 'error',
            showClose: true
          })
        })
    }
  },
  mounted() {
    console.log('video list mounted');
    
    this.get_all_video();
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

.video-item{
  margin-bottom: 10px;
}
</style>
