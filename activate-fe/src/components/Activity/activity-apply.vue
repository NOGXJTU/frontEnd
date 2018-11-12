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
          <el-form label-width="100px">
            <el-form-item label="活动名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="申请组织">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动队长">
              <!--先放一放，问题很大-->
              <el-input></el-input>
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
                  v-model="startTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="持续时间" >
              <el-input placeholder="请按格式输入，例：'15天'"></el-input>
            </el-form-item>
            <el-form-item label="所在地点">
              <el-input ></el-input>
            </el-form-item>
            <el-form-item label="活动简介">
              <el-input type="textarea":rows="3" ></el-input>
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
              <el-button type="primary" >提交申请</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>

    </div>
</template>

<script>
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

          }
      }

    }
</script>

<style scoped>
.activity-apply-card{
  width: 80%;
  padding-left: 20%;
}
</style>
