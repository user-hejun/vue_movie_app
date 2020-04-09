import { router } from './index'

router.beforeEach((to, from, next) => {
  if(to.meta.isLogin) {
    let token = localStorage.getItem('token');
    if(token) {
      console.log('token', token);
    }else {
      next({
        path: '/login'
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