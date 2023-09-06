import axios from 'axios'
import {getCookie} from './cookie'
import { useRouter } from 'vue-router';
import router from '../router';

// 创建axios实例
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,// 所有的请求地址前缀部分(没有后端请求不用写)
    timeout: 20000, // 请求超时时间(毫秒)
    withCredentials: false,// 异步请求携带cookie
    // headers: {
    // 设置后端需要的传参类型
    // 'Content-Type': 'application/json',
    // 'token': x-auth-token',//一开始就要token
    // 'X-Requested-With': 'XMLHttpRequest',
    // },
})

// request拦截器
request.interceptors.request.use(
    config => {
        // 如果你要去localStor获取token,(如果你有)
        let token = getCookie('token')
        if (token) {
                // 添加请求头
                config.headers["Authorization"]="Bearer "+ token
        }
        // post
        if (config.method === 'post') {
            config.data = {
                ...config.data,
                _t: Date.parse(`${new Date()}`) // 时间戳
            }
        } else if (config.method === 'get') {
            config.params = {
                ...config.params,
                _t: Date.parse(`${new Date()}`) // 时间戳
            }
        }
        return config
    },
    error => {
        // 对请求错误做些什么
        Promise.reject(error)
    }
)

// response 拦截器
request.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response
    },
    error => {  
        // 对响应错误做点什么
        const errCode = error.response.status
        switch (errCode) {
            case 401: 
                // token过期
                alert('账号过期')
                router.push({name: 'login'})
                break;
        }
        return Promise.reject(error)
    }
)
export default request
