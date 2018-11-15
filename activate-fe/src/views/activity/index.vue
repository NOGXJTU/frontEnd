<template>
  <div class="active-view">
    <chose></chose>
    <Content></Content>
    <news></news>
    <div style="clear: both"></div>
  </div>
</template>

<script>
import Chose from "./Chose";
import Content from "../regulation/Content";
import News from "./News";
export default {
  name: "activity",
  components: {News, Content, Chose}
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
</style>
