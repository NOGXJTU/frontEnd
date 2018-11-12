<template>
  <div class="map">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="12"><div class="grid-content bg-purple">
          <img class="chinese-map" src="../../assets/img_home/map.png">
        </div>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <div class="map-caption">
            <div class="map-caption-title">
              we need your help
            </div>
            <div class="map-caption-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis nulla eligendi! Debitis blanditiis magnam asperiores velit commodi iusto fugiat repellat reiciendis nobis deserunt ut, optio repudiandae, incidunt, odio ipsa.
            </div>
          </div>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Map"
    }
</script>

<style scoped>
  .grid-content {
    padding: 10px;
    border-radius: 4px;
    min-height: 6px;
  }

  .special .icon {
    width: 45px;
    height: 45px;
  }

  .activity .el-row {
    margin-top: 0px;
  }

  .map {
    background-color: #003366;
    min-height: 1px;
  }

  .content {
    margin-left: 150px;
    margin-right: 150px;
  }

  .chinese-map {
    width: 70% ;
  }

  .map-caption {
    margin: 50px  60px ;
    color: rgb(241, 236, 250);
  }

  .map-caption-title {
    font-size: 24px;
  }

  .contact-icon .icon {
    margin: 10px;
    width: 60%;
  }
</style>
