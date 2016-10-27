<template>
    <div class="bg-container">

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" track-by="$index" v-for="item in slide">
                  <p>{{item.title}}</p>
                  <img  v-bind:src="item.pic" alt="">
                </div>
            </div>
             <div class="swiper-pagination"></div>
        </div>

        <div class="bg-box">
          <div class="regbox"><router-link :to="{ name:'login1' ,params: { loginid: 1 }}">注册</router-link></div>
          <div class="loginbox"><router-link :to="{ name:'login1',params: { loginid: 2 }}">登录</router-link></div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
          return {
              slide:[
                {
                  title:'发现世界的好生活',
                  pic:'/images/xy_walkthroughs_card1.png'
                },{
                  title:'和最会生活的人做朋友',
                  pic:'/images/xy_walkthroughs_card2.png'
                },{
                  title:'找到全世界的好东西',
                  pic:'/images/xy_walkthroughs_card3.png'
                }
              ]
              }
            },
            mounted: function () {
                    this.$nextTick(function () {
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: 5000, //可选选项，自动滑动
                     pagination: '.swiper-pagination',
                })
            })

       }
    }
</script>
