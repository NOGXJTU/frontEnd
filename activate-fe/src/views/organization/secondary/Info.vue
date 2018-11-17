<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/activity' }">活动</el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="organization-info-style">
      <el-container >
        <el-aside width="300px">
          <div class="img-size"><img src="https://dummyimage.com/600x400/000/fff" height="300" width="300"></div>
        </el-aside>
        <el-main class="organization-info-right">
          <div class="organization-title word-style" style="font-size: xx-large;">{{organization.name}}</div>
          <div class="organization-time word-style" style="font-size: x-large;">
            组织负责人：{{organization.leaderId}}
          </div>
          <div class="word-style" style="font-size: large; ">
            简介: <br>
            {{organization.description}}
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import {get_organization_by_Id} from "@/api/api";

export default {
  name: "Info",
  data(){
    return{
      organization:'',
      members:this.organization.member,
    }
  },
  methods:{
    get_organization_Info(){
      get_organization_by_Id()
        .then(res => {
          this.organization = res.data
        })
        .catch(e => {
          console.log(e.response.data)
        })
    }
  },
  mounted(){
    this.get_organization_by_Id()
  }

}
</script>

<style scoped>
  .organization-info-style{
    padding-top: 2%;
    width: 80%;
    padding-left: 10%;
  }
  .img-size{
    width: 300px;
    height: 300px;
  }
  .organization-info-right{
    padding-left: 5%;
  }
  .word-style{
    padding-left: 2%;
    padding-bottom: 2%;
  }
</style>
