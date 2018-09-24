import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'
import store from '../store'
import Layout from '@/views/layout/Layout'
import Home from '@/views/layout/Home'
import Like from '@/views/layout/Like'
import Vip from '@/views/layout/Vip'
import Me from '@/views/layout/Me'
import MarketType from '@/views/chaoshi/MarketType'
import Login from '@/views/me/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }, {
          path: '/like',
          name: 'like',
          component: Like
        }, {
          path: '/vip',
          name: 'vip',
          component: Vip
        }, {
          path: '/me',
          name: 'me',
          component: Me
        }
      ]
    }, {
      path: '/cs',
      name: 'chaoshi',
      component: MarketType
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

const blackList = ['/me']
router.beforeEach((to, from, next) => {
  if (blackList.indexOf(to.path) !== -1) {
    if (store.getters.token || getToken()) {
      next()
    } else {
      next({path: '/login', query: {redirect: to.path}})
    }
  } else {
    next()
  }
})

export default router
