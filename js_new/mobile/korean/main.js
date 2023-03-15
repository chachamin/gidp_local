$(document).ready(function(){
	//  main_visul 
	var main_visual = $('.main_visual');
	    main_visual.owlCarousel({
		items: 1,
		loop: true,
		nav:true,
		dots: false,
		smartSpeed:700,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: false

	});

	//  mnews_slide 
	var mnews_slide = $('.mnews_slide');
	    mnews_slide.owlCarousel({
		items: 1,
		loop: true,
		nav:true,
		dots: false,
		smartSpeed:700,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: false
		//animateOut: 'slideOutUp',
		//animateIn: 'slideInUp'

	});

	//포커스시 맨첫번째로 - 메인비주얼
	 $('.owl-carousel .owl-item a').on('focus', function() {		   
		   $('.owl-carousel .owl-play').css('display','inline-block');
		   $('.owl-carousel .owl-stop').css('display','none');
		   $(".owl-carousel .owl-controls .owl-dots div:first-child a").trigger('click');
		   $(".owl-carousel").trigger('stop.owl.autoplay');
	 });
	// cloned a태그 제거
	$('.cloned a').removeAttr('href');//탭이동시 링크잡히지 않게
	$('.cloned div a').attr('title','cloned');//타이틀등록

	// 공통 재생 멈춤 
	$('.owl-play').on('click', function() {
		$(this).parent().parent().parent().trigger('play.owl.autoplay', [3000])
		$(this).siblings('a').css('display','inline-block');
		$(this).css('display','none');		
	      });
	$('.owl-stop').on('click', function() {
		$(this).parent().parent().parent().trigger('stop.owl.autoplay');
		$(this).siblings('a').css('display','inline-block');
		$(this).css('display','none');
	});


});
