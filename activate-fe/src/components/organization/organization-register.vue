<template>
    <div>
      <el-card>
        <el-form>
          <el-form-item label="组织名称">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="活动类型">
            <el-select  placeholder="请选择活动区域">
              <el-option label="沙龙" value="shanghai"></el-option>
              <el-option label="类型2" value="beijing"></el-option>
              <el-option label="类型3" value="beijing"></el-option>
              <el-option label="类型4" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "organization-register"
    }
</script>

<style scoped>

</style>
