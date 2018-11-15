import Vue from 'vue'
import Router from 'vue-router'

// import activity from '@/components/Activity/activity'
import forum from '@/components/Forum/forum'

import user from '../components/User/user'
import login from '../components/login'
import register from '../components/register'
import NotFind from '../components/not-find'
import passwordModify from '../components/User/password-modify'
import passwordForget from '../components/User/password-forget'
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
//关于页面
import About from '@/views/about/About'
//章程页面
import Regulation from '@/views/regulation/index'
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
    path: '/forum',
    name: 'Forum',
    component: forum
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
    component: user,
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
    component: login
  },
  {
    path: '/register',
    name: 'Register',
    component: register
  },
  {
    path: '/passwordModify',
    name: 'PasswordModify',
    component: passwordModify,
    meta: {
      auth: true
    }
  },
  {
    path: '/passwordForget',
    name: 'PasswordForget',
    component: passwordForget
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
