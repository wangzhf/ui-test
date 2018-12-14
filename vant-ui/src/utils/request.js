import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 0 // request timeout,0: no timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // TODO 此处对请求做统一处理
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // TODO 此处对响应结果统一处理
    return response
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
