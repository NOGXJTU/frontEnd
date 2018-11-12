<template>
  <div class="contact-information">
    <div class="information">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-row :type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="contact-icon">
                <img class="icon" src="../../assets/img_home/contact3.png" alt="">
              </div>
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              <div class="contact-infor">
                wangwangwang
              </div>
            </div>
            </el-col>
          </el-row>
        </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-row :type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="contact-icon">
                <img class="icon" src="../../assets/img_home/contact2.png" alt="">
              </div>
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              <div class="contact-infor">
                13323332333
              </div>
            </div>
            </el-col>
          </el-row>
        </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-row :type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple">
              <div class="contact-icon">
                <img class="icon" src="../../assets/img_home/contact3.png" alt="">
              </div>
            </div>
            </el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              <div class="contact-infor mail">
                wangwangwang@163.com
              </div>
            </div>
            </el-col>
          </el-row>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

  .grid-content {
    padding: 10px;
    border-radius: 4px;
    min-height: 6px;
  }
  .row-bg {
    padding: 10px 0;
  }

  .special .icon {
    width: 45px;
    height: 45px;
  }

  .activity .el-row {
    margin-top: 0px;
  }

  .contact-information {
    margin-left: 100px;
    margin-right: 100px;
  }

  .contact-icon {
    padding: 2px;
    width: 50px;
    height: 50px;
    border: 2px solid #3dac0ac4;
  }

  .contact-icon .icon {
    margin: 10px;
    width: 60%;
  }

  .contact-infor {
    text-align: left;
    margin: 20px 50px 20px 0px ;
  }

  .mail {
    margin: 0px 50px 20px 0px ;
  }

</style>
