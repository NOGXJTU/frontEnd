<template>
  <div class="active-view">
    <!--<Chose></Chose>-->
    <Content></Content>
    <div style="clear: both"></div>
  </div>
</template>

<script>
import Chose from "./Chose";
import Content from "./Content";
export default {
  name: "activity",
  components: {Content, Chose}
}
</script>

<style scoped>
.active-view {
  width: 1200px;
  margin: 0 auto;
}
.activity-chose {
  width: 650px;
  float: left;
}
.activity-content {
  clear: both;
}
.activity-news {
  float: right;
}
.activity-button{
  float: right;
  /*padding-top: 2%;*/
  padding-right: 10%;
}
</style>
