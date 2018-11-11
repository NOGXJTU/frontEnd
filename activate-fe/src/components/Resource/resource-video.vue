<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/resource' }">资源</el-breadcrumb-item>
        <el-breadcrumb-item>the title of this video</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h1>视频ID：{{$route.params.videoId}}</h1>
    <videoPlayer class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true">
    </videoPlayer>

  </div>
</template>

<script>
// use vue-video-player component
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import { video_play } from "../../api/api";

export default {
  name: 'video_play',
  data() {
    return {
      name: '',
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: this.file
          // src: "http://suilin.top:8080/example/video/mp4/2018-07-19/QQ短视频20180719115859.mp4"
        }],
        // poster: "/static/images/author.jpg",
      },
    }
  },

  mounted() {
    console.log('r-v mounted');

    this.video_play_api();
  },

  methods: {
    video_play_api() {
      video_play({ id: this.$route.params.videoId })
        .then(res => {
          this.$message({
            message: '成功',
            type: 'success',
            showClose: true
          })
          this.playerOptions = Object.assign({},this.playerOptions,{sources: [{type: "video/mp4",src:res.data.file}]})
          console.log(this.playerOptions)
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

  components: {
    videoPlayer
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
