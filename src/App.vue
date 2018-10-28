<template>
  <div id="app">
    首页
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "App"
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100%;
    min-width: 1100px;
  }
</style>
