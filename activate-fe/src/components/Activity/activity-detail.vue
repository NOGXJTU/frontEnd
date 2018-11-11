<template>
  <div class="activity-detail-main">
    <div class="activity-location">
      <span class="activity-detail-title">
        活动地点:
      </span>
      <div>{{activity.place}}</div>
    </div>
    <div>
      <span class="activity-detail-title">
        活动概述
      </span>
      <div>
        {{activity.description}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activity-detail',
  props: ['activity'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .activity-detail-title{
    font-size: large;
  }
</style>
