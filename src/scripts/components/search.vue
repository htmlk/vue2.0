<template>
    <div class="search-container">
        <div class="search-header">
            <ul>

                <li><i class="iconfont">&#xe65c;</i>
                    <input type="text" name="name" value="" placeholder="搜索笔记商品和用户" />
                </li>
                <li><i class="iconfont">&#xe6c9;</i></li>
            </ul>
        </div>
        <div class="search-content" id="search-scroll">
            <div><!-- IScroll 盒子 -->
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in events"><img v-bind:src="item.image" alt=""></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

                <div class="hot-container">
                    <div class="title">
                        <ul>
                            <li >热门话题</li>
                            <li>hot topice</li>
                            <li>查看更多></li>
                        </ul>
                    </div>
                    <div class="content" id="item-scroll-1">
                        <ul>
                            <li v-for="item1 in topic"><img v-bind:src="item1.image" alt="">
                                <p>{{item1.name}}</p>
                            </li>
                            <li>
                              <p>全部</p>
                              <p>see all</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="hot-container"  >
                    <div class="title">
                        <ul>
                            <li>品质生活</li>
                            <li>liftstyles</li>
                            <li>查看更多></li>
                        </ul>
                    </div>
                    <div class="content" id="item-scroll-2">
                        <ul>
                            <li v-for="item2 in lifestyle"><img v-bind:src="item2.image" alt="">
                                <p>{{item2.name}}</p>
                            </li>
                            <li>
                              <p>全部</p>
                              <p>see all</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="hot-container" >
                    <div class="title">
                        <ul>
                            <li>全球购物</li>
                            <li>destinations</li>
                            <li>查看更多></li>
                        </ul>
                    </div>
                    <div class="content" id="item-scroll-3">
                        <ul>
                            <li v-for="item3 in destination"><img v-bind:src="item3.image" alt="">
                                <p>{{item3.name}}</p>
                            </li>
                            <li>
                              <p>全部</p>
                              <p>see all</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="hot-container"    >
                    <div class="title">
                        <ul>
                            <li>热门专辑</li>
                            <li>selected boards</li>
                            <li>查看更多></li>
                        </ul>
                    </div>
                    <div class="last-content" >
                        <ul>
                            <li v-for="item5 in lasts" >
                              <router-link :to="{ name: 'detail', params: {id:item5.id } }">
                                <div class="last-title" >
                                    <p>{{item5.name}}</p>
                                    <span>笔记·{{item5.total}}</span>
                                    <span>粉丝·{{item5.fans}}</span>
                                </div>
                                <div class="last-images">
                                  <template v-for="test in item5.images"><img v-bind:src="test" alt="">
                                  </template>
                                </div>
                                <div class="last-user">
                                      <img v-bind:src="item5.user.images" alt="">
                                      <p>由{{item5.user.nickname}}创建<p>

                                </div>
                              </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    //对上面的渲染
    // var Vue = require('../libs/vue.js');
    // var VueResource = require('../libs/vue-resource.js');
    // Vue.use(VueResource);
    import {changeIndex} from "../vuex/actions";

    export default {
        vuex:{
          actions:{
            change:changeIndex
          }
        },
        data() {
                return {
                    events: '',
                    topic: '',
                    lifestyle: '',
                    destination: '',
                    lasts: ''
                }
            },
            mounted: function () {
                      this.$nextTick(function () {
                        // 保证 this.$el 已经插入文档
                        //this.change(1);
                          this.$http.get('http://www.htmlk.cn/vuejson/search.json')
                              .then(
                                  (res) => {
                                      this.events = res.data.data[0].events
                                      this.topic = res.data.data[2].topic
                                      this.lifestyle = res.data.data[4].lifestyle
                                      this.destination = res.data.data[5].destination
                                      //console.log(res.data.data);
                                      setTimeout(function() {
                                          new IScroll('#search-scroll', {
                                              click:true
                                          });
                                          new IScroll('#item-scroll-1', {
                                              scrollX:true,
                                              scrollY:false
                                          });
                                          new IScroll('#item-scroll-2', {
                                              scrollX:true,
                                              scrollY:false
                                          });
                                          new IScroll('#item-scroll-3', {
                                              scrollX:true,
                                              scrollY:false
                                          });
                                          new Swiper('.swiper-container', {
                                              autoplay: 3000, //可选选项，自动滑动
                                              loop: true,
                                              effect: 'fade',
                                              pagination: '.swiper-pagination',
                                              paginationType: 'fraction'
                                          })
                                      }, 1500);


                                  }, (res) => {
                                      console.log(res.data.data); //error
                                      this.lasts = res.data.data[0]
                                  }
                              );
                          var self = this;
                          this.$http.get('http://www.htmlk.cn/vuejson/searchlast.json')
                              .then(
                                  (res) => {
                                    //  console.log(res.data.data[0]);
                                      self.lasts = res.data.data;
                                  }
                              )


                      })
                    }


    }
</script>
