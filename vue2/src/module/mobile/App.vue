<template>
  <div id="app">
    <p><router-link to="/hello">商品6666666666</router-link></p>
    <div class="test">
      444666
      <div class="test2">
        <p><router-link to="/hello">Go to Foo</router-link></p>
        <p><router-link to="/test">Go to Foo</router-link></p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
