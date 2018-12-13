import Vue from 'vue'
import Router from 'vue-router'
import DealerHome from '@/components/dealer/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/dealer/home',
      component: DealerHome
    },
    {
      path: '/dealer/home',
      name: 'DealerHome',
      component: DealerHome
    }
  ]
})
