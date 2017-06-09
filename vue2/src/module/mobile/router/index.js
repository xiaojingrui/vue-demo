import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource';
import Hello from '../components/Hello'
import Test from '../components/Test'

Vue.use(VueRouter)
//Vue.use(VueResource);

let router = new VueRouter({
	linkActiveClass: 'active'
});

export default new VueRouter({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
