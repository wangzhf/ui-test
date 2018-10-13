export default [
  {
    path: 'users',
    component: () => import('@/views/system/user/index'),
    name: 'UserManager',
    meta: { title: 'userManager', icon: 'peoples', roles: [] }
  },
  {
    path: 'roles',
    component: () => import('@/views/system/role/index'),
    name: 'RoleManager',
    meta: { title: 'roleManager', icon: 'people', roles: [] }
  }
]
