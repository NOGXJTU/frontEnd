import axios from 'axios'

// config axios
axios.defaults.baseURL = 'http://45.40.196.220:8080'
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
export const get_all_organization = params => {
  return axios.get('/organization/getAllMsg')
}

//组织注册表单提交
export const organization_register = params => {
  return axios.post('/organization/foundation/apply',params)
}

//根据ID获取组织信息
export const get_organization_by_Id = params => {
  return axios.get('/organization/{id}')
}
