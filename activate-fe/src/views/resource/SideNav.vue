<template>
  <div class="side-nav">
    <el-menu class="el-menu-vertical-demo">
      <el-menu-item v-for="(i,index) in msg" :key="index" @click="$router.push({path: '/resource/details', query: {msgName:msg[index].name,msgChose:msg[index].msgChose,msgTitle:msg[index].msgTitle,msgTime:msg[index].msgTime,msgPeople:msg[index].msgPeople,msgInto:msg[index].msgInto}})" :index="''+index">
        <i :class='msg[index].icon'></i>
        <span  class="side-title" slot="title">{{msg[index].name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  data () {
    return {
      msg: [
        {
          name: "知识点概括",
          icon: "el-icon-menu",
          msgChose: "请选择年级与科目",
          msgTitle: "知识点",
          msgTime: "发布时间",
          msgPeople: "下载",
          msgInto: "知识点"
        },
        {
          name: "重点题型讲解",
          icon: "el-icon-tickets",
          msgChose: "请选择年级与科目",
          msgTitle: "重点题型",
          msgTime: "发布时间",
          msgPeople: "下载",
          msgInto: "重点题型"
        },
        {
          name: "学科学习指导",
          icon: "el-icon-document",
          msgChose: "请选择年级与科目",
          msgTitle: "学习指导",
          msgTime: "发布时间",
          msgPeople: "下载",
          msgInto: "学习指导"
        },
        {
          name: "典型例题精析",
          icon: "el-icon-view",
          msgChose: "请选择年级与科目",
          msgTitle: "",
          msgTime: "",
          msgPeople: "",
          msgInto: ""
        },
        {
          name: "学习经验经历",
          icon: "el-icon-edit-outline",
          msgChose: "请选择年级与科目",
          msgTitle: "学习经验经历",
          msgTime: "发布时间",
          msgPeople: "上传人：",
          msgInto: "学习经验经历"
        },
        {
          name: "带学介绍",
          icon: "el-icon-star-on",
          msgChose: "请选择带学类型",
          msgTitle: "带学介绍",
          msgTime: "发布时间",
          msgPeople: "上传人：",
          msgInto: "带学介绍"
        },
        {
          name: "带学学科介绍",
          icon: "el-icon-star-off",
          msgChose: "请选择年级与科目",
          msgTitle: "带学学科介绍",
          msgTime: "发布时间",
          msgPeople: "上传人：",
          msgInto: "带学学科介绍"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
