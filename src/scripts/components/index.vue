<!-- //单页面 包含整个app公共部分 -->
<template>
  <div class="box-container">
      <router-view transition="goto" transition-mode="out-in" keep-alive></router-view>
    <footer id="footer">
      <ul>
        <li  v-for="(tab,$index) in tabList" v-bind:class="curIndex==$index?'active':''" v-on:click="changPage($index)">
          <router-link :to="{ path: tab.path }">
              <i class="iconfont"><div v-html="tab.icon"></div></i>
              <span>{{tab.name}}</span>
           </router-link>
         </li>
      </ul>
    </footer>
  </div>
</template>


<script>
// import {changeIndex} from "../vuex/actions.js";
// import { getIndex } from '../vuex/getters';
  export default{
    // vuex: {
    //   actions: {
    //     change:changeIndex
    //   },
    //   getters: {
    //     curIndex: getIndex
    //   }
    // },
    data(){
      return{
        curIndex:0,
        tabList:[
          {
            path:'/index/main',
            icon:"&#xe6bb;",
            name:"首页"
          },
          {
            path:'/index/search',
            icon:"&#xe65c;",
            name:"发现"
          },
          {
            path:'/index/cart',
            icon:"&#xe6b9;",
            name:"购买"
          },
          {
            path:'/index/info',
            icon:"&#xe7bd;",
            name:"消息"
          },
          {
            path:'/index/my',
            icon:"&#xe787;",
            name:"我的"
          }
        ]
      }
    },
    methods:{
      changPage(index){
          this.curIndex=index;
          console.log(index);
      }
    }
  }
</script>
