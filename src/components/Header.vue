<template>
  <h2 class="header">{{title}}</h2>
</template>

<script>
export default {
  name: 'header',
  props: {
    title: String,
  },
  data() {
    return {}
  }
}
</script>

<style>
.header{
  background-color: #282c34;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  cursor: pointer;
}
</style>