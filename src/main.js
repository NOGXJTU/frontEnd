// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // import vue-router instant
import store from './store/index' // import Vuex instant

// import jquery from file
import '@/assets/jquery'
// import bootstrap 有点问题，不要全局引入，应该在文件内引入
// import 'bootstrap/bootstrap.js'
// import 'bootstrap/bootstrap.css'

// import element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// import vue-particles
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = true

/* router auth */
router.beforeEach(function(to, from, next){
  console.log(store.state.isLogged,to.path)
  
  let {meta} = to
  let {auth = false} = meta
  if(!store.state.isLogged && auth==true){
    next('/login')
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})