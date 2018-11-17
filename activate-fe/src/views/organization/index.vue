<template>
  <div>
  <div class="main-organization">
    <div class="activity" style="width: 70%; float: left">
      <div class="organization-list" v-for="organization in organizations" :key="organization.id">
        <div @click="$router.push('/organization/'+organization.id)">
          <el-card class="organization-card">
            <el-container>
              <el-aside width="150px">
                <div class="img-size"><img src="https://dummyimage.com/600x400/000/fff" height="150" width="150"></div>
              </el-aside>
              <el-main class="organization-info-right">
                <div class="organization-title word-style" style="font-size: xx-large; ">
                  <a @click="$router.push('/organization/'+organization.id)" style="text-decoration: none">组织名称：{{organization.name}}</a>
                </div>
                <div class="organization-time word-style" style="font-size: x-large; ">
                  负责人：{{organization.leaderId}}
                </div>
              </el-main>
            </el-container>
          </el-card>
        </div>
      </div>
    </div>
  </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
  import { get_all_organization } from "@/api/api";

  export default {
    name: 'Organization',
    data(){
      return{
        organizations:[],
      }
    },
    methods: {
      get_all_organization(){
        get_all_organization()
          .then(res => {
            console.log(res.data)
            this.organizations = res.data
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    mounted() {
      this.get_all_organization()
    }
  }
</script>

<style scoped>
  .main-organization{
    padding-left: 3%;
  }
  .right-bar{
    width: 16%;
    padding-right: 3%;
    padding-top: 5%;
  }
  .organization-list{
    width: 60%;
    padding-left: 7%;
    /*height: 200px;*/

  }
  .organization-card{
    height: 200px;
  }
  .word-style{
    padding-left: 3%;
    padding-bottom: 3%;
  }
</style>
