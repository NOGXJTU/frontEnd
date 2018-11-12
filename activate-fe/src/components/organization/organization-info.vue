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
          <div class="organization-title word-style" style="font-size: xx-large;">组织名称</div>
          <div class="organization-time word-style" style="font-size: x-large;">
            组织负责人：
          </div>
          <div class="word-style" style="font-size: large; ">
            简介: <br></br> 我们可能有时候自己不够自信或者地看自己，只是因为自己没有跳出自己的思维框架，从而不能正确看待自己，因此便会生出自己不行的这种看法。就有一程序员发生了这么个事，因公司给价太高而不敢去上班，但是又舍不得高薪，因而自己很焦灼。
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import {get_organization_by_Id} from "../../api/api";

export default {
        name: "organization-info",
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
