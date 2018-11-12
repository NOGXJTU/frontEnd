import Vue from 'vue'
import Router from 'vue-router'
// import components
import home from '@/components/home'
import activity from '@/components/Activity/activity'
import forum from '@/components/Forum/forum'

// import resource from '../components/Resource/resource'
// import resourceVideoList from '../components/Resource/resouce-video-list'
// import resourceKnowledge from '../components/Resource/resource-knowleage'
// import resourceQuestionType from '../components/Resource/resource-questionType'
// import resourceSubjectDirect from '../components/Resource/resource-subjectDirect'
// import resourceVideo from '../components/Resource/resource-video'
// import resourceExperience from '../components/Resource/resource-experience'
// import resourceSchool from '../components/Resource/resource-school'
// import resourceSchoolSubject from '../components/Resource/resource-schoolSubject'

import user from '../components/User/user'
import login from '../components/login'
import register from '../components/register'
import NotFind from '../components/not-find'
import about from '../components/about'
import passwordModify from '../components/User/password-modify'
import passwordForget from '../components/User/password-forget'
import regulation from '../components/Regulation/regulation'
import activityInfo from '../components/Activity/activity-info'
import infoOthers from '../components/User/info-others'
import admin from '../components/Admin/admin'
import activityConfirm from '../components/User/activity_confirm'

//activity
import activityApply from '../components/Activity/activity-apply'

// organization
import organizationRegister from '../components/organization/organization-register'

//resource router

Vue.use(Router)

//首页
import index from '@/views/index/index'
//资源页面
import resource from '@/views/resource/index'
//资源二级界面
import VideoPlayer from '@/views/resource/secondary/VideoPlayer'
import DetailsList from '@/views/resource/secondary/DetailsList'
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
    component: activity
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
    component: about
  },
  {
    path: '/regulation',
    name: 'Regulation',
    component: regulation
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
  // {
  //   path: '/resource/resourceKnowledge',
  //   name: 'resourceKnowledge',
  //   component: resourceKnowledge
  // },
  // {
  //   path: '/resource/resourceQuestionType',
  //   name: 'resourceQuestionType',
  //   component: resourceQuestionType
  // },
  // {
  //   path: '/resource/resourceSubjectDirect',
  //   name: 'resourceSubjectDirect',
  //   component: resourceSubjectDirect
  // },
  // {
  //   path: '/resource/resourceVideoList',
  //   name: 'resourceVideoList',
  //   component: resourceVideoList
  // },
  // {
  //   path: '/resource/resourceExperience',
  //   name: 'resourceExperience',
  //   component: resourceExperience
  // },
  // {
  //   path: '/resource/resourceSchool',
  //   name: 'resourceSchool',
  //   component: resourceSchool
  // },
  // {
  //   path: '/resource/resourceSchoolSubject',
  //   name: 'resourceSchoolSubject',
  //   component: resourceSchoolSubject
  // },
  {
    path: '/activityConfirm',
    name: 'activityConfirm',
    component: activityConfirm
  },
  {
    path: '/activityApply',
    name: 'activityApply',
    component: activityApply
  },
  {
    path: '/organization/organizationRegister',
    name: 'organizationRegister',
    component: organizationRegister
  },
  ]
})
