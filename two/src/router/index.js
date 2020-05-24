import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { fullPath } = to;
  if(!localStorage.getItem('token') && fullPath !== '/login'){
    next('/login');
  }else {
    next();
  }
})

export default router
