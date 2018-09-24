import axios from 'axios'
import { Toast } from 'mint-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: '/',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    Toast({
      message: error.message,
      position: 'bottom',
      duration: 5000
    })
    return Promise.reject(error)
  }
)

export default service
