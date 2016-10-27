<!-- //主页面 -->
<template>
    <div class="main-container">


        <div class="main-header">
            <ul>
                <li><i class="iconfont">&#xe65c;</i></li>
                <li>小红书</li>
                <li><i class="iconfont">&#xe77e;</i></li>
            </ul>
        </div>

        <div class="main-content" id="main-scroll">
            <div class="scroll-box">

                <div class="loading">
                    <div class="yo-loadtip yo-loadtip-test">
                        <i class="yo-ico"><div v-html="loadingicon"></div></i>
                        <div class="text">
                            <div v-html="loadingtext"></div>
                        </div>
                    </div>
                </div>


                <div id="app" class="app1">
                    <div>
                        <waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="itemslist"  ref="waterfall">
                            <!-- each component is wrapped by a waterfall slot -->
                            <waterfall-slot v-for="(item, index) in itemslist" :width="item.width" :height="item.height" :order="index" :key="item.index" move-class="item-move">
                                <div class="item" :style="item.style" :index="item.index">
                                  <template>
                                      <img v-bind:src="item.url" alt="">
                                  </template>
                                    <!-- <template v-for="temp1 in content">

                                        <div class="txt">
                                            <h2>{{temp1.name}}</h2>
                                            <p>{{temp1.desc}}</p>
                                        </div>

                                        <div class="user">
                                            {{temp1.user.nickname}}
                                        </div>
                                    </template> -->

                                </div>
                            </waterfall-slot>
                        </waterfall>
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
    //vuex状态
    // import {
    //     changeIndex
    // } from "../vuex/actions";
    export default {
        // vuex:{
        //     actions:{
        //       change:changeIndex
        //     }
        //   },
        components: {
            'waterfall': Waterfall.waterfall,
            'waterfall-slot': Waterfall.waterfallSlot
        },
        data() {
            return {
                loadingicon: '',
                loadingtext: '',
                align: 'center',
                itemslist: [],
                content: '',
                isBusy: false
            }
        },

        methods: {
        },
        updated:function(){

        },
        mounted: function() {

            this.$nextTick(function() {
                // 保证 this.$el 已经插入文档
                // this.change(0);
                var that = this;
                var myScroll;
                var arrpush = [];
                this.$http.get('http://www.htmlk.cn/vuejson/index3.json')
                    .then(
                        (res) => {
                            // 第一次加载数据
                            this.list = res.body.data
                            this.content = res.body.data;
                            for (var i = 0; i < res.body.data.length; i++) {
                                this.itemslist.push(res.body.data[i].images_list[0])
                            }
                          }
                      )
                            //滑动
                            setTimeout(function() {
                                myScroll = new IScroll('#main-scroll', {
                                    click:true,
                                    mouseWheel: true,
                                    scrollbars: false,
                                    probeType: 1
                                });
                                myScroll.scrollTo(0, -100);
                                //下来刷新
                                myScroll.on("scroll", function() {

                                    if (this.y >= 0) {
                                        that.loadingicon = '&#xf07b;'
                                        that.loadingtext = "正在挖小红薯的路上..."

                                    }
                                })
                                //刷新加载数据
                                myScroll.on("scrollEnd", function() {
                                    console.log(this.y);
                                    var y = this.y;
                                    if (this.y > -100 && this.y < 0) {
                                        that.loadingicon = '&#xf07b;'
                                        that.loadingtext = "正在挖小红薯的路上..."
                                        myScroll.scrollTo(0, -100, 4000);
                                    }
                                    if (this.y == 0) {
                                        that.loadingicon = '&#xf089;'
                                        that.loadingtext = "正在搬运小红薯..."
                                        that.$http.get('http://www.htmlk.cn/vuejson/index2.json')
                                            .then(
                                                (res1) => {
                                                    console.log(res1.body.data);
                                                    for (var j = 0; j < res1.body.data.length; j++) {
                                                        arrpush.push(res1.body.data[j].images_list[0])
                                                        var arr = arrpush.concat(that.itemslist);
                                                    }
                                                    that.itemslist = arr;
                                                    that.loadingicon = '&#xf078;'
                                                    that.loadingtext = "小红薯都已经到达..."
                                                    myScroll.scrollTo(0, -100, 4000);
                                                    setTimeout(function() {
                                                        myScroll.refresh();
                                                    }, 1500);
                                                }
                                            )
                                    }
                                })
                            }, 0);

            })
        }
    }
</script>
