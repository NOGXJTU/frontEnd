<template>
  <div class="resource-index">
    <side-nav></side-nav>
    <resource-banner></resource-banner>
    <div style="clear: both;"></div>
    <video-list></video-list>
  </div>
</template>

<script>
import SideNav from "./SideNav";
import ResourceBanner from "./Banner";
import VideoList from "./VideoList";
export default {
    name: "resource",
  components: {VideoList, ResourceBanner, SideNav}
}
</script>

<style scoped>
.resource-index {
  width: 1200px;
  margin: 0 auto;
}
.side-nav {
  float: left;
}
.resource-banner {
  float: right;
  width: 950px;
  margin-top: 45px;
}
</style>
