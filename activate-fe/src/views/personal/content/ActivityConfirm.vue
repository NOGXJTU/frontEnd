<template>
  <div class="activity-confirm">
    <dt v-for="(item, index) in lista" :key="index">
      <div class="activity-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{test[index].applyName}}-{{test[index].applyOwner}}</span>
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
import { get_all_activity_apply_by_id } from '@/api/api'
import { agree_join_activity } from '@/api/api'
import { refuse_join_activity } from '@/api/api'

export default {
  name: "ActivityConfirm",
  data () {
    return {
      form: {},
      infos: {},
      activityName: '加载中...',
      activityApplyer: '加载中...',
      activityInfo: '加载中...',
      lista: 3,
      test: [{
        applyName: '活动申请测试1',
        applyOwner: '申请人测试1',
        applyInfo:'申请描述1'
      },{
        applyName: '活动申请测试2',
        applyOwner: '申请人测试2',
        applyInfo:'申请描述2'
      },{
        applyName: '活动申请测试3',
        applyOwner: '申请人测试3',
        applyInfo:'申请描述3'
      }]
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted() {
    console.log(this.userInfo)
    // this.form = Object.assign({}, this.userInfo)
    // get_all_activity_apply_by_id({activityId:this.userInfo.organization})
    //   .then(res => {
    //       this.msg = Object.assign({}, res.data)
    //     }
    //   )
  },
  methods: {
    //同意申请
    agree_apply(id) {
      this.$confirm('此操作将使您同意此申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.lista = 2
        switch (id) {
          case 0:
            this.test = [{
              applyName: '活动申请测试2',
              applyOwner: '申请人测试2',
              applyInfo:'申请描述2'
            },{
              applyName: '活动申请测试3',
              applyOwner: '申请人测试3',
              applyInfo:'申请描述3'
            }]
            break
          case 1:
            this.test = [{
              applyName: '活动申请测试1',
              applyOwner: '申请人测试1',
              applyInfo:'申请描述1'
            },{
              applyName: '活动申请测试3',
              applyOwner: '申请人测试3',
              applyInfo:'申请描述3'
            }]
            break
          case 2:
            this.test = [{
              applyName: '活动申请测试1',
              applyOwner: '申请人测试1',
              applyInfo:'申请描述1'
            },{
              applyName: '活动申请测试2',
              applyOwner: '申请人测试2',
              applyInfo: '申请描述2'
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
        this.lista = 2
        switch (id) {
          case 0:
            this.test = [{
              applyName: '活动申请测试2',
              applyOwner: '申请人测试2',
              applyInfo:'申请描述2'
            },{
              applyName: '活动申请测试3',
              applyOwner: '申请人测试3',
              applyInfo:'申请描述3'
            }]
            break
          case 1:
            this.test = [{
              applyName: '活动申请测试1',
              applyOwner: '申请人测试1',
              applyInfo:'申请描述1'
            },{
              applyName: '活动申请测试3',
              applyOwner: '申请人测试3',
              applyInfo:'申请描述3'
            }]
            break
          case 2:
            this.test = [{
              applyName: '活动申请测试1',
              applyOwner: '申请人测试1',
              applyInfo:'申请描述1'
            },{
              applyName: '活动申请测试2',
              applyOwner: '申请人测试2',
              applyInfo: '申请描述2'
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
    }
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
