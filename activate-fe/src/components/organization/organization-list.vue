<template>
  <div>
    <div class="organization-list" >
      <el-card class="organization-card">
        <el-container >
          <el-aside width="150px">
            <div class="img-size"><img src="https://dummyimage.com/600x400/000/fff" height="150" width="150"></div>
          </el-aside>
          <el-main class="organization-info-right">
            <div class="organization-title word-style" style="font-size: xx-large; ">组织名称</div>
            <div class="organization-time word-style" style="font-size: x-large; ">
              负责人：
            </div>
          </el-main>
        </el-container>
      </el-card>
    </div>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>组织leader</span>
          <el-button style="float: right; padding: 3px 0" type="text"></el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "organization-list",
    }
</script>

<style scoped>
.organization-list{
  width: 60%;
  padding-left: 7%;
  /*height: 200px;*/

}
.organization-card{
  height: 200px;
}
.word-style{
  padding-left: 3%;
  padding-bottom: 3%;
}
</style>
