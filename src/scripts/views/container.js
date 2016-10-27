var indexTpl=require('./index.string');
var Vue=require('../libs/vue.js');
new Vue({
  el:"body",
  data:{
    html:indexTpl
  }
})
