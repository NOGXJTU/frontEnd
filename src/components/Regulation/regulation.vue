<template>
  <div>
    <el-container>
      <el-aside width="200px" class="sidebar">
        <!-- Aside content -->
        <ul class="menu-root">
          <li v-for="(title, index) in titles" :key="index" :class="{active : isActive[index]}">
            <div @click="handle_content(index),toggle_active(index)" class="item">{{title}}</div>
            <!-- <a ></a> -->
          </li>
        </ul>
      </el-aside>
      <el-container>
        <el-main>
          <!-- Main content -->
          <regulationContent :source="passage"></regulationContent>

          <!-- <vue-markdown :source="passage"></vue-markdown> -->
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import regulationContent from './regulation-content'
import Cha0 from '@/assets/regulations/Cha0.md'
import Cha1 from '@/assets/regulations/Cha1.md'
import Cha2 from '@/assets/regulations/Cha2.md'
import Cha3 from '@/assets/regulations/Cha3.md'
import Cha4 from '@/assets/regulations/Cha4.md'
import Cha5 from '@/assets/regulations/Cha5.md'
import Cha6 from '@/assets/regulations/Cha6.md'
import Cha7 from '@/assets/regulations/Cha7.md'

// import vueMarkdown from 'vue-markdown'

export default {
  name: 'regulation',
  data() {
    return {
      passage: Cha0,
      // titles: 目录，可以转成常量
      titles: ["纲要", "第一章", "第二章", "第三章", "第四章", "第五章", "第六章", "第七章"],
      // isActive:记录当前激活的目录
      isActive: [true, false, false, false, false, false, false, false]
    }
  },

  methods: {
    handle_content(index) {
      console.log(index);

      switch (index) {
        case 0:
          this.passage = Cha0
          break;
        case 1:
          this.passage = Cha1
          break;
        case 2:
          this.passage = Cha2
          break;
        case 3:
          this.passage = Cha3
          break;
        case 4:
          this.passage = Cha4
          break;
        case 5:
          this.passage = Cha5
          break;
        case 6:
          this.passage = Cha6
          break;
        case 7:
          this.passage = Cha7
          break;
        default:
          break;
      }
    },
    // 切换当前激活的目录项
    toggle_active(index) {
      for (let i = 0; i < this.isActive.length; i++) {
        this.$set(this.isActive, i, false)
      }
      this.$set(this.isActive, index, true)
    }
  },

  components: {
    // vueMarkdown,
    regulationContent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sidebar {
  border-right: 1px;
}

.menu-root * {
  font-size: 110%;
  color: #99cc99;
  list-style-type: none;
  margin: 0;
  line-height: 1.5em;
  padding-left: 0em;
}

.menu-root li {
  display: block;
  padding-bottom: 5px;
  padding: 10px;
}

.menu-root li:hover {
  background-color: rgba(57, 146, 235, 0.07);
}

.active {
  background-color: rgba(57, 146, 235, 0.07);
}

.item {
  text-align: center
}

</style>
