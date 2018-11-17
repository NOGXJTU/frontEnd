<template>
  <div>
    <div>
      <span style="margin-left: 40px">请选择年级与科目：</span>
      <el-cascader></el-cascader>
    </div>
    <el-container>
      <el-main>
        <div  v-for="question in questions" :key="question">
          <el-card class="box-card card-shape" >
            <div class="clearfix">
              <a href="http://localhost:8080/#/resource/resourceQuestionType" style="text-decoration: none;margin-left: 20px">{{question.title}}</a>
              <!--<span style="margin-left: 20px"> 发布时间：{{发布时间time}}</span>-->
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
            {{'重点题型： ' + o }}
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import {import_explain} from "../../api/api";

  export default {
    name:'resource-experience',
    data(){
      return{
        questions:[],
      }
    },
    methods: {
      get_all_questions(){
        import_explain()
          .then(res => {
            this.questions = res.data
          }).catch( e => {
          console.log(e.response.data)
        })
      }
    },
  mounted(){
      this.get_all_questions()
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
