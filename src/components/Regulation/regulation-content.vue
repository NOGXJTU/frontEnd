<template>
  <div v-html="source"></div>
</template>

<script>
export default {
  name: 'regulation-content',
  props: ['source'],
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
