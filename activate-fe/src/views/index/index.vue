<template>
  <div class="view-index">
    <Banner></Banner>
    <Intro></Intro>
    <Activity></Activity>
    <Map></Map>
  </div>
</template>

<script>
import Banner from "./Banner";
import Activity from "./Activity";
import Intro from "./Intro";
import Map from "./Map";
export default {
  name: "index",
  components: {Map, Intro, Activity, Banner}
}
</script>

<style scoped>
.banner {
  margin-top: 30px;
}
.activity {
  margin-top: 75px;
}
.intro {
  margin-top: 75px;
}
.map {
  margin-top: 75px;
}
</style>
