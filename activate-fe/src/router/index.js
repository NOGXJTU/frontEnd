import Vue from 'vue'
import Router from 'vue-router'


//resource router

Vue.use(Router)

//首页
import index from '@/views/index/index'
//资源页面
import resource from '@/views/resource/index'
//资源二级界面
import VideoPlayer from '@/views/resource/secondary/VideoPlayer'
import DetailsList from '@/views/resource/secondary/DetailsList'
//活动页面
import Activity from '@/views/activity/index'
import ActivityConfirm from '@/views/personal/content/ActivityConfirm'
import ActivityApply from '@/views/activity/secondary/thirdary/Apply'
import ActivityEnd from '@/views/activity/secondary/thirdary/End'
import ActivityInfo from '@/views/activity/secondary/Info'
//组织页面
import Organization from '@/views/organization/index'
import OrganizationRegister from '@/views/organization/secondary/Register'
import OrganizationInfo from '@/views/organization/secondary/Info'
//个人中心页面
import Personal from '@/views/personal/index'
import Other from '@/views/personal/Other'
//关于页面
import About from '@/views/about/About'
//章程页面
import Regulation from '@/views/regulation/index'
//用户模块
import Login from '@/common/user/Login'
import Register from '@/common/user/Register'
import PasswordModify from '@/common/user/PasswordModify'
import PasswordForget from '@/common/user/PasswordForget'
export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/activity/:activityId',
    name: 'ActivityInfo',
    component: ActivityInfo
  },
  {
    path: '/resource',
    name: 'Resource',
    component: resource
  },
  {
    path: '/resource/video/:videoId',
    name: 'VideoPlayer',
    component: VideoPlayer
  },
  {
    path: '/resource/details',
    name: 'DetailsList',
    component: DetailsList
  },
  {
    path: '/user',
    name: 'User',
    component: Personal,
    meta: {
      auth: true
    }
  },
  {
    path: '/user/:userId',
    name: 'Other',
    component: Other,
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/regulation',
    name: 'Regulation',
    component: Regulation
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/passwordModify',
    name: 'PasswordModify',
    component: PasswordModify,
    meta: {
      auth: true
    }
  },
  {
    path: '/passwordForget',
    name: 'PasswordForget',
    component: PasswordForget
  },
  {
    path: '/activityConfirm',
    name: 'ActivityConfirm',
    component: ActivityConfirm
  },
    {
      path: '/activityApply',
      name: 'ActivityApply',
      component: ActivityApply
    },
    {
      path: '/activityEnd',
      name: 'ActivityEnd',
      component: ActivityEnd
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    },
  {
    path: '/organization/organizationRegister',
    name: 'OrganizationRegister',
    component: OrganizationRegister
  },
    {
      path: '/organization/:organizationId',
      name: 'OrganizationInfo',
      component: OrganizationInfo
    },
  // {
  //   path: '/organization/organizationList',
  //   name: 'organizationList',
  //   component: OrganizationList
  // }
  ]
})
