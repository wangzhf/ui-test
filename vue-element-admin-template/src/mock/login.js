import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    menus: [
      {
        menuCode: 'dashboard',
        menuName: '首页',
        method: 'GET',
        type: 'menu',
        uri: '/dashboard'
      },
      {
        menuCode: 'system',
        menuName: '系统管理',
        method: 'GET',
        type: 'menu',
        uri: '/system'
      },
      {
        menuCode: 'userManager',
        menuName: '用户管理',
        method: 'GET',
        type: 'menu',
        uri: '/user'
      },
      {
        menuCode: 'roleManager',
        menuName: '角色管理',
        method: 'GET',
        type: 'menu',
        uri: '/role'
      },
      {
        menuCode: 'resourceManager',
        menuName: '资源管理',
        method: 'GET',
        type: 'menu',
        uri: '/resource'
      },
      {
        menuCode: 'roleUserManager',
        menuName: '角色用户管理',
        method: 'GET',
        type: 'menu',
        uri: '/roleuser'
      },
      {
        menuCode: 'roleResourceManager',
        menuName: '角色资源管理',
        method: 'GET',
        type: 'menu',
        uri: '/roleresource'
      }
    ]
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
    menus: [
      {
        menuCode: 'dashboard',
        menuName: '首页',
        method: 'GET',
        type: 'menu',
        uri: '/dashboard'
      }
    ]
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
