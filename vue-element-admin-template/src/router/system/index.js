import Layout from '@/views/layout/Layout'
import UserRouter from './user'

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
    ...UserRouter
  ]
}
