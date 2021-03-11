import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../components/Blog/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/admin',
    name: 'Gestion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gestion" */ '../components/Gestion/Gestion.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../components/Login/Login.vue')
  },
  {
    path: '/post/:id',
    name: 'SinglePoste',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "post" */ '../components/Blog/SingleBlog.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "post" */ '../components/Login/Register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    if(localStorage.getItem('connectedUser') === null){
      alert('Vous devez être connecté en tant qu\'administrateur pour accéder à cette page!')
      next({
        name: "Login"
        })
    }else if(JSON.parse(localStorage.getItem('connectedUser')).email !== "admin"){
      alert('Vous devez être connecté en tant qu\'administrateur pour accéder à cette page !')
      next({
        name: "Login"
      })  //vérification des données du local storage pour vérif si utilisateur connecté / utilisateur = admin
    }else{
      next()
    }
  }else {
    next()
  }
})//étapes de vérification qui s'applique à toutes les routes ayant comme param "meta: requiresAuth à true" (donc seulement la page admin)

export default router
