import "../styles/usage/page/app.scss";

import index from "./components/index.vue";
import main from "./components/main.vue";
import search from "./components/search.vue";
import detail from "./components/detail.vue";
import cart from "./components/cart.vue";
import info from "./components/info.vue";
import my from "./components/my.vue";
import login from "./components/login.vue";
import login1 from "./components/login1.vue";

// import Vue from "./libs/vue.js";
// import VueRouter from "./libs/vue-router.js"
// Vue.use(VueRouter);

//vuex
import store from "./vuex/store.js"
let App = Vue.extend({
    store:store
});
//开启debug
Vue.config.debug = true;

let router = new VueRouter({
  routes:[
    {
      path:"/",
      component:login
    },
    {
    path:'/index',
    component:index,
    children: [
      {
        path: '/index/main',
        component: main
      },
      {
        path: '/index/search',
        component: search

      },
      {
        path: '/index/cart',
        component: cart
      },
      {
        path: '/index/info',
        component: info
      },
      {
        path: '/index/my',
        component: my
      }
    ]
  }, {
      name:'detail',
      path: '/search/detail/:id',
      component: detail
    },{
      name:'login1',
      path:'/login/:loginid',
      component:login1
    }
  ]
});

const app = new Vue({
  router
}).$mount('#xhsapp');
