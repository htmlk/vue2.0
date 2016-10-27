//var indexTpl=require('./index.string');
//import commonUtil from '../utils/commonUtil';
//commonUtil.render(indexTpl);
var Vue=require('../libs/vue.js');
var VueResource=require('../libs/vue-resource.js');
Vue.use(VueResource);
new Vue({//this == vm
  el:'#app',
  data: {
    list:''
  },
  ready:function(){
    this.$http.get('/mock/list.json')
    .then(
      (res)=>{
        this.list=res.data.data
        console.log(this.list);
      },(res)=>{
        //console.log(res.data);//error
      }
    )
  }
});
