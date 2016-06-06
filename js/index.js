$(function(){
var scrollbar=$(".scrollbox");
var inner=$(".cont_cont");
var scrollbtn=$(".scrollbtn");
var listbtn=$(".listbtn");
var span=$(".listbtn>span");
var listlc=$(".list_lc");
var num=inner.eq(0).height()/listlc.eq(0).height();
var bw=scrollbar.height();
var tem=0;
scrollbtn.css({"height":bw/num});
//滚轮事件 begin
function Ab(){
  if(num>1){
  	scrollbar.css({"display":"block"});
  	scrollbtn.css({"height":bw/num});
  	//拖动滚动条 begin
  	scrollbtn.mousedown(function(e){
  	num=inner.eq(tem).height()/listlc.eq(tem).height();
		var oy=e.offsetY;
		var bh=scrollbar.eq(tem).height();
		var dh=$(this).height();
		$(document).mousemove(function(e){
			e.preventDefault();
			var cy=e.clientY;
			var top=cy-oy;
			if(top<0){
				top=0;
			}
			if(top>bh-dh){
				top=bh-dh;
			}
			scrollbtn.eq(tem).css({"top":top});
			inner.eq(tem).css({"marginTop":-num*top});
			val=scrollbtn.position().top;
		})
		$(document).mouseup(function(){
			$(this).off("mousemove")
		})
	})
	//拖动滚动条 end
var val=scrollbtn.position().top;
  inner.bind("mousewheel",function(event){
  	event.preventDefault();
  	if(event.deltaY==-1){
  	var aa=$(".scrollbtn").height()
  	if(val>=bw-aa){
  		scrollbtn.css({"top":bw-aa});
  		$(this).css({"marginTop":-num*(bw-aa)});
  	}else{
  		val+=8
  		scrollbtn.css({"top":val});
  		$(this).css({"marginTop":-num*val});
  	}
  	}else if(event.deltaY==1){
  		if(val<=0){
		scrollbtn.css({"top":0});
  		$(this).css({"marginTop":0});
  		}else{
  		val-=8
  		scrollbtn.css({"top":val});
  		$(this).css({"marginTop":-num*val});
  		}
  	}
	
  })
}else{
	scrollbar.css({"display":"none"});
}
}
//滚轮事件 end

//当屏幕宽度发生变化
resize(resize)
$(window).resize(resize);
	function resize(){
		num=inner.eq(tem).height()/listlc.eq(tem).height()
		scrollbtn.css({"height":bw/num});
		Ab();
		var CW=$(window).width()
		if(CW<768){
			listbtn.eq(0).css({"background":"#288998"});
			listbtn.not(tem).css({"background":""});
			listbtn.eq(tem).css({"background":"#4F454B"});
		}else{
			listbtn.eq(0).css({"background":"#fff"});
			span.eq(0).css({"background":"#3b5998","color":"#fff"});
			listbtn.not(tem).css({"background":""});
			listbtn.eq(tem).css({"background":"#fff"});
			span.not(tem).css({"background":"","color":""});
			span.eq(tem).css({"background":"#3b5998","color":"#fff"});
			scrollbtn.css({"top":0});
  			inner.css({"marginTop":0});
		}
	}


//内容选项卡 点击
function Ba(){
	listbtn.click(function(){
		var aa=$(this).index(".listbtn");
		tem=aa;
		listlc.not(aa).css({"display":"none"});
		listlc.eq(aa).css({"display":"block","animation":"up .7s cubic-bezier(1,1.93,.59,.73)"});
		num=inner.eq(aa).height()/listlc.eq(aa).height();
		resize();	
		if (aa=1) {
			$(".sk_bar").css({animation:"sk 1s linear 1s forwards"})
		}else{
			$(".sk_bar").css({width:"20%"})
		}
	})
}
Ba();


//作品选项卡 背景颜色变化
function Cd(){
	var btn=$(".word_list>li");
	var word=$(".word_inner");
	var wordz=$(".word_zz");
	var wordx=$(".word_xys");
	var wordl=$(".word_lx");
	btn.eq(0).css({"background":"#86B0E2"});
	btn.click(function(){
	  btn.not($(this)).css({"background":""});
      $(this).css({"background":"#86B0E2"});
      var aa=$(this).index();
      if(aa==0){
          word.css({display:"block"})
      }else if(aa==1){
      	word.css({display:"none"});
      	 wordz.css({"display":"block"});
      }else if(aa==2){
      	word.css({display:"none"});
      	 wordx.css({"display":"block"});
      }else if(aa==3){
      	word.css({display:"none"});
      	 wordl.css({"display":"block"});
      }

	})
}
Cd();


// 轮播
var N=0;
var imgs=document.getElementsByClassName('aboutimg');
setInterval(function(){
	N++;
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.opacity=0;
	};
	if (N==imgs.length) {
		N=0;
	};
	imgs[N].style.opacity=1;
	
},3000)

//标题
var title=document.title;
	document.addEventListener?document.addEventListener('visibilitychange',content):document.attachEvent('onvisibilitychange',content);
	function content() {	
		var str='我叫谭思。你快回来，看我看我！';
  		document.title = document.hidden ? str:title;
	}

})