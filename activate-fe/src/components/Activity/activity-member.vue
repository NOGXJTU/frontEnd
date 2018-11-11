<template>
  <div>
    <!-- <div class="activity-member-title">
      活动参与成员:
    </div> -->
    <div class="activity-members" v-for="member in members" :key="member.id" @click="$router.push('/user/'+member.id)">
      <el-card class="box-card">
        <div>
          <span><img class="activity-member-avatar" src="https://dummyimage.com/600x400/000/fff" /></span>
          <span>{{'姓名:' + member.name}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { get_user_info_group } from '../../api/api.js'

export default {
  name: 'activity-member',
  props: ['activity'],
  data() {
    return {
      members: []
    }
  },
  methods: {
    get_member_info(users) {
      // 打包数据
      let pack = {
        userIdGroup: users
      }
      // 批量请求成员信息
      get_user_info_group(pack)
        .then(res => {
          this.members = res.data
        })
        .catch(e => {
          console.log(e.response.data)
        })
    }
  },

  mounted() {
    this.get_member_info(this.activity.users);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activity-members {
  margin: 15px;
  width: 35%;
  float: left;
}
.activity-member-avatar {
  width: 100px;
  height: 100px;
}
</style>
