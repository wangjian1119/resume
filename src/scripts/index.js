var Swiper = require("./components/swiper/swiper-3.3.1.min");
var SwiperAnimate = require("./components/swiper/swiper.animate1.0.2.min");
//console.log(Swiper);
        //动画
var swiper=new Swiper(".swiper-container", {
  onInit: function(swiper){ 
  	//Swiper2.x的初始化是onFirstInit
    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
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
    	for(var i in data){     	 
     		$("#scroller ul").append("<li class='theli'><div><img src='"+
     		data[i].images+"'/></div><div>"+
     		data[i].level+data[i].name+data[i].category+"</div></li>");
    	} 
	})

   
})

$("#skill").tap(function(){	
	$.post('/api/skill', {}, function(response){
     var data=response;
      $("#biaoti").html("个人技能")
      $(".active").removeClass("active");
      $("#skill").addClass("active");
     $("#scroller ul").html("");
     for(var i in data){
	    		$("#scroller ul").append("<li class='theli'><div><img src='"+
	     		data[i].images+"'/></div><div>"+
	     		data[i].level+data[i].name+data[i].category+"</div></li>");
     }
	})
})
$("#work").tap(function(){	
	$.post('/api/work', {}, function(response){
    var data=response;
     $("#biaoti").html("个人经历");
     $(".active").removeClass("active");
      $("#work").addClass("active");
    $("#scroller ul").html("");
    	for(var i in data){     	 
     		$("#scroller ul").append("<li class='theli'><div><img src='"+
     		data[i].image+"'/></div><div>企业类型: "+
     		data[i].category+"<br />企业名称: "+
     		data[i].name+"<br />公司职位: "+
     		data[i].posts+"<br />工作时间: "+
     		data[i].time+"</div></li>");
    	}
	})
})
$("#project").tap(function(){	
	$.post('/api/project', {}, function(response){
    var data=response;
    $("#biaoti").html("个人项目");
    $(".active").removeClass("active");
      $("#project").addClass("active");
    $("#scroller ul").html("");
    	for(var i in data){  
     		$("#scroller ul").append("<li class='theli'><div><a href='"+data[i].url+
     		"'><img src='"+
     		data[i].images+"'/></a></div><div>项目名称："+
     		data[i].name+"<br />"+data[i].description+""+data[i].detail+"</div></li>");
    	}
	})
})

$("#my").tap(function(){	
	$.post('/api/me', {}, function(data){
		$("#biaoti").html("联系方式 ");
		$(".active").removeClass("active");
      	$("#my").addClass("active");
    	$("#scroller ul").html("");
    	$("#scroller ul").append("<li class='meli'><img src='"+
    	data.images+"' class='ani'/></li><li class='meli'>姓名：王建</li><li class='meli'>手机号:17854294250</li><li>QQ邮箱：651196692@qq.com</li>");
  })
    
})