<template>
    <div class="cart-container">
        <div class="search-header">
            <ul>
                <li><i class="iconfont">&#xe65c;</i>
                    <input type="text" name="name" value="" placeholder="搜索笔记商品和用户" />
                </li>
                <li><i class="iconfont">&#xe73d;</i></li>
            </ul>
        </div>

        <div class="cart-content">

          <div id="app" class="app1">
              <div>
                  <waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="itemslist" @reflowed="reflowed" ref="waterfall">
                      <!-- each component is wrapped by a waterfall slot -->
                      <waterfall-slot v-for="(item, index) in itemslist" :width="item.width" :height="item.height" :order="index" :key="item.index" move-class="item-move">
                          <div class="item" :style="item.style" :index="item.index">
                              <img v-bind:src="item.url" alt="">
                          </div>
                      </waterfall-slot>
                  </waterfall>
              </div>
          </div>


        </div>
    </div>
</template>
<script>
///import {changeIndex} from "../vuex/actions";

export default {
  // vuex:{
  //   actions:{
  //     change:changeIndex
  //   }
  // },
  components: {
      'waterfall': Waterfall.waterfall,
      'waterfall-slot': Waterfall.waterfallSlot
  },
  data() {
      return {
          align: 'center',
          itemslist: [],
          content: {},
          isBusy: false
      }
  },

  methods: {

      addItems: function() {
          if (!this.isBusy && this.items.length < 500) {
              this.isBusy = true
              this.items.push.apply(this.items, ItemFactory.get(50))
          }
      },
      shuffle: function() {
          this.items.sort(function() {
              return Math.random() - 0.5
          })
      },
      reflowed: function() {
          this.isBusy = false
      }
  },
  mounted: function() {
      this.$nextTick(function() {

          this.$http.get('http://www.htmlk.cn/vuejson/index.json')
              .then(
                  (res) => {
                      this.list = res.body.data
                      console.log(res.body.data);
                      this.content = res.body.data;
                      for (var i = 0; i < res.body.data.length; i++) {
                          this.itemslist.push(res.body.data[i].images_list[0])
                      }
                      //  console.log(this.itemslist);
                      setTimeout(function() {
                          var myScroll = new IScroll('#app', {
                              
                          });
                      }, 1500)
                  }
              )


      })
  }


}
</script>
