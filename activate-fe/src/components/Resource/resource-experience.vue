<template>
  <div>
    <el-container>
      <el-main>
        <div  v-for="exp in experience" :key="exp">
          <el-card class="box-card card-shape" >
            <div class="clearfix">
              <a href="http://localhost:8080/#/resource/resourceExperience" style="text-decoration: none;margin-left: 20px">{{exp.title}}</a>
              <el-button style="float: right; padding: 3px 0" type="text">上传人：{{exp.contributor}}</el-button>
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
            {{'学习经验经历： ' + o }}
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import {study_experience} from "../../api/api";

  export default {
    name:'resource-experience',
    data(){
      return{
        experience:[],
      }
    },
    methods: {
      get_all_exp(){
        study_experience()
          .then(res => {
            this.experience = res.data
          }).catch( e => {
            console.log(e.response.data)
        })
      }
    },
    mounted(){
      this.get_all_exp()
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
