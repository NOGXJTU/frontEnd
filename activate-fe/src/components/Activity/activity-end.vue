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
        <el-form label-width="100px">
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
            <el-input type="textarea":rows="5" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >提交申请</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "activity-end"
    }
</script>

<style scoped>
.activity-end-card{
  width: 80%;
  padding-left: 20%;
  padding-top: 3%;
}
</style>
