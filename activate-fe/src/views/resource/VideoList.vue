<template>
  <div class="video-list">
    <div class="video-title">最新例题精析：</div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in 8" :key="index">
        <el-card :body-style="{ padding: '0px' }"  class="video-item">
          <img src="https://dummyimage.com/120x100/000/fff" class="image">
          <div style="padding: 14px;">
            <span>视频标题</span>
            <div class="bottom clearfix">
              <time class="time">日期 </time>
              <el-button type="text" class="button" @click="$router.push('/resource/video/'+index)">点一下，看一年</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import 'video.js/dist/video-js.css'
  import { video_list } from "@/api/api";

  import { videoPlayer } from 'vue-video-player'

export default {
  name: "VideoList",
  data() {
    return {
      videos:[],
    }
  },
  components: {
    videoPlayer
  },
  methods:{
    get_all_videos(){
      video_list()
        .then(res => {
          this.videos = res.data
        }).catch( e => {
        console.log(e.response.data)
      })
    }
  },
  mounted(){
    this.get_all_videos()
  }
}
</script>

<style scoped>
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
