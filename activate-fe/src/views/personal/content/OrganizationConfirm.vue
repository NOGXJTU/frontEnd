<template>
  <div class="organization-confirm">
    <dt v-for="(item, index) in msg" :key="index">
      <div class="activity-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{msg[index].name}}</span>
            <el-button style="float: right; padding: 10px 0;;" type="text" >拒绝</el-button>
            <el-button style="float: right; padding: 10px 0" type="text" >同意</el-button>
          </div>
          <div>
            {{msg[index].description}}
          </div>
        </el-card>
      </div>
    </dt>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { get_all_organization_join } from '@/api/api'
import { agree_join_organization } from '@/api/api'
import { refuse_join_organization } from '@/api/api'

export default {
  name: "OrganizationConfirm",
  data () {
    return {
      form: {},
      msg: []
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    this.form = Object.assign({}, this.userInfo)
    get_all_organization_join({id:this.userInfo.organization})
      .then(res => {
        this.msg = res.data
        }
      )
  }
}
</script>

<style scoped>
  .activity-item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }
</style>
