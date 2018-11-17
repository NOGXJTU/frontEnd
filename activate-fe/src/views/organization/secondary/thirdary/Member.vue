<template>
  <div>
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
  import { get_user_info_group } from '@/api/api'

  export default {
    name: 'Member',
    props: ['organization'],
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
      this.get_member_info(this.organization.users);
    }
  }
</script>

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

