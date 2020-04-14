import * as type from './mutation-types'
export default {
  //这里是解决不同模块命名冲突的问题,但是所有数据都还在一个挂载点
  namespaced: true,
  state: {
    userName: '',
    token: ''
  },
  mutations: {
    [type.SET_USER_INFO](state, payload) {
      localStorage.setItem("token", payload.token);
      state.userName = payload.userName
      state.token = payload.token
    }
  },
  actions: {
    [type.SET_USER_INFO](context, action) {
      context.commit(type.SET_USER_INFO, action)
    }
  }
}