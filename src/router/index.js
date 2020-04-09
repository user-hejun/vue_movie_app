import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home'
// import Login from '@/views/Login'
const Home = () => import(/* webpackChunkName: 'Home' */'@/views/Home') // 懒加载
const Login = () => import(/* webpackChunkName: 'Login' */'@/views/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: r => require.ensure([], () => r(require('@/views/Home')), 'home'), //按需加载
    component: Home,
    name: 'Home',
    meta: {
      isLogin: false
    }
  },
  {
    path: '/login',
    // component: r => require.ensure([], () => r(require('@/views/Login')), 'home'),
    component: Login,
    name: 'Login'
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes,
})

