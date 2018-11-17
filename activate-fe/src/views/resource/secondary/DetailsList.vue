<template>
  <div class="details-list">
    <div>
      <span style="margin-left: 40px">{{msgChose}}</span>
      <el-cascader></el-cascader>
    </div>
    <el-container>
      <el-main>
        <div  v-for="(o,index) in thatmsg" :key="index">
          <el-card class="box-card card-shape" >
            <div class="clearfix">
              <a href="http://localhost:8080/#/resource/resourceExperience" style="text-decoration: none;margin-left: 20px">{{msgTitle}}  {{o}}</a>
              <!--<span style="margin-left: 20px"> {{msgTime}}：{{itstime}}</span>-->
              <el-button style="float: right; padding: 3px 0" type="text">{{msgPeople}}{{peopleName}}</el-button>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {study_guidance} from "@/api/api";
  import {school_subject_intro} from "@/api/api";
  import {school_intro} from "@/api/api";
  import {import_explain} from "@/api/api";
  import {knowleadge_point} from "@/api/api";
  import {study_experience} from "@/api/api";

export default {
  name: "DetailsList",
  data () {
    return {
      magName: this.$route.msgName,
      msgChose: this.$route.query.msgChose,
      msgTitle: this.$route.query.msgTitle,
      msgTime: this.$route.query.msgTime,
      msgPeople: this.$route.query.msgPeople,
      msgInto: this.$route.query.msgInto,
      peopleName: '',
      thatmsg: []
    }
  },
  methods: {
    get_all_guidances(){
      study_guidance()
        .then(res => {
          this.guidances = res.data
        }).catch( e => {
        console.log(e.response.data)
      })
    },
    get_all_subjects(){
      school_subject_intro()
        .then(res => {
          this.subjects = res.data
        }).catch( e => {
        console.log(e.response.data)
      })
    },
    get_all_schools(){
      school_intro()
        .then(res => {
          this.schools = res.data
        }).catch( e => {
        console.log(e.response.data)
      })
    },
    get_all_questions(){
      import_explain()
        .then(res => {
          this.questions = res.data
        }).catch( e => {
        console.log(e.response.data)
      })
    },
    get_all_points(){
      knowleadge_point()
        .then(res => {
          this.points = res.data
        }).catch( e => {
        console.log(e.response.data)
      })
    },
    get_all_exp(){
      study_experience()
        .then(res => {
          this.experience = res.data
        }).catch( e => {
        console.log(e.response.data)
      })
    }
  },
  mounted() {
    switch (this.msgName) {
      case '知识点概括':
        this.get_all_points()
        break
      case '重点题型讲解':
        this.get_all_points()
        break
      case '学科学习指导':
        this.get_all_guidances()
        break
      case '典型例题精析':
        this.get_all_questions()
        break
      case '学习经验经历':
        this.get_all_exp()
        break
      case '带学介绍':
        this.get_all_schools()
        break
      case '带学学科介绍:':
        this.get_all_subjects()
        break
      default:
        break
    }
  }
}
</script>

<style scoped>
  .details-list {
    width: 1200px;
    margin: 0 auto;
  }
  .card-shape {
    width: 70%;
    margin: 15px;
  }
</style>
