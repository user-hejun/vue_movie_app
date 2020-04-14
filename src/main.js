import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from "axios"
import store from '@/store'
import router from '@/router/permission'
import Filters from '@/filters'
import Directives from '@/directives'
import 'element-ui/lib/theme-chalk/index.css'
import '@/mock'

Vue.use(Filters)
Vue.use(Directives)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
