export default [
  {
    path: 'roleuser',
    component: () => import('@/views/system/roleuser/index'),
    name: 'RoleUserManager',
    meta: { title: 'roleUserManager', icon: 'peoples', roles: [] }
  }
]
