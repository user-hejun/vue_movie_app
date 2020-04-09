import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/permission'
import filters from '@/filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
