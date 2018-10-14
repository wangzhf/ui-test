export default [
  {
    path: 'resource',
    component: () => import('@/views/system/resource/index'),
    name: 'ResourceManager',
    meta: { title: 'resourceManager', icon: 'peoples', roles: [] }
  }
]
