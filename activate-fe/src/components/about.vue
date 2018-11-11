<template>
  <div>
    <el-container>
      <el-header>
        <!-- Header content -->
        <h1>
          关于我们
        </h1>
      </el-header>
      <el-main>
        <!-- Main content -->        
        <el-card class="box-card" >       
          <div slot="header" class="clearfix">
            <span>历程概述</span>
          </div>
          <div>
            <p>2017年5月12日，筑梦者第一支分队凉州区志愿者协会筑梦者志愿服务队（原名“筑梦者支教服务队”，简称筑梦者（武威））
            在共青团甘肃省武威市凉州区委的支持下正式成立，同年7月即启动开展第一期义教活动。2018年2月1日，筑梦者第二支分队新泰
            好人公益志愿者协会筑梦者支教服务队（简称筑梦者（新泰））在山东省新泰市成立，这标志筑梦者的全国化发展迈出了稳健的第一步。</p>
            <p>自从创立以来，筑梦者吸引来自清华、北大、复旦等985/211名校共71名常务志愿者的加入，在甘肃武威和山东新泰，两地三期的义教先后
            为188名中小学生提供了近4000时长的义教服务，义教的内容包括文化课辅导和特色兴趣课教学，兴趣课囊括话剧、声乐、器乐、舞蹈、团队
            训练、微科创等许多方面。</p>
            <p>除此之外，筑梦者还开展了公益思想沙龙、公益文艺晚会等活动，产生了良好的社会效应。在哈尔滨，筑梦者合作加入美丽中国
            与英语流利说合办的“你学英语我捐课”活动，鼓励哈尔滨工业大学的学生用学英语的方式为西部山区捐课2000余节，获得极大反响。</p>
          </div>
        </el-card>
        <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <span>成员概况</span>
          </div>
          <div>
            <p>筑梦者义教组织目前在全国拥有甘肃武威、山东新泰两个分队，共有73名常务成员，成员大多来自985、211重点大学，且都是各自专业的佼佼者，
            除了具备较强的学习能力，成员们基本都有丰富的学生工作、志愿服务经验，这些都是筑梦者优质教学质量的保证。</p>
            <p>筑梦者义教组织会随着发展不断合理纳新，计划每年两次（具体操作流程见“项目筹备流程”与附件），
            持续输入新鲜血液，以期在未来惠及更广地区和更多学生。</p>
          </div>
        </el-card>
        <el-card class="box-card" >
          <div slot="header" class="clearfix">
            <span>联系方式</span>
          </div>
          <div>
            <p>邮箱 : 1151329520@qq.com</p>
            <p>电话 : 13720613096 </p>
          </div>
        </el-card>
      </el-main>
       
    </el-container>
<vue-particles color="#dedede">  </vue-particles> 
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      msg: "这里是about"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#particles-js {
  position: absolute;
  background-size: cover;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 0;
}
 

h1 {
  font-size: 25px;
  margin-left: 250px;
}

span {
  font-size: 20px;
}

.box-card {
  margin: 10px 250px 100px 250px;
}
</style>
