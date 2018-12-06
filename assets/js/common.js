/*
* Author: ArtStyles Brands (ArtTemplate / ArtIcons)
* URL: http://themeforest.net/user/artstyles
* Template Name: FORZO
* Version: 1.0
*/

(function($) {
	"use strict";


	/*-----------------------------------------------------------------
	Detect device mobile
	-------------------------------------------------------------------*/


	var isMobile = false;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('html').addClass('touch');
		isMobile = true;
	}
	else{
		$('html').addClass('no-touch');
		isMobile = false;
	}


	/*-----------------------------------------------------------------
	Preload all images
	-------------------------------------------------------------------*/


	$(window).on('load', function(){
		setTimeout(function () {
			$('.loading').fadeOut(600);
		}, 500);
	});

	/*-----------------------------------------------------------------
	Caclculates if the element is in visual range
	-------------------------------------------------------------------*/
	function isInRange(el) {
		var winH = $(window).height();
		var winScrollTop = $(window).scrollTop();
		var elH = el.outerHeight();
		var elTop = el.offset().top;
		var elScrollTop = elTop-winScrollTop;
		var elScrollBottom = elScrollTop+elH;
		var rangeTop = 0;
		var rangeBottom = parseInt(winH*0.75);

		if((elScrollTop < rangeBottom) &&
		(elScrollBottom > rangeTop)) {
			return true;
		}else{
			return false;
		}
	}

	/*-----------------------------------------------------------------
	Init statistics
	-------------------------------------------------------------------*/
	var statistics = $('#section-statistics');
	if(statistics.length) {
		var flag = false;
		$(window).scroll(function(){
			if(isInRange(statistics) && flag == false){
				$('.amount').countTo({
					onUpdate: function (value) {
						flag = true;
					},
					onComplete: function (value) {
						flag = true;
						console.log('statistics is done!');
					}
				});
			}

		});
	}


	/*-----------------------------------------------------------------
	Collapse nav mobile
	-------------------------------------------------------------------*/


	$('.nav__v1 .dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	$('.nav__v1 .dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

	// nav v2
	$('.navbar-nav li a[href="#"]').on('click',function(){
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(400);
		return false;
	});

	$('.navbar-toggle').on('click', function(){
		$('.nav_v2').toggleClass('_white')
	});


	/*-----------------------------------------------------------------
	Fixed header
	-------------------------------------------------------------------*/


	// var header=$('.top:not(.navbar-fixed)');
	//
	// $('.top').affix({
	// 	offset: {
	// 		top: 1
	// 	}
	// });
	//
	// $('.top').on('affix.bs.affix', function() {
	// 	if (!header.hasClass('affix')){
	// 		header.addClass('animated slideInDown');
	// 	}
	// });
	//
	// $('.top').on('affix-top.bs.affix', function() {
	// 	header.removeClass('animated slideInDown');
	// });


	/*-----------------------------------------------------------------
	Jarallax
	-------------------------------------------------------------------*/


	$('.jarallax').jarallax({
	speed: 0.6,
	    type: 'scroll'
	});


	/*-----------------------------------------------------------------
	Anchor scroll
	-------------------------------------------------------------------*/


	// $('a[href^="!#"]').on('click',function (e) {
	//     e.preventDefault();
	//
	//     var target = this.hash;
	//     var $target = $(target);
	//
	//     $('html, body').stop().animate({
	//         'scrollTop': $target.offset().top
	//       }, 900, 'swing', function () {
	//           window.location.hash = target;
	//       });
	//   });


	/*-----------------------------------------------------------------
	Skrollr
	-------------------------------------------------------------------*/


	var s=skrollr.init({
	    forceHeight:false,

	    mobileCheck: function() {
	        return false;
	    }
	});


	/*-----------------------------------------------------------------
	objectFit
	-------------------------------------------------------------------*/


	// objectFitImages();


	/*-----------------------------------------------------------------
	Code Line
	-------------------------------------------------------------------*/


	// var $window = $(window)
	// window.prettyPrint && prettyPrint()


})(jQuery);
