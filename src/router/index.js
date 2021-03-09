import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../components/Blog/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/gestion',
    name: 'Gestion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gestion" */ '../components/Gestion/Gestion.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../components/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
