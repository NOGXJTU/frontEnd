// get data
import axios from 'axios'

export const request_login = params => {
  return axios
    .post('http://45.40.196.220:8080/user/signIn', params)
    .then(
      res => res.data
    ).catch(e => {
      console.log(e)
    })
}