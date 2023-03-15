
jQuery(document).ready(function($)
{
	try
	{
		$.debug_mode	= true;
		$.locale		= 'ko';

		$('div#lnb-menu').TopMenu
		({
			'interval'				: 500,								/* 정지 시간 */
			'lnb_name'				: '.lnb-item',						/* 메뉴 영역 */
			'lnb_title_name'		: '.lnb-item-title',				/* 기본 메뉴 영역 */
			'lnb_symbol_name'		: '',								/* 기본 메뉴 심볼 이미지 영역 */
			'lnb_symbol_name'		: '.lnb-item-symbol',				/* 기본 메뉴 심볼 이미지 영역 */
			'lnb_sub_item_name'		: '.lnb-sub-item',					/* 기본 메뉴 하위 메뉴 영역 */
			'lnb_sub_name'			: '.lnb-sub',						/* 기본 메뉴 하위 메뉴 */
			'lnb_active_css'		: 'active',							/* 기본 메뉴 선택 또는 마우스 오버시 class 명 */
			'lnb_sub_active_css'	: ''								/* 하위 메뉴 선택 또는 마우스 오버시 class 명 */
		});
		
		$('ul.quickmenu-tools').QuickMenu
		({
			'font_expansion'				: '.font-expansion',		/* 글씨 확대 */
			'font_reduction'				: '.font-reduction',		/* 글씨 축소 */
			'doc_print'						: '.doc-print'				/* 인쇄 */
		});

		/* 일정 팝업창 처리*/
        $('a.popup-calendar').attr('target', '_calendarFrame:500:450:0').OpenCalendarPopup();
		/* 일반 팝업창 처리 */
        $('a.open-popup').OpenPopup();

		$('form#familysite-form').submit(function ()
		{
			if ($(this).children('select#site-url').val() == '')
			{
				alert('이동할 관련 사이트를 선택 하여 주십시오.');
			}
			else
			{
				window.open($(this).children('select#site-url').val());
			}
			return false;
		});
	}
	catch (e)
	{

	}


	// skip focus
	$("#skipNavi > a").click(function(){
	$($(this).attr("href"))
	  .attr("tabindex","0")
	  .css("outline","0")
	  .focus();
	});

	//  gotop top 
	$(".top").click(function(){
		$("html, body").animate({scrollTop:0}, 800);
	});
	$(".bottom").click(function(){
		$('html, body').animate({ scrollTop: $(document).height()},800);
	});
	
	$('#main #header').addClass('header_ov');

});

// 상단으로 나타나기 
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 250 ) {
		$( '.loca_nav' ).fadeIn(500);
	} else {
		$( '.loca_nav' ).fadeOut(500);
	}
});

//  gnb  
function web_menu(a){
	var lnb = $('#gnb'),
	depth1 = $(".top1menu");
	depth1.find(" > li > div").addClass('top2m');
	depth1.find(" > li").each(function(){
		var Index = $(this).index()+1;
		$(this).addClass('rule'+Index);
	});
	depth1.find("ul ul").show();
	mask = $( '.tmnBg' );

	var depth2 = $('.top1menu .top2m'),
		lnbLeave = $("#container");

	depth2.hide();
	depth1.find(" > li > a").off();

	var dep1_length = depth1.find(" > li").size();
	for (i=1;i <= dep1_length;i++) {
		depth1.find("> li:nth-child("+i+") .top2m").addClass('m'+i);
	}

	depth1.find(" > li").on('mouseenter focusin',function(event){
		$(this).addClass('hover');
		$('#main #header').removeClass('header_ov');
	});
	
	depth1.find(" > li").on('mouseleave focusout',function(event){
		$(this).removeClass('hover');
		$('#main #header').addClass('header_ov');
	});

	depth1.find(" > li > a").on('mouseenter focusin',function(event){
		event.preventDefault ();

		depth2.hide();
		$(this).parent('.depth1').find('.top2m').stop().slideDown('6000');
		depth1.addClass('on');
		mask.stop().slideDown('6000');
	});

	depth1.mouseleave(function(){
		mask.stop().slideUp('6000');
		depth2.stop().slideUp('6000');
		depth1.removeClass('on');
	});
	$('.depth1').on('mouseleave',function(){
	 	$(this).find('.top2m').stop().slideUp('6000');
	});
	
	lnbLeave.focusin(function(){
		mask.stop().slideUp('6000');
		depth2.stop().slideUp('6000');
		depth1.removeClass('on');
	});

};


$(function () {
	$(window).on({
		load: function () {
			if ($(window).width() > 1000) {
				web_menu();
			}
		}
	});
});

// fixed header(pc)
$(window).scroll(function() {
	if($(window).width() >1200) {
		var scroll = $(window).scrollTop();
		if (scroll >= 180) {
			$("#header").addClass("sticky");

		} else {
			$("#header").removeClass("sticky");	
		}
	}
});

(function ($) {
    $(document).ready(function () {
        screenViewInit();
        function screenViewInit() {
            var $body = $('body'),
            $zoominbtn = $('.screen-plus'),
            $zoomoutbtn = $('.screen-minus'),
            defalutZoom = 1;

            /* zoom in */
            function zoomIn() {
                defalutZoom = defalutZoom + 0.2;
                if (defalutZoom >= 1.25) {
                    defalutZoom = 1.25;
                    alert("더이상 확대가 불가능 합니다.");
                }
                $body.addClass('zoomin');
                zoomEffect();
            }

            /* zoom out */
            function zoomOut() {
                defalutZoom = defalutZoom - 0.2;
                if (defalutZoom < 1) {
                    defalutZoom = 1;
                    alert("더이상 축소가 불가능 합니다.");
                }
                if (defalutZoom <= 1) {
                    $body.removeClass('zoomin');
                }
                zoomEffect();
            }

            /* zoom effect */
            function zoomEffect() {
                TweenMax.killTweensOf($body);
                TweenMax.to($body, 0.5, {
                    css: {
                        scaleX: defalutZoom,
                        scaleY: defalutZoom,
                        transformOrigin: "center top"
                    }, ease: Power1.easeInOut
                });
            }

            /* zoom add event */
            function addEvent() {
                $zoominbtn.on('click', zoomIn);
                $zoomoutbtn.on('click', zoomOut);
            }

            addEvent();
        }
    });
})(jQuery);

// 마우스 우클릭 금지
document.oncontextmenu = new Function ('return false');



