// JavaScript Document

//滑到指定區域
	$(function(){
		function fnScroll(){
			var sGoto = $(this).attr("rel");
			var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
			
			$body.animate({
				scrollTop:$(sGoto).offset().top-250
			}, 500);
			
			return false;
		}
		
		$(".scrollgo").on("click", fnScroll);
		
	});
	
	
//go to top


//gototop
$(function(){
	
	var iScrollPointA = 0;  //回到某一個點
	var iScrollPointB = 700;  //滾到某一個點
	
	var sGototopHtml = '<div class="gototop">TOP</div>';

	$("body").append(sGototopHtml);
	$(".gototop").hide();
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > iScrollPointB) {
			$(".gototop").show();	
		} else {
			$(".gototop").hide();	
		};
	});
	
	
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$(".gototop").click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	});
	
});