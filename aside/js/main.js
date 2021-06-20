$(function(){

	'use strict';

	var carousel  = function() {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	}
	carousel();

	var toggleMenu = function() {
		var aside = $('.js-probootstrap-aside'),
			main = $('.js-probootstrap-main');
		$('.js-probootstrap-toggle').on('click', function(e) {
			aside.addClass('active');
			main.addClass('mobile-open');
			e.preventDefault();
		});
		$('.js-probootstrap-close-menu').on('click', function(e) {
			aside.removeClass('active');
			main.removeClass('mobile-open');
			e.preventDefault();
		});

		$(document).mouseup(function(e) {
			var container = $(".probootstrap-aside");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      aside.removeClass('active');
	      main.removeClass('mobile-open');
	    }
    });
    
	};
	toggleMenu();

	var contentWayPoint = function() {
		var i = 0;
		jQuery('.probootstrap-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .probootstrap-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn probootstrap-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft probootstrap-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight probootstrap-animated');
							} else {
								el.addClass('fadeInUp probootstrap-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	if ($('.probootstrap-main').length > 0 ) {
		$('.probootstrap-main').imagesLoaded( {
		  
		  },
		  function() {
		  	if ($('.card').length > 0 ) {
		    	$('.card').addClass('img-loaded');
		    }
		  }
		);
	}



});

/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, if you want to download Gurbani Satus or Images, So please checkout Pretier");
  let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  pinterestBtn.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();