<template>
  <div class="movie">
      <h2>{{ movie.Title }}</h2>
      <div>
        <img
          width="200"
          :alt="`The movie titled: ${movie.Title}`"
          :src="movie.Poster === 'N/A' ? url : movie.Poster"
        />
      </div>
      <p>{{movie.Year}}</p>
    </div>
</template>

<script>
export default {
  name: 'movie',
  props: {
    data: Object
  },
  data() {
    return {
      movie: this.data,
      url: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'
    }
  },
}
</script>

<style>
.movie {
  padding: 5px 25px 10px 25px;
  max-width: 25%;
}
</style>