import Layout from '@/views/layout/Layout'
import UserRouter from './user'
import ResourceRouter from './resource'

export default {
  path: '/system',
  component: Layout,
  redirect: 'noredirect',
  alwaysShow: true,
  name: 'System',
  meta: {
    title: 'system',
    icon: 'user'
  },
  children: [
    ...UserRouter,
    ...ResourceRouter
  ]
}