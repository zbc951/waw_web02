    //header按鈕

$(function(){
    $('header .inputBox').click(function(){
        $(this).addClass('active');
    })
    $('header .inputBox input').blur(function(){
        $('header .inputBox').removeClass('active');
    })
    var handle = null;
	$('header .inputBox').mouseover(function(){
		
		clearTimeout(handle);
	}).mouseout(function(){
		handle = setTimeout(function(){
			$('header .inputBox').removeClass('active');
		},1500);
	})

    $('.webBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mainBox').attr('class','mainBox web');
    })
    $('.mobileBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mainBox').attr('class','mainBox mobile');
    })
})

    //mainBox左右拖曳滑動效果

$(function(){
    var drag = function(obj){  

        obj.bind("mousedown",start);  

        function start(event){  
            if(event.button == 0){//判斷是否點選滑鼠左鍵  
                gapX=event.clientX;
                startx = $(window).scrollLeft();  // scroll的初始位置

                //movemove事件必須繫結到$(document)上，滑鼠移動是在整個螢幕上的  
                $(document).bind("mousemove",move);  
                //此處的$(document)可以改為obj  
                $(document).bind("mouseup",stop);                           
            }  
            return false;//阻止預設事件或冒泡  
        }  
        function move(event){  
            var left = event.clientX-gapX; // 滑鼠移動的相對距離

            $(window).scrollLeft(startx - left );

            return false;//阻止預設事件或冒泡  
        }  
        function stop(){  
            //解繫結，這一步很必要，前面有解釋  
            $(document).unbind("mousemove",move);  
            $(document).unbind("mouseup",stop);  
        }  
    }  

    obj = $(".mainBox");  

    drag(obj);//傳入的必須是jQuery物件，否則不能呼叫jQuery的自定義函式 
})

    //自動抓取herf

$(function(){
    $('.img').each(function(index){
        $('#web_demo'+index+' .img').css('background','url(./images/demoImg/web_demo'+index+'.jpg)');
        $('#web_demo'+index+' .link').attr('href','./images/demoImg/web_demo'+index+'.jpg');
        $('#mobile_demo'+index+' .img').css('background','url(./images/demoImg/mobile_demo'+index+'.jpg)');
        $('#mobile_demo'+index+' .link').attr('href','./images/demoImg/mobile_demo'+index+'.jpg');
        $('.img').css('background-size','cover');
    })
})

    //假推flex

$(function(){
    var s = $('ul').children('s');
    $('.forWeb .img').each(function(index){
        $(s).clone().appendTo('ul');
        $(s).clone().appendTo('.shoppingWindow');
    })
})

    //回到頂端按鈕

$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 1){
                $(".gotop").fadeIn('200');
        } else{
                $(".gotop").fadeOut('200');
        };
    })
    $(".gotop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop:0
        },500);
    })
})

    //隱藏列達成條件

$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 1){
                $(".hideBar").addClass('display');
                $('header').addClass('scroll');
        } else{
                $(".hideBar").removeClass('display');
                $('header').removeClass('scroll');
        };
    })
})

    //主物件hover時a跑版效果修正

$(function(){
    $('.forWeb li,.forMobile li').hover(function(){
        $(this).addClass('hoverA');
    })
    var handle = null;
    $('.forWeb li .link,.forMobile li .link').click(function(){
        handle = setTimeout(function(){
			$('.forWeb li,.forMobile li').removeClass('hoverA');
		},500);
    })
})

    //transCover觸發
    
$(function(){
    $('.enterBtn').click(function(){
        $(this).addClass('trans');
        
        setTimeout(function(){
            $('.mainAnime').fadeOut(500);
        },700)
    })
})

    //手機版調整
function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }

    catch(e){ return false;}

}
$(function(){
    if(isMobile()){
        $('.svgWrapper').css('width','900')
    }
})