import Mock from 'mockjs'

let menuList = [
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
    usable: 1,
    sort: 20,
    remarks: '',
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
    usable: 1,
    sort: 20,
    remarks: '',
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
        usable: 1,
        sort: 20,
        remarks: '',
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
        usable: 1,
        sort: 20,
        remarks: '',
        parentId: 2
      },
      {
        id: 11,
        title: '菜单管理',
        menuName: '菜单管理',
        menuCode: 'menuManager',
        type: 'menu',
        uri: '/menu',
        path: '/menu',
        icon: 'user',
        component: '/system/menu/index',
        usable: 1,
        sort: 20,
        remarks: '',
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
        usable: 1,
        sort: 20,
        remarks: '',
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
        usable: 1,
        sort: 20,
        remarks: '',
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
        usable: 1,
        sort: 20,
        remarks: '',
        parentId: 2
      },
      {
        id: 8,
        title: '子菜单测试',
        menuName: '子菜单测试',
        menuCode: 'childMenu',
        type: 'menu',
        uri: '/childMenu',
        path: '/childMenu',
        icon: 'user',
        component: '/system/childMenu/index',
        usable: 1,
        sort: 20,
        remarks: '',
        parentId: 2,
        children: [
          {
            id: 9,
            title: '子菜单测试2',
            menuName: '子菜单测试2',
            menuCode: 'childMenu2',
            type: 'menu',
            uri: '/childMenu2',
            path: '/childMenu2',
            icon: 'user',
            component: '/system/childMenu/childMenu2/index',
            usable: 1,
            sort: 20,
            remarks: '',
            parentId: 8
          },
          {
            id: 10,
            title: '子菜单测试3',
            menuName: '子菜单测试3',
            menuCode: 'childMenu3',
            type: 'menu',
            uri: '/childMenu3',
            path: '/childMenu3',
            icon: 'user',
            component: '/system/childMenu/childMenu2/child3',
            usable: 1,
            sort: 20,
            remarks: '',
            parentId: 8
          }
        ]
      }
    ]
  }
]

// 存储角色菜单对应关系
const roleMenus = [{ id: 1, menus: [1] }]

export default {
  getAllMenu: config => {
    return menuList
  },
  editMenu: config => {
    const param = JSON.parse(config.body)
    menuList = updateList(param, menuList)
    return menuList
  },
  deleteMenu: config => {
    const { id } = JSON.parse(config.body)
    deleteList(id, menuList)
    return id
  },
  addMenu: config => {
    const param = JSON.parse(config.body)
    const minStep = Mock.Random.integer(1000)
    const newId = Mock.mock({ 'id|+1': minStep }).id
    param.id = newId
    menuList = addList(param, menuList)
    return param
  },
  batchDelete: config => {
    const { ids } = JSON.parse(config.body)
    const idArr = ids.split(',')
    for (let i = 0; i < idArr.length; i++) {
      deleteList(idArr[i], menuList)
    }
    return ids
  },

  getRoleMenuList: config => {
    console.log('here ?')
    const data = JSON.parse(config.body) || {}
    const id = data.id
    const ret = {}
    if (id) {
      roleMenus.filter(item => {
        if (id === item.id) {
          ret.menus = item.menus
        }
      })
    }
    ret.allMenus = menuList
    return ret
  },

  addRoleMenu: config => {
    console.log('add role menu')
    console.log(config)
    const data = JSON.parse(config.body) || {}
    console.log(data)
    const menus = data.menus || []
    const id = data.id
    let match = false
    roleMenus.filter(roleMenu => {
      if (roleMenu.id === id) {
        roleMenu.menus = menus
        match = true
      }
    })
    if (!match) {
      menuList.push({
        id,
        menus
      })
    }
    console.log('after add: ')
    console.log(menuList)
  }
}

function deleteList(id, arr) {
  for (let i = 0; i < arr.length; i++) {
    const tar = arr[i]
    if (id === tar.id) {
      arr.splice(i, 1)
      return arr
    } else {
      if (tar.children && tar.children.length > 0) {
        const tmp = deleteList(id, tar.children)
        arr[i].children = tmp
        return arr
      }
    }
  }
  return []
}

function addList(obj, arr) {
  for (let i = 0; i < arr.length; i++) {
    const tar = arr[i]
    if (obj.parentId === tar.id) {
      if (tar.children && tar.children.length > 0) {
        tar.children.push(obj)
      } else {
        tar.children = [obj]
      }
      return arr
    } else {
      if (tar.children && tar.children.length > 0) {
        const tmp = addList(obj, tar.children)
        arr[i].children = tmp
        return arr
      }
    }
  }
  return []
}

function updateList(obj, arr) {
  for (let i = 0; i < arr.length; i++) {
    const tar = arr[i]
    if (obj.id === tar.id) {
      arr[i] = obj
      return arr
    } else {
      if (tar.children && tar.children.length > 0) {
        const tmp = updateList(obj, tar.children)
        arr[i].children = tmp
        return arr
      }
    }
  }
  return []
}
