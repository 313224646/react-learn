import request from '../plugins/request'

export function fetchUsers(query) {
  return request({
    url: '/fetchUser',
    method: 'get',
    params: query
  })
}

export function fetchBaseFiles(query) {
  return request({
    url: '/f/tz/yjFile/baseFiles',
    method: 'get',
    params: query
  })
}