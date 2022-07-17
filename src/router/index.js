import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/bjcj',
    name: 'Bjcj',
    component: () => import('../views/Bjcj.vue')
  },
  {
    path: '/xycj',
    name: 'Xycj',
    component: () => import('../views/Xycj.vue')
  },
  {
    path: '/xxcj',
    name: 'Xxcj',
    component: () => import('../views/Xxcj.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router