<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动</el-breadcrumb-item>
        <el-breadcrumb-item>活动完结</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="activity-end-card">
      <el-card>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="确认活动 ID">
            <el-input type="text" v-model="form.activityId"></el-input>
          </el-form-item>
          <el-form-item label="活动完结图片">
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
          <el-form-item label="活动完结总结">
            <el-input type="textarea":rows="5" v-model="form.comment"></el-input>
          </el-form-item>
          <el-form-item label="信息确认">
            <el-button type="primary"  @click="get_picUrl">确认</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="handle_register">提交申请</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {activity_finished_upload} from "@/api/api";

  export default {
    name: "End",
    data(){
      return{
        fileList:[{
          name:'default.jpg',
          url:'https://pic1.zhimg.com/80/v2-775a3c94e42570b5515567afb54f0504_hd.jpg'
        }],
        form:{
          activityId:'',
          comment:'',
          pictures:'',
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
      get_picUrl(){
        this.form.pictures = this.fileList[0].url
      },
      handle_register() {
        this.$refs['form'].validate(
          (valid) => {
            if (valid) {
              activity_finished_upload(this.form)
                .then(res => {
                  // send success message
                  this.$message({
                    message: '提交成功！请等待管理员审核',
                    type: 'success',
                    showClose: true
                  })
                  this.$router.push('/activity')
                }).catch(e => {
                // send fail message
                this.$message({
                  message: '提交失败，请检查提交材料',
                  type: 'error',
                  showClose: true
                })
                console.log("error! End.vue", e.response);
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
    }
  }
</script>

<style scoped>
  .activity-end-card{
    width: 80%;
    padding-left: 20%;
    padding-top: 3%;
  }
</style>
