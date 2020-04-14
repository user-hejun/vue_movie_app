import * as type from './mutation-types'

export default {
  namespaced: true,//这里是解决不同模块命名冲突的问题,但是所有数据都还在一个挂载点
   //内存数据状态
  state: {
    loading: true,
    movies: [],
    errorMessage: null,
    isLogin: false,
  },
  getters: {
    movies: state => state.movies,
    errorMessage: state => state.errorMessage,
    loading: state => state.loading,
    login: state => state.loagin
  },
 //与mutation通讯，可以异步操作
  actions: {
    [type.SEARCH_MOVIES_SUCCESS] (context, action) {
      context.commit(type.SEARCH_MOVIES_SUCCESS, action.payload)
    },
    [type.SEARCH_MOVIES_REQUEST] (context) {
      context.commit(type.SEARCH_MOVIES_REQUEST)
    },
    [type.SEARCH_MOVIES_FAILURE] (context, action) {
      context.commit(type.SEARCH_MOVIES_FAILURE, action)
    }
  },
  //唯一拥有更改内存数据的接口，此操作为同步
  mutations: {
    [type.SEARCH_MOVIES_REQUEST] (state) {
      state.loading = true;
      state.errorMessage = null;
    },
    [type.SEARCH_MOVIES_SUCCESS] (state, payload) {
      state.loading = false;
      state.movies = payload
    },
    [type.SEARCH_MOVIES_FAILURE] (state, payload) {
      state.loading = false,
      state.errorMessage = payload.error
      state.movies = []
    }
  }
}