import axios from 'axios'

// config axios
axios.defaults.baseURL = 'http://suilin.top:4399'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'application/json'
}

// axios.interceptors.request.use(
//   function(config){
//     console.log('发送 ' + config.method + ' 请求至：' + config.url)
//   },
//   function(error){
//     console.log('错误 ' + config.method + ' 请求至：' + config.url)
//   }
// )

// user-controller

export const request_login = params => {
  // return axios.post('/user/signIn', params);
  return axios({
    url: '/user/signIn',
    method: 'post',
    data: params,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
}

export const request_register = params => {
  return axios.post('/user/register', params);
}

export const logout = () => {
  return axios.put('/user/signOut');
}

export const get_user_info = () => {
  return axios.get('/user/userInfo');
}

export const get_user_info_by_id = params => {
  return axios.post('/user/userInfo', params);
}

export const modify_user_info = params => {
  return axios.post('/user/userInfo/Modify', params);
}

export const get_user_info_group = params => {
  return axios.post('/user/userInfoGroup', params);
}

export const is_super_user = params => {
  return axios.post('/user/signIn', params);
}

export const is_duplicate_email = params => {
  return axios.post('/user/duplicate/email', params);
}

export const is_duplicate_phone = params => {
  return axios.post('/user/duplicate/phone', params);
}

export const is_duplicate_username = params => {
  return axios.post('/user/duplicate/username', params);
}

export const verify_user_logged = params => {
  return axios.post('/user/passwordModify', params);
}



// activity-controller

export const generate_activity = params => {
  return axios.post('/activity/generate', params);
}

export const get_acticity_by_id = params => {
  return axios.post('/activity', params);
}

export const add_member = params => {
  return axios.post('/activity/addMember', params);
}

export const remove_member = params => {
  return axios.post('/activity/removeMember', params);
}

export const remove_member_group = params => {
  return axios.post('/activity/removeMember/Group', params);
}

export const quit_activity = params => {
  return axios.post('/activity/quit', params);
}

// todo to use get method?????
export const get_all_unfinished_activity_info = () => {
  return axios.get('/activity/all?finished=false');
}

export const delete_activity = params => {
  return axios.post('/activity/delete', params);
}

export const is_duplicate_activity = params => {
  return axios.post('/activity/duplicate', params);
}

export const modify_activity_info = params => {
  return axios.post('/activity/modify', params);
}

export const modify_activity_status = params => {
  return axios.post('/activity/status/modify', params);
}

export const transfer_acticity_leader = params => {
  return axios.post('/activity/transfer', params);
}


// email verify token controller

export const send_token = params => {
  return axios.post('/email/sendToken', params);
}

export const verify_token = params => {
  return axios.post('/email/tockenVerify', params);
}

export const modify_password_by_tocken = params => {
  return axios.post('/user/passwordModify', params);
}

export const forget_password_by_token = params => {
  return axios.post('/user/forget/passwordModify',params)
}

// application controller

export const send_application = params => {
  return axios.post('/application', params);
}

export const confirm_application = params => {
  return axios.post('/application/confirm', params);
}

export const refuse_application = params => {
  return axios.post('/application/refuse', params);
}

export const get_all_application_by_activity = params => {
  return axios.post('/application/getAllApp', params)
}

export const get_all_application_by_activity_with_status = params => {
  return axios.post('/application/getAllAppWithStatus', params);
}

 // 视频播放
export const video_play = params => {
  return axios.get('/example/example/' + params.id,params)
}

//获取所有视频
export const video_list = params => {
  return axios.get('/example/example')
}

//获取所有组织信息
// export const get_all_organization = params => {
//   return axios.get('/organization/getAllMsg')
// }

//组织注册表单提交
export const organization_register = params => {
  return axios.post('/organization/foundation/apply',params)
}

//根据ID获取组织信息
export const get_organization_by_Id = params => {
  return axios.get('/organization/'+params.organizationId,params)
}

//活动申请请求发送
export const activity_apply = params => {
  return axios.post('/activity/apply', params)
}

//活动结束上传资料
export const activity_finished_upload = params => {
  return axios.post('/activity/finished/upload',params)
}

// 资源

//学习经验
export const study_experience = params => {
  return axios.get('/experience/experience')
}

//学习指导
export const study_guidance = params => {
  return axios.get('/guidance/guidance')
}

//知识点
export const knowleadge_point = params => {
  return axios.get('/point/point')
}

//重点题型讲解
export const import_explain = params => {
  return axios.get('/point/point')
}

//典型例题解析
// export const typical_example = params => {
//   return axios.get('/example/example')
// }

// school
export const school_intro = params => {
  return axios.get('/school/school')
}

export const school_subject_intro =  params => {
  return axios.get('/subject/subject')
}


// 获取所有活动
export const get_all_activity = params => {
  return axios.get('/activity/activity')
}
//根据id批量获取
export const get_activity_by_many_id = params => {
  return axios.post('/activity/batch',params)
}
//主动退出参数
export const quit_acitvity = params => {
  return axios.post('/activity/quit',params)
}

//获取加入组织的申请
export const get_all_organization_apply_by_id = params => {
  return axios.get('/organization/apply/getAllAppWithId/',params)
}
//同意
export const agree_join_organization = params => {
  return axios.post('/organization/join/agree',params)
}
//拒绝
export const refuse_join_organization = params => {
  return axios.post('/organization/join/refuse',params)
}

//<<<<<<< HEAD
//获取
//export const get_all_organization = params => {
//  return axios.get('/organization/getAllMsg')
=======
//获取加入活动的申请
export const get_all_activity_apply_by_id = params => {
  return axios.post('/application/getAllApp',params)
}
//同意
export const agree_join_activity = params => {
  return axios.post('/application/confirm',params)
}
//拒绝
export const refuse_join_activity = params => {
  return axios.post('/application/refuse',params)
//>>>>>>> 2a497fe7dfb3c2c87c0ee677e84b5c27b74514e0
}
