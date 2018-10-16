export default [
  {
    path: 'roleresource',
    component: () => import('@/views/system/roleresource/index'),
    name: 'RoleResourceManager',
    meta: { title: 'roleResourceManager', icon: 'peoples', roles: [] }
  }
]
