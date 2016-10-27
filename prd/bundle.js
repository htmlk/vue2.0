/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _index = __webpack_require__(5);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(8);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _search = __webpack_require__(12);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _detail = __webpack_require__(15);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _cart = __webpack_require__(18);
	
	var _cart2 = _interopRequireDefault(_cart);
	
	var _info = __webpack_require__(21);
	
	var _info2 = _interopRequireDefault(_info);
	
	var _my = __webpack_require__(24);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _login = __webpack_require__(27);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _login3 = __webpack_require__(30);
	
	var _login4 = _interopRequireDefault(_login3);
	
	var _store = __webpack_require__(32);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = Vue.extend({
	  store: _store2.default
	});
	//开启debug
	
	
	// import Vue from "./libs/vue.js";
	// import VueRouter from "./libs/vue-router.js"
	// Vue.use(VueRouter);
	
	
	//vuex
	Vue.config.debug = true;
	
	var router = new VueRouter({
	  routes: [{
	    path: '/', component: _index2.default,
	    children: [{
	      path: '/',
	      component: _main2.default
	    }, {
	      path: '/search',
	      component: _search2.default
	
	    }, {
	      path: '/cart',
	      component: _cart2.default
	    }, {
	      path: '/info',
	      component: _info2.default
	    }, {
	      path: '/my',
	      component: _my2.default
	    }]
	  }, {
	    name: 'detail',
	    path: '/search/detail/:id',
	    component: _detail2.default
	  }]
	});
	
	var app = new Vue({
	  router: router
	}).$mount('#xhsapp');
	
	// router.map({
	//   '/':{
	//     component:login,
	//   },
	//   '/index':{
	//     name:'index',
	//     component:index,
	//     subRoutes:{
	//       '/main':{
	//         name:'main',
	//         component:main
	//       },
	//       '/search':{
	//         name:'search',
	//         component:search
	//       },
	//       '/cart':{
	//         name:'cart',
	//         component:cart
	//       },
	//       '/info':{
	//         name:'cart',
	//         component:info
	//       },
	//       '/my':{
	//         name:'my',
	//         component:my
	//       }
	//     }
	//   },
	//   '/login1':{
	//     name:'login1',
	//     component:login1
	//   },
	//   '/search/detail/:id':{
	//     name:'detail',
	//     component:detail
	//   }
	// });
	//
	// router.start(App,'body');
	//
	// // //容器
	// // require('./views/container.js');
	// // //index
	// // require('./views/index.js');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <!-- //单页面 包含整个app公共部分 -->
	// <template>
	//   <div class="box-container">
	//       <router-view transition="goto" transition-mode="out-in" keep-alive></router-view>
	//     <footer id="footer">
	//       <ul>
	//         <li  v-for="(tab,$index) in tabList" v-bind:class="curIndex==$index?'active':''" v-on:click="changPage($index)">
	//           <router-link :to="{ path: tab.path }">
	//               <i class="iconfont"><div v-html="tab.icon"></div></i>
	//               <span>{{tab.name}}</span>
	//            </router-link>
	//          </li>
	//       </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	//
	// <script>
	// import {changeIndex} from "../vuex/actions.js";
	// import { getIndex } from '../vuex/getters';
	exports.default = {
	  // vuex: {
	  //   actions: {
	  //     change:changeIndex
	  //   },
	  //   getters: {
	  //     curIndex: getIndex
	  //   }
	  // },
	  data: function data() {
	    return {
	      curIndex: 0,
	      tabList: [{
	        path: '/',
	        icon: "&#xe6bb;",
	        name: "首页"
	      }, {
	        path: '/search',
	        icon: "&#xe65c;",
	        name: "发现"
	      }, {
	        path: '/cart',
	        icon: "&#xe6b9;",
	        name: "购买"
	      }, {
	        path: '/info',
	        icon: "&#xe7bd;",
	        name: "消息"
	      }, {
	        path: '/my',
	        icon: "&#xe787;",
	        name: "我的"
	      }]
	    };
	  },
	
	  methods: {
	    changPage: function changPage(index) {
	      this.curIndex = index;
	      console.log(index);
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"box-container\">\n    <router-view transition=\"goto\" transition-mode=\"out-in\" keep-alive></router-view>\n  <footer id=\"footer\">\n    <ul>\n      <li  v-for=\"(tab,$index) in tabList\" v-bind:class=\"curIndex==$index?'active':''\" v-on:click=\"changPage($index)\">\n        <router-link :to=\"{ path: tab.path }\">\n            <i class=\"iconfont\"><div v-html=\"tab.icon\"></div></i>\n            <span>{{tab.name}}</span>\n         </router-link>\n       </li>\n    </ul>\n  </footer>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(10);
	
	exports.default = {
	    // vuex:{
	    //     actions:{
	    //       change:changeIndex
	    //     }
	    //   },
	    data: function data() {
	        return {
	            list: {},
	            loadingicon: '',
	            loadingtext: ''
	        };
	    },
	
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;
	
	            // 保证 this.$el 已经插入文档
	            //this.change(0);
	            var that = this;
	            var myScroll;
	            this.$http.get('http://www.htmlk.cn/vuejson/index.json').then(function (res) {
	                _this.list = res.body.data;
	                console.log(res.body.data);
	                setTimeout(function () {
	                    myScroll = new IScroll('#main-scroll', {
	                        click: true,
	                        mouseWheel: true,
	                        scrollbars: false,
	                        probeType: 1
	                    });
	                    myScroll.scrollTo(0, -100);
	                    myScroll.on("scroll", function () {
	
	                        if (this.y >= 0) {
	                            that.loadingicon = '&#xf07b;';
	                            that.loadingtext = "正在挖小红薯的路上...";
	                        }
	                    });
	                    myScroll.on("scrollEnd", function () {
	                        console.log(this.y);
	                        var y = this.y;
	                        //  console.log(this.y);
	                        if (this.y > -100 && this.y < 0) {
	                            that.loadingicon = '&#xf07b;';
	                            that.loadingtext = "正在挖小红薯的路上...";
	                            myScroll.scrollTo(0, -100, 4000);
	                        }
	                        if (this.y == 0) {
	                            that.loadingicon = '&#xf089;';
	                            that.loadingtext = "正在搬运小红薯...";
	                            that.$http.get('http://www.htmlk.cn/vuejson/index2.json').then(function (res1) {
	                                var arr = res1.body.data.concat(that.list);
	                                //console.log(arr)
	                                that.list = arr;
	                                that.loadingicon = '&#xf078;';
	                                that.loadingtext = "小红薯都已经到达...";
	                                myScroll.scrollTo(0, -100, 4000);
	                                setTimeout(function () {
	                                    myScroll.refresh();
	                                }, 0);
	                            });
	                        }
	                    });
	                }, 0);
	            }, function (res) {
	                console.log(res.data); //error
	            });
	        });
	    }
	
	};
	// </script>

	/* generated by vue-loader */
	// <!-- //主页面 -->
	// <template>
	//     <div class="main-container">
	//
	//
	//         <div class="main-header">
	//             <ul>
	//                 <li><i class="iconfont">&#xe65c;</i></li>
	//                 <li>小红书</li>
	//                 <li><i class="iconfont">&#xe77e;</i></li>
	//             </ul>
	//         </div>
	//
	//         <div class="main-content" id="main-scroll">
	//           <div class="scroll-box">
	//
	//           <div class="loading">
	//             <div class="yo-loadtip yo-loadtip-test">
	//               <i class="yo-ico"><div v-html="loadingicon"></div></i>
	//               <div class="text"><div v-html="loadingtext"></div></div>
	//            </div>
	//           </div>
	//
	//
	//             <div class="main-box">
	//                 <dl v-for="item in list">
	//                     <dt>
	//                         <template v-for="(test,$index) in item.images_list" v-if="$index==1">
	//                           <img v-bind:src="test.url" alt="">
	//                         </template>
	//                     </dt>
	//                     <dd>
	//                         <h2>{{item.title}}</h2>
	//                         <p>{{item.desc}}</p>
	//                         <div class="user">
	//                             <img v-bind:src="item.user.images" alt="">
	//                             <span>{{item.user.nickname}}</span>
	//                             <i class="iconfont">&#xe668;</i>
	//                             <span>{{item.fav_count}}</span>
	//                         </div>
	//                     </dd>
	//                 </dl>
	//             </div>
	//
	//           </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	//对上面的渲染
	// var Vue = require('../libs/vue.js');
	// var VueResource = require('../libs/vue-resource.js');
	// Vue.use(VueResource);
	//vuex状态

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var changeIndex = exports.changeIndex = function changeIndex(_ref, tabIndex) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;
	
	  dispatch('CHANGEINDEX', tabIndex);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"main-container\">\n\n\n    <div class=\"main-header\">\n        <ul>\n            <li><i class=\"iconfont\">&#xe65c;</i></li>\n            <li>小红书</li>\n            <li><i class=\"iconfont\">&#xe77e;</i></li>\n        </ul>\n    </div>\n\n    <div class=\"main-content\" id=\"main-scroll\">\n      <div class=\"scroll-box\">\n\n      <div class=\"loading\">\n        <div class=\"yo-loadtip yo-loadtip-test\">\n          <i class=\"yo-ico\"><div v-html=\"loadingicon\"></div></i>\n          <div class=\"text\"><div v-html=\"loadingtext\"></div></div>\n       </div>\n      </div>\n\n\n        <div class=\"main-box\">\n            <dl v-for=\"item in list\">\n                <dt>\n                    <template v-for=\"(test,$index) in item.images_list\" v-if=\"$index==1\">\n                      <img v-bind:src=\"test.url\" alt=\"\">\n                    </template>\n                </dt>\n                <dd>\n                    <h2>{{item.title}}</h2>\n                    <p>{{item.desc}}</p>\n                    <div class=\"user\">\n                        <img v-bind:src=\"item.user.images\" alt=\"\">\n                        <span>{{item.user.nickname}}</span>\n                        <i class=\"iconfont\">&#xe668;</i>\n                        <span>{{item.fav_count}}</span>\n                    </div>\n                </dd>\n            </dl>\n        </div>\n\n      </div>\n    </div>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(10);
	
	exports.default = {
	    vuex: {
	        actions: {
	            change: _actions.changeIndex
	        }
	    },
	    data: function data() {
	        return {
	            events: '',
	            topic: '',
	            lifestyle: '',
	            destination: '',
	            lasts: ''
	        };
	    },
	
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;
	
	            // 保证 this.$el 已经插入文档
	            //this.change(1);
	            this.$http.get('http://www.htmlk.cn/vuejson/search.json').then(function (res) {
	                _this.events = res.data.data[0].events;
	                _this.topic = res.data.data[2].topic;
	                _this.lifestyle = res.data.data[4].lifestyle;
	                _this.destination = res.data.data[5].destination;
	                //console.log(res.data.data);
	                setTimeout(function () {
	                    new IScroll('#search-scroll', {
	                        click: true
	                    });
	                    new IScroll('#item-scroll-1', {
	                        scrollX: true,
	                        scrollY: false
	                    });
	                    new IScroll('#item-scroll-2', {
	                        scrollX: true,
	                        scrollY: false
	                    });
	                    new IScroll('#item-scroll-3', {
	                        scrollX: true,
	                        scrollY: false
	                    });
	                    new Swiper('.swiper-container', {
	                        autoplay: 3000, //可选选项，自动滑动
	                        loop: true,
	                        effect: 'fade',
	                        pagination: '.swiper-pagination',
	                        paginationType: 'fraction'
	                    });
	                }, 1500);
	            }, function (res) {
	                console.log(res.data.data); //error
	                _this.lasts = res.data.data[0];
	            });
	            var self = this;
	            this.$http.get('http://www.htmlk.cn/vuejson/searchlast.json').then(function (res) {
	                //  console.log(res.data.data[0]);
	                self.lasts = res.data.data;
	            });
	        });
	    }
	
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div class="search-container">
	//         <div class="search-header">
	//             <ul>
	//
	//                 <li><i class="iconfont">&#xe65c;</i>
	//                     <input type="text" name="name" value="" placeholder="搜索笔记商品和用户" />
	//                 </li>
	//                 <li><i class="iconfont">&#xe6c9;</i></li>
	//             </ul>
	//         </div>
	//         <div class="search-content" id="search-scroll">
	//             <div><!-- IScroll 盒子 -->
	//                 <div class="swiper-container">
	//                     <div class="swiper-wrapper">
	//                         <div class="swiper-slide" v-for="item in events"><img v-bind:src="item.image" alt=""></div>
	//                     </div>
	//                     <div class="swiper-pagination"></div>
	//                 </div>
	//
	//                 <div class="hot-container">
	//                     <div class="title">
	//                         <ul>
	//                             <li >热门话题</li>
	//                             <li>hot topice</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="content" id="item-scroll-1">
	//                         <ul>
	//                             <li v-for="item1 in topic"><img v-bind:src="item1.image" alt="">
	//                                 <p>{{item1.name}}</p>
	//                             </li>
	//                             <li>
	//                               <p>全部</p>
	//                               <p>see all</p>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//                 <div class="hot-container"  >
	//                     <div class="title">
	//                         <ul>
	//                             <li>品质生活</li>
	//                             <li>liftstyles</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="content" id="item-scroll-2">
	//                         <ul>
	//                             <li v-for="item2 in lifestyle"><img v-bind:src="item2.image" alt="">
	//                                 <p>{{item2.name}}</p>
	//                             </li>
	//                             <li>
	//                               <p>全部</p>
	//                               <p>see all</p>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//                 <div class="hot-container" >
	//                     <div class="title">
	//                         <ul>
	//                             <li>全球购物</li>
	//                             <li>destinations</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="content" id="item-scroll-3">
	//                         <ul>
	//                             <li v-for="item3 in destination"><img v-bind:src="item3.image" alt="">
	//                                 <p>{{item3.name}}</p>
	//                             </li>
	//                             <li>
	//                               <p>全部</p>
	//                               <p>see all</p>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//                 <div class="hot-container"    >
	//                     <div class="title">
	//                         <ul>
	//                             <li>热门专辑</li>
	//                             <li>selected boards</li>
	//                             <li>查看更多></li>
	//                         </ul>
	//                     </div>
	//                     <div class="last-content" >
	//                         <ul>
	//                             <li v-for="item5 in lasts" >
	//                               <router-link :to="{ name: 'detail', params: {id:item5.id } }">
	//                                 <div class="last-title" >
	//                                     <p>{{item5.name}}</p>
	//                                     <span>笔记·{{item5.total}}</span>
	//                                     <span>粉丝·{{item5.fans}}</span>
	//                                 </div>
	//                                 <div class="last-images">
	//                                   <template v-for="test in item5.images"><img v-bind:src="test" alt="">
	//                                   </template>
	//                                 </div>
	//                                 <div class="last-user">
	//                                       <img v-bind:src="item5.user.images" alt="">
	//                                       <p>由{{item5.user.nickname}}创建<p>
	//
	//                                 </div>
	//                               </router-link>
	//                             </li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	//对上面的渲染
	// var Vue = require('../libs/vue.js');
	// var VueResource = require('../libs/vue-resource.js');
	// Vue.use(VueResource);

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"search-container\">\n    <div class=\"search-header\">\n        <ul>\n\n            <li><i class=\"iconfont\">&#xe65c;</i>\n                <input type=\"text\" name=\"name\" value=\"\" placeholder=\"搜索笔记商品和用户\" />\n            </li>\n            <li><i class=\"iconfont\">&#xe6c9;</i></li>\n        </ul>\n    </div>\n    <div class=\"search-content\" id=\"search-scroll\">\n        <div><!-- IScroll 盒子 -->\n            <div class=\"swiper-container\">\n                <div class=\"swiper-wrapper\">\n                    <div class=\"swiper-slide\" v-for=\"item in events\"><img v-bind:src=\"item.image\" alt=\"\"></div>\n                </div>\n                <div class=\"swiper-pagination\"></div>\n            </div>\n\n            <div class=\"hot-container\">\n                <div class=\"title\">\n                    <ul>\n                        <li >热门话题</li>\n                        <li>hot topice</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"content\" id=\"item-scroll-1\">\n                    <ul>\n                        <li v-for=\"item1 in topic\"><img v-bind:src=\"item1.image\" alt=\"\">\n                            <p>{{item1.name}}</p>\n                        </li>\n                        <li>\n                          <p>全部</p>\n                          <p>see all</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"hot-container\"  >\n                <div class=\"title\">\n                    <ul>\n                        <li>品质生活</li>\n                        <li>liftstyles</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"content\" id=\"item-scroll-2\">\n                    <ul>\n                        <li v-for=\"item2 in lifestyle\"><img v-bind:src=\"item2.image\" alt=\"\">\n                            <p>{{item2.name}}</p>\n                        </li>\n                        <li>\n                          <p>全部</p>\n                          <p>see all</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"hot-container\" >\n                <div class=\"title\">\n                    <ul>\n                        <li>全球购物</li>\n                        <li>destinations</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"content\" id=\"item-scroll-3\">\n                    <ul>\n                        <li v-for=\"item3 in destination\"><img v-bind:src=\"item3.image\" alt=\"\">\n                            <p>{{item3.name}}</p>\n                        </li>\n                        <li>\n                          <p>全部</p>\n                          <p>see all</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"hot-container\"    >\n                <div class=\"title\">\n                    <ul>\n                        <li>热门专辑</li>\n                        <li>selected boards</li>\n                        <li>查看更多></li>\n                    </ul>\n                </div>\n                <div class=\"last-content\" >\n                    <ul>\n                        <li v-for=\"item5 in lasts\" >\n                          <router-link :to=\"{ name: 'detail', params: {id:item5.id } }\">\n                            <div class=\"last-title\" >\n                                <p>{{item5.name}}</p>\n                                <span>笔记·{{item5.total}}</span>\n                                <span>粉丝·{{item5.fans}}</span>\n                            </div>\n                            <div class=\"last-images\">\n                              <template v-for=\"test in item5.images\"><img v-bind:src=\"test\" alt=\"\">\n                              </template>\n                            </div>\n                            <div class=\"last-user\">\n                                  <img v-bind:src=\"item5.user.images\" alt=\"\">\n                                  <p>由{{item5.user.nickname}}创建<p>\n\n                            </div>\n                          </router-link>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="detail">
	//         <div class="detail-header">
	//             <ul>
	//                 <li>
	//                     <router-link :to="{path:'/search'}">&lt</router-link</li>
	//                         <li>专辑</li>
	//                         <li>发现</li>
	//             </ul>
	//         </div>
	//
	//         <div class="detail-content">
	//             <div class="title">
	//                 <div class="title-txt">
	//                     <h2>{{detail.name}}</h2>
	//                     <span>笔记:{{detail.total}}</span>
	//                     <span>粉丝:{{detail.fans}}</span>
	//                 </div>
	//                 <div class="like">
	//                     <p>+关注</p>
	//                 </div>
	//             </div>
	//
	//             <div class="desc">
	//                 <img v-bind:src="userinfo.images" alt="">
	//                 <p><span>{{userinfo.nickname}}</span>:{{detail.desc}}</p>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            detail: '',
	            userinfo: ''
	        };
	    },
	
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;
	
	            // 保证 this.$el 已经插入文档
	            //console.log(this.$route.params.id)
	            this.$http.get('http://www.htmlk.cn/vuejson/searchlast.json').then(function (res) {
	                //console.log(res.data.data);
	                for (var i = 0; i < res.data.data.length; i++) {
	                    var routeId = _this.$route.params.id;
	                    var goodId = res.data.data[i].id;
	                    if (routeId == goodId) {
	                        //  console.log(res.data.data[i])
	                        _this.detail = res.data.data[i];
	                        _this.userinfo = res.data.data[i].user;
	                    }
	                }
	            }, function (error) {
	                //console.log(error)
	            });
	        });
	    }
	
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"detail\">\n    <div class=\"detail-header\">\n        <ul>\n            <li>\n                <router-link :to=\"{path:'/search'}\">&lt</router-link</li>\n                    <li>专辑</li>\n                    <li>发现</li>\n        </ul>\n    </div>\n\n    <div class=\"detail-content\">\n        <div class=\"title\">\n            <div class=\"title-txt\">\n                <h2>{{detail.name}}</h2>\n                <span>笔记:{{detail.total}}</span>\n                <span>粉丝:{{detail.fans}}</span>\n            </div>\n            <div class=\"like\">\n                <p>+关注</p>\n            </div>\n        </div>\n\n        <div class=\"desc\">\n            <img v-bind:src=\"userinfo.images\" alt=\"\">\n            <p><span>{{userinfo.nickname}}</span>:{{detail.desc}}</p>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\cart.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./cart.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(10);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  ready: function ready() {
	    this.change(2);
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <div class="cart-container">
	//         <div class="search-header">
	//             <ul>
	//                 <li><i class="iconfont">&#xe65c;</i>
	//                     <input type="text" name="name" value="" placeholder="搜索笔记商品和用户" />
	//                 </li>
	//                 <li><i class="iconfont">&#xe73d;</i></li>
	//             </ul>
	//         </div>
	//
	//         <div class="cart-content">
	//             选购去吧.....
	//         </div>
	//     </div>
	// </template>
	// <script>

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"cart-container\">\n    <div class=\"search-header\">\n        <ul>\n            <li><i class=\"iconfont\">&#xe65c;</i>\n                <input type=\"text\" name=\"name\" value=\"\" placeholder=\"搜索笔记商品和用户\" />\n            </li>\n            <li><i class=\"iconfont\">&#xe73d;</i></li>\n        </ul>\n    </div>\n\n    <div class=\"cart-content\">\n        选购去吧.....\n    </div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(10);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      cur: 0,
	      mySwiper: null,
	      infolist: ['动态', '关于你', '通知']
	    };
	  },
	
	  mounted: function mounted() {
	    this.$nextTick(function () {
	      // 保证 this.$el 已经插入文档
	      //this.change(3)
	      var that = this;
	      this.mySwiper = new Swiper('.swiper-container', {
	        onSlideChangeStart: function onSlideChangeStart(swiper) {
	          that.cur = swiper.activeIndex;
	          console.log(swiper.activeIndex);
	        }
	      });
	    });
	  },
	  methods: {
	    changeTab: function changeTab(index) {
	      this.cur = index;
	      this.mySwiper.slideTo(index);
	    }
	  }
	
	};
	
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div class="info-container">
	//   <div class="search-header">
	//     消息
	//   </div>
	//
	//   <div class="info-content">
	//     <div class="infoTab">
	//       <ul>
	//         <li v-bind:class="cur==$index?'active':''"  v-on:click="changeTab($index)" v-for='(item,$index) in infolist' >{{item}}</li>
	//       </ul>
	//     </div>
	//     <div class="info-main">
	//       <div class="swiper-container">
	//           <div class="swiper-wrapper">
	//               <div class="swiper-slide">
	//                 <div class="new">
	//                     没有最新的动态
	//                 </div>
	//               </div>
	//               <div class="swiper-slide">
	//                 <div class="new">
	//                     编辑更新
	//                 </div>
	//               </div>
	//               <div class="swiper-slide">
	//                 <div class="new">
	//                     没有通知了.....
	//                 </div>
	//               </div>
	//           </div>
	//       </div>
	//     </div>
	//   </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"info-container\">\n<div class=\"search-header\">\n  消息\n</div>\n\n<div class=\"info-content\">\n  <div class=\"infoTab\">\n    <ul>\n      <li v-bind:class=\"cur==$index?'active':''\"  v-on:click=\"changeTab($index)\" v-for='(item,$index) in infolist' >{{item}}</li>\n    </ul>\n  </div>\n  <div class=\"info-main\">\n    <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\">\n              <div class=\"new\">\n                  没有最新的动态\n              </div>\n            </div>\n            <div class=\"swiper-slide\">\n              <div class=\"new\">\n                  编辑更新\n              </div>\n            </div>\n            <div class=\"swiper-slide\">\n              <div class=\"new\">\n                  没有通知了.....\n              </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	// <template>
	//     <div class="my-container">
	//
	//         <div id="app" class="app1">
	//           <div>
	//           <waterfall
	//         :align="align"
	//         :line-gap="200"
	//         :min-line-gap="100"
	//         :max-line-gap="220"
	//         :single-max-width="300"
	//         :watch="items"
	//         @reflowed="reflowed"
	//         ref="waterfall"
	//       >
	//         <!-- each component is wrapped by a waterfall slot -->
	//         <waterfall-slot
	//           v-for="(item, index) in itemslist"
	//           :width="item.width"
	//           :height="item.height*2"
	//           :order="index"
	//           :key="item.index"
	//           move-class="item-move"
	//         >
	//           <div class="item" :style="item.style" :index="item.index">
	//               <img v-bind:src="item.url"  alt="">
	//
	//               <template v-for="temp1 in content">
	//
	//                       <div class="txt">
	//                         <h2>{{temp1.name}}</h2>
	//                         <p>{{temp1.desc}}</p>
	//                       </div>
	//
	//                       <div class="user">
	//                         {{temp1.user.nickname}}
	//                       </div>
	//                 </template>
	//
	//
	//           </div>
	//
	//         </waterfall-slot>
	//       </waterfall>
	//         </div>
	// </div>
	//     </div>
	// </template>
	//
	// <script>
	// import Waterfall from '../libs/waterfall.vue';
	// import WaterfallSlot from '../libs/waterfall-slot.vue';
	exports.default = {
	  // el(){
	  //   return '#app'
	  // },
	  components: {
	    'waterfall': Waterfall.waterfall,
	    'waterfall-slot': Waterfall.waterfallSlot
	  },
	  data: function data() {
	    return {
	      align: 'center',
	      items: [{ "index": 0, "style": { "background": "rgba(195,123,177,.5)" }, "width": 116, "height": 129 }, { "index": 1, "style": { "background": "rgba(195,123,177,.5)" }, "width": 143, "height": 121 }, { "index": 2, "style": { "background": "rgba(255,230,135,.5)" }, "width": 114, "height": 127 }, { "index": 3, "style": { "background": "rgba(125,205,244,.5)" }, "width": 135, "height": 146 }, { "index": 4, "style": { "background": "rgba(255,230,135,.5)" }, "width": 116, "height": 131 }, { "index": 5, "style": { "background": "rgba(125,205,244,.5)" }, "width": 106, "height": 141 }, { "index": 6, "style": { "background": "rgba(255,230,135,.5)" }, "width": 117, "height": 138 }, { "index": 7, "style": { "background": "rgba(255,230,135,.5)" }, "width": 120, "height": 112 }, { "index": 8, "style": { "background": "rgba(125,205,244,.5)" }, "width": 132, "height": 100 }, { "index": 9, "style": { "background": "rgba(125,205,244,.5)" }, "width": 111, "height": 118 }, { "index": 10, "style": { "background": "rgba(194,217,78,.5)" }, "width": 144, "height": 133 }],
	      itemslist: [],
	      content: {},
	      isBusy: false
	    };
	  },
	
	
	  methods: {
	
	    addItems: function addItems() {
	      if (!this.isBusy && this.items.length < 500) {
	        this.isBusy = true;
	        this.items.push.apply(this.items, ItemFactory.get(50));
	      }
	    },
	    shuffle: function shuffle() {
	      this.items.sort(function () {
	        return Math.random() - 0.5;
	      });
	    },
	    reflowed: function reflowed() {
	      this.isBusy = false;
	    }
	  },
	  mounted: function mounted() {
	    this.$nextTick(function () {
	      var _this = this;
	
	      this.$http.get('http://www.htmlk.cn/vuejson/index.json').then(function (res) {
	        _this.list = res.body.data;
	        console.log(res.body.data);
	        _this.content = res.body.data;
	        for (var i = 0; i < res.body.data.length; i++) {
	          //console.log(res.body.data[i]);
	
	          _this.itemslist.push(res.body.data[i].images_list[0]);
	        }
	        //  console.log(this.itemslist);
	        setTimeout(function () {
	          var myScroll = new IScroll('#app', {
	            scrollY: true
	          });
	        }, 1500);
	      });
	    });
	  }
	
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n\n    <div class=\"my-container\">\n\n        <div id=\"app\" class=\"app1\">\n          <div>\n          <waterfall\n        :align=\"align\"\n        :line-gap=\"200\"\n        :min-line-gap=\"100\"\n        :max-line-gap=\"220\"\n        :single-max-width=\"300\"\n        :watch=\"items\"\n        @reflowed=\"reflowed\"\n        ref=\"waterfall\"\n      >\n        <!-- each component is wrapped by a waterfall slot -->\n        <waterfall-slot\n          v-for=\"(item, index) in itemslist\"\n          :width=\"item.width\"\n          :height=\"item.height*2\"\n          :order=\"index\"\n          :key=\"item.index\"\n          move-class=\"item-move\"\n        >\n          <div class=\"item\" :style=\"item.style\" :index=\"item.index\">\n              <img v-bind:src=\"item.url\"  alt=\"\">\n\n              <template v-for=\"temp1 in content\">\n\n                      <div class=\"txt\">\n                        <h2>{{temp1.name}}</h2>\n                        <p>{{temp1.desc}}</p>\n                      </div>\n\n                      <div class=\"user\">\n                        {{temp1.user.nickname}}\n                      </div>\n                </template>\n\n\n          </div>\n\n        </waterfall-slot>\n      </waterfall>\n        </div>\n</div>\n    </div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\login.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//     <div class="bg-container">
	//
	//         <div class="swiper-container">
	//             <div class="swiper-wrapper">
	//                 <div class="swiper-slide" track-by="$index" v-for="item in slide">
	//                   <p>{{item.title}}</p>
	//                   <img  v-bind:src="item.pic" alt="">
	//                 </div>
	//             </div>
	//              <div class="swiper-pagination"></div>
	//         </div>
	//
	//         <div class="bg-box">
	//           <div class="regbox"><p v-link="{ name:'login1'}">注册</p></div>
	//           <div class="loginbox"><p v-link="{ name:'login1'}">登录</p></div>
	//         </div>
	//
	//     </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      slide: [{
	        title: '和最会生活的人做朋友',
	        pic: '/images/xy_walkthroughs_card1.png'
	      }, {
	        title: '和最会生活的人做朋友',
	        pic: '/images/xy_walkthroughs_card2.png'
	      }, {
	        title: '和最会生活的人做朋友',
	        pic: '/images/xy_walkthroughs_card3.png'
	      }]
	    };
	  },
	
	  ready: function ready() {
	    setTimeout(function () {
	      var mySwiper = new Swiper('.swiper-container', {
	        autoplay: 5000, //可选选项，自动滑动
	        pagination: '.swiper-pagination'
	      });
	    }, 0);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"bg-container\">\n\n    <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\" track-by=\"$index\" v-for=\"item in slide\">\n              <p>{{item.title}}</p>\n              <img  v-bind:src=\"item.pic\" alt=\"\">\n            </div>\n        </div>\n         <div class=\"swiper-pagination\"></div>\n    </div>\n\n    <div class=\"bg-box\">\n      <div class=\"regbox\"><p v-link=\"{ name:'login1'}\">注册</p></div>\n      <div class=\"loginbox\"><p v-link=\"{ name:'login1'}\">登录</p></div>\n    </div>\n\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./login1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"login-box\">\n    <div class=\"login-header\">\n      <ul>\n        <li>返回</li>\n        <li>登录</li>\n        <li v-link=\"{name:'main'}\">直接进入主页</li>\n      </ul>\n    </div>\n    <div class=\"login-content\">\n      <ul>\n        <li><p>———————</p><p>手机号快速登录</p><p>——————</p></li>\n        <li><input type=\"tell\"  placeholder=\"请输入手机号\"/></li>\n        <li><input type=\"button\" name=\"name\" value=\"下一步\" ></li>\n        <li><p>快速注册</p><p>使用账号密码登录</p></li>\n      </ul>\n    </div>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _states = __webpack_require__(33);
	
	var _mutations = __webpack_require__(34);
	
	exports.default = new Vuex.Store({
	  state: _states.state,
	  mutations: _mutations.mutations
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = exports.state = {
	  tabIndex: 0
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mutations = exports.mutations = {
	  CHANGEINDEX: function CHANGEINDEX(state, curIndex) {
	    state.tabIndex = curIndex;
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map