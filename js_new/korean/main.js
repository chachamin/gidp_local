$(document).ready(function(){
	//  main_visul 
	var main_visual = $('.main_visual');
	    main_visual.owlCarousel({
		items: 1,
		loop: true,
		nav:true,
		dots: true,
		smartSpeed:700,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: false

	});

	//  news_slide 
	var news_slide = $('.news_slide');
	    news_slide.owlCarousel({
		items: 1,
		loop: true,
		nav:true,
		smartSpeed:500,
		dots: true,
		autoplay: true,
		autoplayTimeout: 9000,
		autoplayHoverPause: false

	});

	//  pop_slide 
	var pop_slide = $('.pop_slide');
	    pop_slide.owlCarousel({
		items: 1,
		loop: true,
		nav:true,
		dots: true,
		smartSpeed:400,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false

	});


	//  banner_sd 
	var banner_sd = $('.banner_sd');
	    banner_sd.owlCarousel({
		items: 1,
		loop: true,
		nav:true,
		dots: true,
		smartSpeed:600,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: false

	});
	
	//  banner_slide 
	var banner_slide = $('.banner_slide');
	      banner_slide.owlCarousel({	
		items: 5,
		loop: false,
		nav:true,
		dots: true,
		smartSpeed:400,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		margin: 13		
	});


	$('.news_slide .owl-item a').on('keydown', function (e) {
		if(event.keyCode == 9){
			$('.news_slide .owl-controls .owl-nav .owl-play').css('display','inline-block');
			$('.news_slide .owl-controls .owl-nav .owl-stop').css('display','none');
			$('.news_slide .owl-controls .owl-dots div:first-child a').trigger('click');
			$(this).parent().parent().parent().trigger('stop.owl.autoplay');
			$('.news_slide .cloned div a').removeAttr('href').attr('title','cloned');
		} //end if
	});

	$('.main_visual .owl-item a').on('keydown', function (e) {
		if(event.keyCode == 9){
			$('.main_visual .owl-controls .owl-nav .owl-play').css('display','inline-block');
			$('.main_visual .owl-controls .owl-nav .owl-stop').css('display','none');
			$('.main_visual .owl-controls .owl-dots div:first-child a').trigger('click');
			$(this).parent().parent().parent().trigger('stop.owl.autoplay');
			$('.main_visual .cloned div a').removeAttr('href').attr('title','cloned');
		} //end if
	});

	$('.pop_slide .owl-item a').on('keydown', function (e) {
		if(event.keyCode == 9){
			$('.pop_slide .owl-controls .owl-nav .owl-play').css('display','inline-block');
			$('.pop_slide .owl-controls .owl-nav .owl-stop').css('display','none');
			$('.pop_slide .owl-controls .owl-dots div:first-child a').trigger('click');
			$(this).parent().parent().parent().trigger('stop.owl.autoplay');
			$('.pop_slide .cloned div a').removeAttr('href').attr('title','cloned');
		} //end if
	});

	$('.banner_sd .owl-item a').on('keydown', function (e) {
		if(event.keyCode == 9){
			$('.banner_sd .owl-controls .owl-nav .owl-play').css('display','inline-block');
			$('.banner_sd .owl-controls .owl-nav .owl-stop').css('display','none');
			$('.banner_sd .owl-controls .owl-dots div:first-child a').trigger('click');
			$(this).parent().parent().parent().trigger('stop.owl.autoplay');
			$('.banner_sd .cloned div a').removeAttr('href').attr('title','cloned');
		} //end if
	});
	$('.banner_slide .owl-item a').on('keydown', function (e) {
		if(event.keyCode == 9){
			$('.banner_slide .owl-controls .owl-nav .owl-play').css('display','inline-block');
			$('.banner_slide .owl-controls .owl-nav .owl-stop').css('display','none');
			$('.banner_slide .owl-controls .owl-dots div:first-child a').trigger('click');
			$(this).parent().parent().parent().trigger('stop.owl.autoplay');
			$('.banner_slide .cloned div a').removeAttr('href').attr('title','cloned');
		} //end if
	});

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

	//dots에 인덱스넘버 추가
	$('.owl-carousel').each(function() {
		//Find each set of dots in this carousel
	  $(this).find('.owl-dot').each(function(index) {
		//Add one to index so it starts from 1
		$(this).children('a').text(index + 1);
	  });
	});

	//tab
	$('.news_box > ul > li > a').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('ul').css('display','block');
		$(this).parent('li').siblings('li').find('ul').css('display','none');
		$(this).parent('li').find('a.more').css('display','block');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
	});
	
});


