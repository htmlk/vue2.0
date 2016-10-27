var _waterfall = function (liveScroll) {
  var dataArr = [];

  function getData() {
    $.ajax({
      url: '/rest/listwaterfall',
      async: false,
      success: function (rs) {
        dataArr = rs.data;
      }
    });
  }

  var boxArr, num, columnHeightArr;

  function render(){
    getData();
    $.each(dataArr,
      function (index, item) { 
        $('#waterfall').append('<div class="box box-item"><div class="gap">' +
        '<div class="img" style="height:0;padding-bottom:' + cRate(item) * 100 + "%" + '" data-src="' + item.img + '"></div>' +  
        '<div class="desc">' + item.title + '</div>' +
        '</div></div>'); 
      }); 

      boxArr = $('.box');
      num = Math.floor(document.body.clientWidth / boxArr.eq(0).width());
      columnHeightArr = [];
      columnHeightArr.length = num;
      arrangement(); 　　
      $('#waterfall').css('minHeight', Math.max.apply(null, columnHeightArr));  
      liveScroll.refresh();
      lazyLoad();
  }

  function arrangement() { 
      boxArr.each(function (index, item) { 
          if (index < num) { 
              columnHeightArr[index] = $(item).height(); 
          } else { 
              var minHeight = Math.min.apply(null, columnHeightArr),
                  minHeightIndex = $.inArray(minHeight, columnHeightArr); 
              $(item).css({  
                  position: 'absolute',
                  top: minHeight,
                  left: boxArr.eq(minHeightIndex).position().left
              }); 
              columnHeightArr[minHeightIndex] += $(item).height(); 
          } 
      }); 
  }  

  function lazyLoad() { 
      var boxArr = $('.box-item'); 
      boxArr.each(function (index, item) { 
          var viewTop = $(item).offset().top - $('#waterfall').scrollTop(),
              imgObj = $(item).find('.img'); 
          if ((viewTop < $('#waterfall').height()) && ($(item).offset().top + $(item).height() > $('#waterfall').scrollTop())) {
              imgObj.css('backgroundImage', 'url(' + imgObj.attr("data-src") + ')').removeClass('data-src'); 
              $(item).removeClass('box-item'); 
          } 
      }) 
  }  

  function cRate(obj) { 
      return obj.height / obj.width; 
  }

  render();

  liveScroll.on('scrollEnd', function() {
    if(this.maxScrollY == this.y){
      getData();
      render();
    }
  });
}

module.exports = _waterfall;
