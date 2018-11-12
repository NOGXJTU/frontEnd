<template>
  <div class="details-list">
    <div>
      <span style="margin-left: 40px">{{msgChose}}</span>
      <el-cascader></el-cascader>
    </div>
    <el-container>
      <el-main>
        <div  v-for="o in 10" :key="o">
          <el-card class="box-card card-shape" >
            <div class="clearfix">
              <a href="http://localhost:8080/#/resource/resourceExperience" style="text-decoration: none;margin-left: 20px">{{msgTitle}}  {{o}}</a>
              <span style="margin-left: 20px"> {{msgTime}}：{{itstime}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">{{msgPeople}}{{peopleName}}</el-button>
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
            {{ msgInto+'： ' + o }}
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "DetailsList",
  data () {
    return {
      msgChose: this.$route.query.msgChose,
      msgTitle: this.$route.query.msgTitle,
      msgTime: this.$route.query.msgTime,
      msgPeople: this.$route.query.msgPeople,
      msgInto: this.$route.query.msgInto,
      itstime: '',
      peopleName: '',
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
