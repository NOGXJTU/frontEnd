<template>
  <div class="activity">
    <div class="activity-title">
      近期活动
    </div>
    <el-row :gutter="20">
      <el-col :span="10"><div class="grid-content bg-purple">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://dummyimage.com/500x400" class="image">
          <div style="padding: 5px;">
            <span>{{this.activities[0].name}}</span>
            <div class="bottom clearfix">
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
      <el-col :span="7"><div class="grid-content bg-purple">
        <el-card :body-style="{ padding: '0px' }" class="top-activity">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>{{this.activities[1].name}}</span>
            <div class="bottom clearfix">
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>{{this.activities[2].name}}</span>
            <div class="bottom clearfix">
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
      <el-col :span="7"><div class="grid-content bg-purple">
        <el-card :body-style="{ padding: '0px' }" class="top-activity">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>{{this.activities[3].name}}</span>
            <div class="bottom clearfix">
            </div>
          </div>
        </el-card>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://dummyimage.com/130x80" class="image">
          <div style="padding: 2px;">
            <span>{{this.activities[4].name}}</span>
            <div class="bottom clearfix">
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {get_all_activity} from "@/api/api";

  export default {
    name: "Activity",
    data() {
      return {
        msg: "这里是主页",
        activities:[{
          beginTime: "",
          description: '',
          lasting: '',
          name: '正在加载中',
          ownerId: '',
          picUrl: '',
          place: '',
          type: ''
        },{
          beginTime: "string",
          description: 'string',
          lasting: 'string',
          name: '正在加载中',
          ownerId: 'string',
          picUrl: 'string',
          place: 'string',
          type: 'string'
        },{
          beginTime: "string",
          description: 'string',
          lasting: 'string',
          name: '正在加载中',
          ownerId: 'string',
          picUrl: 'string',
          place: 'string',
          type: 'string'
        },{
          beginTime: "string",
          description: 'string',
          lasting: 'string',
          name: '正在加载中',
          ownerId: 'string',
          picUrl: 'string',
          place: 'string',
          type: 'string'
        },{
          beginTime: "string",
          description: 'string',
          lasting: 'string',
          name: '正在加载中',
          ownerId: 'string',
          picUrl: 'string',
          place: 'string',
          type: 'string'
        }],
      }
    },
    methods:{
      get_all_activities(){
        get_all_activity()
          .then(res => {
            this.activities = res.data.slice(0,4)
          }).catch( e => {
          console.log(e.response.data)
        })
      }
    },
    mounted(){
      this.get_all_activities()
    }
  }
</script>

<style scoped>
  .grid-content {
    padding: 10px;
    border-radius: 4px;
    min-height: 6px;
  }
  .bottom {
    margin-top: 4px;
    line-height: 10px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .special .icon {
    width: 45px;
    height: 45px;
  }

  .activity {
    margin: 0 auto;
    width: 1200px;
  }

  .top-activity {
    margin-bottom: 12px
  }

  .activity-title {
    font-size: 30px;
    margin-bottom: 30px;
    color: #3dac0ac4;
    text-align: center;
  }

  .contact-icon .icon {
    margin: 10px;
    width: 60%;
  }

</style>
