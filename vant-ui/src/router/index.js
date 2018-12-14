import Vue from 'vue'
import Router from 'vue-router'
import DealerHome from '@/views/dealer/Home'
import ClaimProgress from '@/views/dealer/claimProgress'

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
    },
    {
      path: '/dealer/claimProgress',
      name: 'ClaimProgress',
      component: ClaimProgress
    }
  ]
})
