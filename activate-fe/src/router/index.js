import Vue from 'vue'
import Router from 'vue-router'

import NotFind from '../components/not-find'
import activityInfo from '../components/Activity/activity-info'
import infoOthers from '../components/User/info-others'
import admin from '../components/Admin/admin'
import activityConfirm from '../components/User/activity_confirm'

//activity
import activityApply from '../components/Activity/activity-apply'
import activityEnd from '../components/Activity/activity-end'

// organization
import organization from '../components/organization/organization'
import organizationRegister from '../components/organization/organization-register'
import organizationInfo from '../components/organization/organization-info'
import organizationList from '../components/organization/organization-list'

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
//个人中心页面
import Personal from '@/views/personal/index'
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
    path: '/admin',
    name: 'Admin',
    component: admin
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/activity/:activityId',
    name: 'ActivityInfo',
    component: activityInfo
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
    name: 'InfoOthers',
    component: infoOthers,
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
    path: '/404',
    name: 'NotFind',
    component: NotFind
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
    name: 'activityConfirm',
    component: activityConfirm
  },

//   {
//     path: '/activityApply',
//     name: 'activityApply',
//     component: activityApply
//   },

    {
      path: '/activityApply',
      name: 'activityApply',
      component: activityApply
    },
    {
      path: '/activityEnd',
      name: 'activityEnd',
      component: activityEnd
    },
    {
      path: '/organization',
      name: 'organization',
      component: organization
    },
  // {
  //   path: '/organization/:organizationId',
  //   name: 'organizationInfo',
  //   component: organizationInfo
  // },
  {
    path: '/organization/organizationRegister',
    name: 'organizationRegister',
    component: organizationRegister
  },
  {
    path: '/organization/organizationList',
    name: 'organizationList',
    component: organizationList
  },

  ]
})
