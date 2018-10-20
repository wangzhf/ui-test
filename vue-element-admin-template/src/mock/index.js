import Mock from 'mockjs'
import loginAPI from './login'
import userAPI from './user'
import roleAPI from './role'
import resourceAPI from './resource'
import roleuserAPI from './roleuser'
import roleresourceAPI from './roleresource'
import menuAPI from './menu'

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
// 获取用户角色
Mock.mock(/\/user\/role$/, 'post', roleAPI.getUserRoleList)
Mock.mock(/\/user\/role\/add/, 'post', roleAPI.addUserRole)

// 角色管理
Mock.mock(/\/role\/roles/, 'post', roleAPI.getRoleList)
Mock.mock(/\/role\/edit/, 'post', roleAPI.editRole)
Mock.mock(/\/role\/delete/, 'post', roleAPI.deleteRole)
Mock.mock(/\/role\/add/, 'post', roleAPI.addRole)
Mock.mock(/\/role\/batchDelete/, 'post', roleAPI.batchDelete)

// 资源管理
Mock.mock(/\/resource\/list/, 'post', resourceAPI.getReourceList)
Mock.mock(/\/resource\/update/, 'post', resourceAPI.editReource)
Mock.mock(/\/resource\/delete/, 'post', resourceAPI.deleteReource)
Mock.mock(/\/resource\/add/, 'post', resourceAPI.addReource)
Mock.mock(/\/resource\/batchDelete/, 'post', resourceAPI.batchDelete)

// 角色用户分配
Mock.mock(/\/roleuser\/add/, 'post', roleuserAPI.addRoleUser)

// 角色资源分配
Mock.mock(/\/roleresource\/add/, 'post', roleresourceAPI.addRoleResource)

// 菜单管理
Mock.mock(/\/menu\/list/, 'post', menuAPI.getAllMenu)

export default Mock
