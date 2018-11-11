import Vue from 'vue'
import Router from 'vue-router'
// import components
import home from '@/components/home'
import activity from '@/components/Activity/activity'
import user from '../components/User/user'
import login from '../components/login'
import register from '../components/register'
import NotFind from '../components/not-find'
import about from '../components/about'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/activity',
      name: 'Activity',
      component: activity
    },
    {
      path: '/user',
      name: 'User',
      component: user,
      meta: {
        auth: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/404',
      name: 'NotFind',
      component: NotFind
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    }
  ]
})