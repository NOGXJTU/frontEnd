<template>
  <div>
    <div>
      <span style="margin-left: 40px">请选择年级与科目：</span>
      <el-cascader></el-cascader>
    </div>
    <el-container>
      <el-main>
        <div  v-for="subject in subjects" :key="subject">
          <el-card class="box-card card-shape" >
            <div class="clearfix">
              <a href="http://localhost:8080/#/resource/resourceSchoolSubject" style="text-decoration: none;margin-left: 20px">带学学科介绍  {{subject.title}}</a>
              <!--<span style="margin-left: 20px"> 发布时间：{{发布时间time}}</span>-->
              <el-button style="float: right; padding: 3px 0" type="text">上传人：{{subject.constructor}}</el-button>
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
            {{'带学学科介绍： ' + o }}
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import {school_subject_intro} from "../../api/api";

  export default {
    name:'resource-school-subject',
    data(){
      return{
        subjects:[],
      }
    },
    methods: {
      get_all_subjects(){
        school_subject_intro()
          .then(res => {
            this.subjects = res.data
          }).catch( e => {
          console.log(e.response.data)
        })
      }
    },
    mounted(){
      this.get_all_subjects()
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
