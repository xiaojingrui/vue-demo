<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <img src="./assets/header.png" alt="">
    <p><router-link to="/hello">商品{{abc}}</router-link></p>
    <div class="test">
      444666
      <div class="test2">
        <p><router-link to="/hello">Go to Foo</router-link></p>
        <p><router-link to="/test">Go to Foo</router-link></p>
      </div>
    </div>
    <router-view></router-view>
    <foot></foot>
    <swiper></swiper>
  </div>
</template>

<script type="text/ecmascript-6">

import foot from './components/common/Foot'
import swiper from '../../common/components/swiper'
import httpService from '../../config/httpService'

export default {
  data() {
    return {
      abc: "2222"
    }
  },
  created() {
    var self = this;
    httpService.login({},function(res){
       self.abc = res.data.name;
    })
  },
  components: {
    foot,
    swiper
  }
}
</script>

<style lang="scss">
@import "./test.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .test{
    font-size:30px;
  }
  .test2{
    font-size:40px;
    width:400px;
    height:300px;
    border: 1px solid pink;
  }
}
</style>
