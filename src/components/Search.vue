<template>
  <div class="search">
    <input v-model="searchValue" type="text" />
    <button @click="callSearchFunction">搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    callSearchFunction() {
      this.$emit('search', this.searchValue);
    },
  },
}
</script>


<style>
.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
}

input[type="submit"] {
  padding: 5px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  width: 80px;
  margin-left: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #282c34;
  color: antiquewhite;
}

input[type="text"]{
  width: 40%;
  min-width: 170px;
  padding: 5px;
  margin-right: 10px;
}
</style>