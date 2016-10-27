var index=require('./index');
var index1=require('./index1');
var index2=require('./index2');

var search=require('./search');
var search1=require('./search1');
var searchlast=require('./searchlast');


module.exports=function(){
  return{
    'vuejson/index.json':index,
    'vuejson/index2.json':index1,
    'vuejson/index3.json':index2,
    'vuejson/search.json':search,
    'vuejson/search1.json':search1,
    'vuejson/searchlast.json':searchlast
  }
}
