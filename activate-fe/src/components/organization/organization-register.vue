<template>
  <div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>组织</el-breadcrumb-item>
        <el-breadcrumb-item>组织注册</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="organization-register-card">
      <el-card>
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
          <el-form-item prop="name" label="组织名称">
            <el-input type="text" v-model="form.name" placeholder=""></el-input>
          </el-form-item>
          <!--<el-form-item prop="leaderId" label="组织领导">-->
            <!--<el-input type="text" v-model="form.leaderId" placeholder="申请人为该组织领导（申请人输入自己ID）"></el-input>-->
          <!--</el-form-item>-->
          <el-form-item prop="location" label="所在地点">
            <el-input type="text" v-model="form.location" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="description" label="组织简介">
            <el-input type="textarea" rows="3" v-model="form.description" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="applyDescription" label="组织申请辞">
            <el-input type="textarea":rows="3" v-model="form.applyDescription" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="logoUrl" label="组织logo">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传<i class="el-icon-upload el-icon--right"></i></el-button>
              <div slot="tip" class="el-upload__tip">若组织已有logo，请删除下方默认logo并选择自己的logo（只能上传jpg/png文件，且不超过500kb）</div>
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
import { organization_register } from "../../api/api";
import { mapState } from 'vuex'

export default {
        name: "organization-register",
      data(){
          return{
            fileList:[{
              name:'default.jpg',
              url:'https://pic1.zhimg.com/80/v2-775a3c94e42570b5515567afb54f0504_hd.jpg'
            }
            ],
            form:{
              name:'',
              leaderId:'',
              location:'',
              description:'',
              applyDescription:'',
              logoUrl:this.fileList,
            },
            rules:{
              name: [
                { required: true, message: '请输入组织名称', trigger: 'blur' },
                { min: 2, max:20, message: '名称长度介于2到20之间', trigger: 'blur' }
              ],
              leaderId: [
                { required:true , message: '请输入组织领导Id', trigger: 'blur'}
              ],
              location: [
                { required:true , message: '请输入组织位置', trigger: 'blur'}
              ],
              description: [
                { required:true , message: '请输入组织简介', trigger: 'blur'}
              ],
              applyDescription: [
                { required:true , message: '请输入组织申请描述', trigger: 'blur'}
              ],
              logoUrl: [
                { required:true , message: 'Logo Url', trigger: 'blur'}
              ],
            }
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
        getImgUrl(){
          if (this.fileList != null){
            this.form.logoUrl = this.fileList[0].url;
          }
          console.log(this.fileList[0].url)
        },
        getCurrentUserId(){
          this.form.leaderId = this.userInfo.id;
          console.log(this.userInfo.id)
        },
        handle_register() {
          this.$refs['form'].validate(
            (valid) => {
              if (valid) {
                organization_register(this.form)
                  .then(res => {
                    // send success message
                    this.$message({
                      message: '申请成功！ 请等待管理员审核',
                      type: 'success',
                      showClose: true
                    })
                    this.$router.push('/organization')
                  }).catch(e => {
                  // send fail message
                  this.$message({
                    message: '申请失败！请检查输入信息',
                    type: 'error',
                    showClose: true
                  })
                  console.log("error! organization-register.vue", e.response);
                })
              } else {
                this.$alert('请正确输入', '警告', {
                  confirmButtonText: '确定',
                  type: 'warning'
                })
              }
            }
          )
        }
      },
  mounted(){
    this.getImgUrl();
    this.getCurrentUserId()
    console.log(this.userInfo)
    // console.log(this.userInfo)
  },
  computed: {
    ...mapState(['isLogged']),
      ...mapState(['userInfo'])
  }
    }
</script>

<style scoped>
.organization-register-card{
  padding-left: 18%;
  width: 80%;
}
</style>
