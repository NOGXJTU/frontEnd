// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // import vue-router instant
import store from './store/index' // import Vuex instant

// import element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

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