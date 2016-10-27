<template>
  <div class="info-container">
  <div class="search-header">
    消息
  </div>

  <div class="info-content">
    <div class="infoTab">
      <ul>
        <li v-bind:class="cur==$index?'active':''"  v-on:click="changeTab($index)" v-for='(item,$index) in infolist' >{{item}}</li>
      </ul>
    </div>
    <div class="info-main">
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="new">
                    没有最新的动态
                </div>
              </div>
              <div class="swiper-slide">
                <div class="new">
                    编辑更新
                </div>
              </div>
              <div class="swiper-slide">
                <div class="new">
                    没有通知了.....
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import {changeIndex} from "../vuex/actions.js";
  export default {
    vuex:{
        actions:{
          change:changeIndex
        }
      },
      data(){
        return {
          cur:0,
          mySwiper:null,
          infolist:['动态','关于你','通知']
        }
      },
      mounted: function () {
                this.$nextTick(function () {
                  // 保证 this.$el 已经插入文档
                  //this.change(3)
                  var that=this;
                  this.mySwiper=new Swiper('.swiper-container', {
                      onSlideChangeStart: function(swiper){
                      that.cur=swiper.activeIndex
                      console.log(swiper.activeIndex);
                      }
                  })
                })
              },
      methods:{
        changeTab(index){
          this.cur=index
          this.mySwiper.slideTo(index)
        }


      }


  }


</script>
