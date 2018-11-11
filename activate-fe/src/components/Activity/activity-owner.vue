<template>
  <div class="activity-owner">
    <el-card class="box-card">
      <div slot="header">
        <span>活动负责人</span>
      </div>
      <div class="activity-owner-info">
        <a class="avatar"><img style="width: 238px;height: 40px" src="https://dummyimage.com/600x400/732973/eaecf7" /></a>
        <div class="owner-name">{{owner.name}}</div>
      </div>
      <div class="owner-desc">
        <p>这里是组长一部分描述</p>
        <p>tel:{{owner.phone}}</p>
      </div>
    </el-card>

  </div>
</template>

<script>
import { get_user_info_by_id } from '../../api/api.js'

export default {
  name: 'activity-owner',
  props: ['ownerId'],
  data() {
    return {
      owner: {}
    }
  },

  watch: {
    ownerId: function(){
      this.get_owner_info(this.ownerId)
    }

  },

  methods: {
    get_owner_info(ownerId) {
      let pack = {
        userId: ownerId
      }

      get_user_info_by_id(pack)
        .then(res => {
          this.owner = res.data
        })
        .catch(e => {
          console.log(e.response.data)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activity-owner {
  width: 270px;
}
.activity-owner-info {
  height: auto;
}
.owner-desc {
  padding-bottom: 30px;
}
</style>
