var Swiper=require('./components/swiper/swiper-3.3.1.min');
var swiperAnimate=require('./components/swiper/swiper.animate1.0.2.min')

var swiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  }    
 }) 

var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;

$("#myscroll").hide();
$("#enter").tap(function(){
	$("#myscroll").show();
	$(".swiper-container").hide();
	

	$.post('/api/skill', {}, function(response){
     var data=response;
     $("#scroller ul").html("");
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>熟悉程度</div><div>名称</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].level+"</div><div>"+data[i].name+"</div><div>"+data[i].time+"</div></li>"));
     }
	})


})

$("#skill").tap(function(){	
	$.post('/api/skill', {}, function(response){
     var data=response;
     $("#scroller ul").html("");
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>熟悉程度</div><div>名称</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].level+"</div><div>"+data[i].name+"</div><div>"+data[i].time+"</div></li>"));
     }
	})
})
$("#work").tap(function(){	
	$.post('/api/work', {}, function(response){
     var data=response;
     $("#scroller ul").html("");
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>单位名称</div><div>职位</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].name+"</div><div>"+data[i].posts+"</div><div>"+data[i].time+"</div></li>"));
     }
	})
})
$("#project").tap(function(){	
	$.post('/api/project', {}, function(response){
     var data=response;
     $("#scroller ul").html("");
     $("#scroller ul").append($("<li class='theli'><div>类型</div><div>熟悉程度</div><div>名称</div><div>时间</div></li>"));
     for(var i in data){
     $("#scroller ul").append($("<li class='theli'><div>"+data[i].category+"</div><div>"+data[i].description+"</div><div>"+data[i].name+"</div><div>"+data[i].detail+"</div></li>"));
     }
	})
})