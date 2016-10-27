//noop                                                                          
let vueDialog=function(){};

import dialog from "./vue-dislog.vue";

VueDialog.install=function(){
  // Vue.diretive('dialog',function(){
  //
  // })
  Vue.component('dialog',dialog);
};
