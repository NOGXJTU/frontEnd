<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动</el-breadcrumb-item>
        <el-breadcrumb-item>活动申请</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="activity-apply-card">
      <el-card>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="活动名称">
            <el-input type="text" v-model="form.name" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="申请组织">
            <el-input type="text" v-model="form.organizationId" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="活动队长">
            <!--先放一放，问题很大-->
            <el-input type="text" v-model="form.leaderId" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="活动类型">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="起始时间">
            <div class="clock">
              <el-date-picker
                v-model="form.beginTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="持续时间" >
            <el-input type="text" v-model="form.lasting" placeholder="请按格式输入，例：'15天'"></el-input>
          </el-form-item>
          <el-form-item label="所在地点">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="活动简介">
            <el-input type="textarea":rows="3" v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="活动起始图片">
            <el-upload
              class="upload-demo"
              action=""
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传<i class="el-icon-upload el-icon--right"></i></el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handle_register">提交申请</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {activity_apply} from "@/api/api";

  export default {
    name: "activity-apply",
    data(){
      return {
        options: [{
          value: '0',
          label: '文化课'
        }, {
          value: '1',
          label: '兴趣课'
        }, {
          value: '2',
          label: '思想沙龙'
        }, {
          value: '3',
          label: '公益晚会'
        }, {
          value: '4',
          label: '其他'
        }],
        value: '',
        startTime:'',
        fileList:[{
          name:'default.jpg',
          url:'https://pic1.zhimg.com/80/v2-775a3c94e42570b5515567afb54f0504_hd.jpg'
        }
        ],
        form:{
          name:'',
          organizationId:'',
          ownerId:'',
          type:this.value,
          beginTime:'',
          lasting:'',
          place:'',
          description:'',
          picUrl:this.fileList[0].url,
        },

      }
    },
    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handle_register() {
        this.$refs['form'].validate(
          (valid) => {
            if (valid) {
              activity_apply(this.form)
                .then(res => {
                  // send success message
                  this.$message({
                    message: '申请成功！请等待管理员审核',
                    type: 'success',
                    showClose: true
                  })
                  this.$router.push('/activity')
                }).catch(e => {
                // send fail message
                this.$message({
                  message: '申请失败',
                  type: 'error',
                  showClose: true
                })
                console.log("error! activity-apply.vue", e.response);
              })
            } else {
              this.$alert('请正确输入', '警告', {
                confirmButtonText: '确定',
                type: 'warning'
              })
            }
          }
        )
      },
    },

  }
</script>

<style scoped>
  .activity-apply-card{
    width: 80%;
    padding-left: 20%;
  }
</style>
