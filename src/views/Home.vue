<template>
  <div id="app">
    <app-header :title="title"/>
    <search @search="search"/>
    <div v-if="loading">
      <img class="spinner" :src="spinner" alt="">
    </div>  
    <div v-else>
      <div class="movies" v-if="movies.length">
        <Movie v-for="item in movies" :key="item.id" :data="item"/>
      </div>
      <div v-else>
        <h2>{{errorMessage | upper}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import Search from '@/components/Search'
import Movie from '@/components/Movie'
import axios from "axios";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    AppHeader,
    Search,
    Movie
  },
  data() {
    return {
      title: 'MOVIE HOOKED',
      searchValue: '',
      spinner: require('@/assets/ajax-loader.gif'),
    }
  },
  methods: {
    ...mapActions([
      'SEARCH_MOVIES_REQUEST',
      'SEARCH_MOVIES_SUCCESS',
      'SEARCH_MOVIES_FAILURE'
    ]),
    search(data) {
      this.SEARCH_MOVIES_REQUEST();
      // this.$store.dispatch({
      //   type: 'SEARCH_MOVIES_REQUEST'
      // })
      axios.get(`https://www.omdbapi.com/?s=${data}&apikey=4a3b711b`).then(res => {
      if(res.data.Response === 'True') {
        // this.$store.dispatch({
        //   type: 'SEARCH_MOVIES_SUCCESS',
        //   payload: res.data.Search
        // })
        this.SEARCH_MOVIES_SUCCESS({payload: res.data.Search})
      }else {
        this.SEARCH_MOVIES_FAILURE({error: res.data.Error})
        // this.$store.dispatch({
        //   type: 'SEARCH_MOVIES_FAILURE',
        //   error: res.data.Error
        // })
      }
    })
    }
  },
  computed: {
    ...mapGetters([
      'movies',
      'errorMessage',
      'loading'
    ]),
    // movies() {
    //   return this.$store.state.movies
    // },
    // errorMessage() {
    //   return this.$store.state.errorMessage
    // },
    // loading() {
    //   return this.$store.state.loading
    // }
  },
  created() {
    axios.get(MOVIE_API_URL).then(res => {
      this.SEARCH_MOVIES_SUCCESS({payload: res.data.Search})
      // this.$store.dispatch({
      //   type: 'SEARCH_MOVIES_SUCCESS',
      //   payload: res.data.Search
      // })
    })
  },
}
</script>

<style>
html,body,*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.movies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.spinner {
  height: 80px;
  margin: auto;
}
</style>
