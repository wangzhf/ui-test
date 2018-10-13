import Mock from 'mockjs'
import loginAPI from './login'
import userAPI from './user'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 用户信息
Mock.mock(/\/user\/userList/, 'post', userAPI.getUserList)
Mock.mock(/\/user\/edit/, 'post', userAPI.editUser)
Mock.mock(/\/user\/delete/, 'post', userAPI.deleteUser)
Mock.mock(/\/user\/add/, 'post', userAPI.addUser)
Mock.mock(/\/user\/batchDelete/, 'post', userAPI.batchDelete)
export default Mock
