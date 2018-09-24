import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'
import store from '../store'

import Layout from '@/views/layout/Layout'
import Home from '@/views/home/Home'
import Category from '@/views/category/Category'
import Find from '@/views/find/Find'
import ShopCart from '@/views/shopcart/ShopCart'
import Me from '@/views/me/Me'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/category',
          name: 'Category',
          component: Category
        },
        {
          path: '/find',
          name: 'Find',
          component: Find
        },
        {
          path: '/shopcart',
          name: 'ShopCart',
          component: ShopCart
        },
        {
          path: '/me',
          name: 'Me',
          component: Me
        }
      ]
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
