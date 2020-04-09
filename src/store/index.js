import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
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
    'SEARCH_MOVIES_SUCCESS' (context, action) {
      context.commit('SEARCH_MOVIES_SUCCESS', action.payload)
    },
    'SEARCH_MOVIES_REQUEST' (context) {
      context.commit('SEARCH_MOVIES_REQUEST')
    },
    'SEARCH_MOVIES_FAILURE' (context, action) {
      console.log('ssss', action);
      context.commit('SEARCH_MOVIES_FAILURE', action)
    }
  },
  //唯一拥有更改内存数据的接口，此操作为同步
  mutations: {
    'SEARCH_MOVIES_REQUEST' (state) {
      state.loading = true;
      state.errorMessage = null;
    },
    'SEARCH_MOVIES_SUCCESS' (state, payload) {
      state.loading = false;
      state.movies = payload
    },
    'SEARCH_MOVIES_FAILURE'(state, payload) {
      state.loading = false,
      state.errorMessage = payload.error
      state.movies = []
    }
  }
})
export default store;