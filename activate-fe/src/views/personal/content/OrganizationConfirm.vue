<template>
  <div class="organization-confirm">
    <dt v-for="(item, index) in lista" :key="index">
      <div class="activity-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{test[index].applyName}}</span>
            <el-button style="float: right; padding: 10px 0;;" type="text" @click="disagree_apply(index)">拒绝</el-button>
            <el-button style="float: right; padding: 10px 0" type="text" @click="agree_apply(index)">同意</el-button>
          </div>
          <div>
            {{test[index].applyInfo}}
          </div>
        </el-card>
      </div>
    </dt>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { get_all_organization_apply_by_id } from '@/api/api'
import { agree_join_organization } from '@/api/api'
import { refuse_join_organization } from '@/api/api'

export default {
  name: "OrganizationConfirm",
  data () {
    return {
      form: {},
      msg: [],
      lista: 2,
      test: [{
        applyName: '组织申请测试1',
        applyOwner: '组织者（姓名）测试1',
        applyInfo:'（组织）申请描述1'
      },{
        applyName: '组织申请测试2',
        applyOwner: '组织者测试2',
        applyInfo:'申请描述2'
      }]
    }
  },
  computed: {
    ...mapState(['userInfo']),
  },
  // methods: {
  //   //同意申请
  //   agree_apply(id) {
  //     agree_join_organization({organizationApplyId:id})
  //       .then(res => {
  //         console.log(res)
  //       })
  //   },
  //   //不同意申请
  //   disagree_apply(id) {
  //     refuse_join_organization({organizationApplyId:id})
  //       .then(res => {
  //         console.log(res)
  //       })
  //   }
  // },
  methods: {
    //同意申请
    agree_apply(id) {
      this.$confirm('此操作将使您同意此申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.lista = 1
        switch (id) {
          case 0:
            this.test = [{
              applyName: '组织申请测试2',
              applyOwner: '组织者测试2',
              applyInfo:'申请描述2'
            }]
            break
          case 1:
            this.test = [{
              applyName: '组织申请测试1',
              applyOwner: '组织者（姓名）测试1',
              applyInfo:'（组织）申请描述1'
            }]
            break
          default:
            break
        }
      }).catch(() => {
      })
      // agree_join_activity({applicationId:id})
      //   .then(res => {
      //     console.log(res)
      //   })
    },
    //不同意申请
    disagree_apply(id) {
      this.$confirm('此操作将使您拒绝此申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.lista = 1
        switch (id) {
          case 0:
            this.test = [{
              applyName: '组织申请测试2',
              applyOwner: '组织者测试2',
              applyInfo:'申请描述2'
            }]
            break
          case 1:
            this.test = [{
              applyName: '组织申请测试1',
              applyOwner: '组织者（姓名）测试1',
              applyInfo:'（组织）申请描述1'
            }]
            break
          default:
            break
        }
      }).catch(() => {
      })
      // refuse_join_activity({applicationId:id})
      //   .then(res => {
      //     console.log(res)
      //   })
    },
  },
  created() {
    this.form = Object.assign({}, this.userInfo)
    console.log(this.userInfo.organizations)
  },
  mounted() {
    console.log(this.userInfo.organizations)
    console.log('a')
    // get_all_organization_apply_by_id({getAllAppWithId:this.userInfo.organization})
    //   .then(res => {
    //       this.msg = res.data
    //     }
    //   )
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
