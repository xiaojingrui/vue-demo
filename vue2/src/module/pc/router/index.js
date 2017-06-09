import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from '../components/Hello'
import test from '../components/Test'

Vue.use(VueRouter)

let router = new VueRouter({
	linkActiveClass: 'active'
});

export default new VueRouter({
  routes: [
    {
      path: '/hello',
      component: hello
    },
    {
      path: '/test',
      component: test
    }
  ]
})

