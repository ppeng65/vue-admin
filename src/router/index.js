import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const requireApi = require.context('.', false, /\.js$/)
const routesLists = []
requireApi.keys().forEach(item => {
  if (item === './index.js') {
    return
  }
  routesLists.push(...requireApi(item).default)
})

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/index/index.vue')
      },
      {
        path: 'pageA',
        name: 'PageA',
        component: () => import('../views/pageA/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/404',
    name: 'Error',
    component: () => import('../views/error/index.vue')
  },
  ...routesLists,
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
