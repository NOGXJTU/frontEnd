<template>
  <div>
    <div class="organization-info-style">
      <el-card>
        <el-container >
          <el-aside width="300px" style="overflow: hidden">
            <div class="img-size"><img src="https://dummyimage.com/600x400/000/fff" height="300px" width="300px"></div>
          </el-aside>
          <el-main class="organization-info-right">
            <div class="organization-title word-style" style="font-size: x-large;">{{organization.name}}</div>
            <div class="organization-leader word-style" style="font-size: large;">
              组织负责人：{{organization.leaderId}}
            </div>
            <div class="organization-description word-style" style="font-size: medium; ">
              简介: <br>
              {{organization.description}}
            </div>
          </el-main>
        </el-container>
      </el-card>
    </div>
    <div class="organization-members">
      <el-button type="primary" @click="componentName='organization_members'">组织成员</el-button>
      <component :is="componentName" :organization="organization"></component>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
import {get_organization_by_Id} from "@/api/api";
import { get_user_info_group } from '@/api/api'
import organization_members from './thirdary/Member'

export default {
  name: "Info",
  data(){
    return{
      componentName:'',
      organization:'',
      members:[],
    }
  },
  components:{
    organization_members
  },
  methods:{
    get_organization_Info(organizationId){
      get_organization_by_Id({organizationId:organizationId})
        .then(res => {
          this.organization = res.data
          this.members = res.data.users
          // console.log(this.members)
        })
        .catch(e => {
          console.log(e.response.data)
        })
    },
    get_organization_members(users){
      let pack = {
        userIdGroup: users
      }
      get_user_info_group(pack)
        .then(res => {
          this.members = res.data
        })
        .catch(e => {
          console.log(e.response.data)
        })
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.get_activity_info(to.params.organizationId)
    // this.get_organization_members(to.organization.users)
    next()
  },
  created(){
    this.get_organization_Info(this.$route.params.organizationId)
  },
  mounted(){
    // this.get_organization_Info(this.$route.params.organizationId)
    // this.get_organization_members(this.organization.users)
    // console.log(this.members+"666")
  }

}
</script>

<style scoped>
  .organization-info-style{
    padding-top: 2%;
    width: 80%;
    padding-left: 10%;
  }
  .img-size{
    width: 300px;
    height: 300px;
  }
  .organization-info-right{
    padding-left: 5%;
  }
  .word-style{
    padding-left: 2%;
    padding-bottom: 2%;
  }
  .organization-title{
    padding-bottom: 3%;
  }
  .organization-leader{
    padding-top: 4%;
  }
  .organization-description{
    padding-top: 2%;
  }
  .activity-members {
    padding-left: 10%;
    padding-top: 2%;
    width: 35%;
    float: left;
  }
  .organization-members{
    padding-top: 5%;
    width: 80%;
    padding-left: 10%;
  }
</style>
