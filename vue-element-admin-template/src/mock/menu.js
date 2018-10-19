
const menus = [
  {
    id: 1,
    title: '首页',
    menuName: '首页',
    menuCode: 'dashBoard',
    type: 'menu',
    uri: '/dashboard',
    path: '/dashboard',
    icon: 'user',
    component: '/layout/Layout',
    parentId: null
  },
  {
    id: 2,
    title: '系统管理',
    menuName: '系统管理',
    menuCode: 'system',
    type: 'menu',
    uri: '/system',
    path: '/system',
    icon: 'user',
    component: '/layout/Layout',
    parentId: null,
    children: [
      {
        id: 3,
        title: '用户管理',
        menuName: '用户管理',
        menuCode: 'userManager',
        type: 'menu',
        uri: '/user',
        path: '/user',
        icon: 'user',
        component: '/system/user/index',
        parentId: 2
      },
      {
        id: 4,
        title: '角色管理',
        menuName: '角色管理',
        menuCode: 'roleManager',
        type: 'menu',
        uri: '/role',
        path: '/role',
        icon: 'user',
        component: '/system/role/index',
        parentId: 2
      },
      {
        id: 5,
        title: '资源管理',
        menuName: '资源管理',
        menuCode: 'resourceManager',
        type: 'menu',
        uri: '/resource',
        path: '/resource',
        icon: 'user',
        component: '/system/resource/index',
        parentId: 2
      },
      {
        id: 6,
        title: '角色用户管理',
        menuName: '角色用户管理',
        menuCode: 'roleUserManager',
        type: 'menu',
        uri: '/roleuser',
        path: '/roleuser',
        icon: 'user',
        component: '/system/roleuser/index',
        parentId: 2
      },
      {
        id: 7,
        title: '角色资源管理',
        menuName: '角色资源管理',
        menuCode: 'roleResourceManager',
        type: 'menu',
        uri: '/roleresource',
        path: '/roleresource',
        icon: 'user',
        component: '/system/roleresource/index',
        parentId: 2
      }
    ]
  }
]

export default {
  getAllMenu: config => {
    return menus
  }
}
