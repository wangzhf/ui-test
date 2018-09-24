import { setToken, getToken } from '@/utils/auth'
import { login } from '@/api/login'

const user = {
  state: {
    name: '',
    token: getToken()
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    Login ({commit}, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password.trim()
      return new Promise((resolve, reject) => {
        login(username, password).then(response => {
          console.log(response)
          const data = response.data
          if (data) {
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            resolve()
          }
          let err = new Error('账户或密码错误')
          reject(err)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
