<template>
  <div>
    <div>
      <span style="margin-left: 40px">请选择年级与科目：</span>
      <el-cascader></el-cascader>
    </div>
    <el-container>
      <el-main>
        <div  v-for="point in points" :key="point">
          <el-card class="box-card card-shape" >
            <div class="clearfix">
              <a href="http://localhost:8080/#/resource/resourceKnowledge" style="text-decoration: none;margin-left: 20px">知识点  {{point.title}}</a>
              <el-button style="float: right; padding: 3px 0" type="text">下载</el-button>
            </div>
          </el-card>
        </div>
      </el-main>
      <el-aside>
        <el-card class="box-card" style="margin: 20px">
          <div slot="header" class="clearfix">
            <span>最新上传资料</span>
          </div>
          <div v-for="o in 5" :key="o" class="text item">
            {{'知识点： ' + o }}
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import {knowleadge_point} from "../../api/api";

  export default {
    name:'resource-knowledge',
    data(){
      return{
        points:[],
      }
    },
    methods: {
      get_all_points(){
        knowleadge_point()
          .then(res => {
            this.points = res.data
          }).catch( e => {
          console.log(e.response.data)
        })
      }
    },
    mounted(){
      this.get_all_points()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-shape{
    width: 70%;
    margin: 15px;
  }
</style>
