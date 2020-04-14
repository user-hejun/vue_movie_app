import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: 'Home' */'@/views/Home') // 懒加载
const Login = () => import(/* webpackChunkName: 'Login' */'@/views/Login')
const About = () => import(/* webpackChunkName: 'About' */'@/views/About')
const Notfind = () => import(/* webpackChunkName: 'About' */'@/views/404')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component: r => require.ensure([], () => r(require('@/views/Home')), 'home'), //按需加载
    component: Home,
    name: 'Home',
    meta: {
      isLogin: true
    }
  },
  {
    path: '/login',
    // component: r => require.ensure([], () => r(require('@/views/Login')), 'home'),
    component: Login,
    name: 'Login'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  { path: '*', component: Notfind }
]

export const router = new VueRouter({
  mode: 'history',
  routes,
})

