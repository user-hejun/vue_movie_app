import { router } from './index'

router.beforeEach((to, from, next) => {
  console.log('sss', from, to)
  if(to.meta.isLogin) {
    let token = localStorage.getItem('token');
    if(token) {
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else {
    next();
  }
})

router.afterEach((to) => {
  //these hooks do not get a next function and cannot affect the navigation}
  document.title = to.name
})

export default router