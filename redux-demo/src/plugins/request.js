import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://tz.zfgc.cn', // url = base url + request url
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status === 'success') {
      return res.data ? JSON.parse(res.data) : res.data
    } else {
      return Promise.reject(res.msg)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
