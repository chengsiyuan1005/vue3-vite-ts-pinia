import axios from 'axios'

// 创建axios
const request = axios.create({
  baseURL: '', // baseUrl
  timeout: 30000,
  withCredentials: true, // sync with cookie
  // header
  headers: {
    'Content-Type': 'application/json',
    'token': '', // take token
    'X-Request-With': 'XMLHttpRequest'
  }
})

// request拦截器
request.interceptors.request.use(
  config => {
    // 获取本地token, 操作
    // let token = localStorage.getItem('x-auth-token')
    // if (token) {
      // 添加请求头
      // config.headers['Authorization'] = 'Bearer' + token
    // }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
request.interceptors.response.use(
  response => {
    // 操作响应数据
    return response.data
  },
  error => {
    // 操作响应错误
    return Promise.reject(error)
  }
)

export default request