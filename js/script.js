$(document).ready(function(){
	$('#nav-toggle').click(function(){
		toggleMenuExpand();
	});
	$('#backdrop').click(function(){
		toggleMenuExpand();
	});

	function toggleMenuExpand() {
		$('#main-nav').toggleClass('collapsed');
		$('body').toggleClass('expanded');
		$('#backdrop').toggleClass('collapsed');
	}

	$('#search-icon').click(function(){
		$('#search-bar').css('z-index','777');
		var search = $('input#search');
		search.toggleClass('collapsed');
		$('header').toggleClass('search-expanded');

		if(!search.hasClass('collapsed')) {
			$('#search-bar').css('z-index','999');
			search.focus();
		}
	});

	var marketingCarousel = $('#marketing-carousel');
	marketingCarousel.owlCarousel({
		dots: false,
		responsive: {
			0: {
				autoplay:true,
				items:1,
				margin:0,
				loop:true,
				mouseDrag:true,
				touchDrag:true,
				pullDrag:true
			},
			481: {
				autoplay:true,
				items:2,
				margin:25,
				loop:true,
				mouseDrag:true,
				touchDrag:true,
				pullDrag:true
			},
			768: {
				autoplay:false,
				items:3,
				margin:25,
				loop:false,
				mouseDrag:false,
				touchDrag:false,
				pullDrag:false
			}
		}
	});
});

$(window).load(function(){
	$('ul.sub-level').each(function(){
		if($(this).parent().hasClass('special')) {
			return 0;
		}
		$(this).css('height','auto');
		var height = $(this).height();
		$(this).attr('data-height',height);
		$(this).css('height','0');
	});
	var parent = $('.parent');
	parent.click(function(){
		if($(this).hasClass('special')) {
			return 0;
		}
		var trueClass = false;
		$(this).toggleClass('expanded');
		$('ul.sub-level').css('height','0');
		var height = $(this).children('ul.sub-level').attr('data-height');
		if($(this).hasClass('expanded')) {
			$(this).children('ul.sub-level').css('height',height);
			trueClass = true;
		}
		parent.removeClass('expanded');
		if(trueClass) {
			$(this).addClass('expanded');
		}
	});

	var special = $('.parent.special');
	var returnMenu = $('.back');
	special.click(function(){
		if($(window).innerWidth() > 767) {
			return 0;
		}
		if($(this).hasClass('expanded')) {
			return 0;
		}
		$('ul.main-level > li').hide();
		returnMenu.show();
		$(this).show();
		$(this).toggleClass('expanded');
		$(this).children('ul.sub-level').css('height','auto');
	});
	returnMenu.click(function(){
		$('ul.sub-level').css('height','0');
		parent.removeClass('expanded');
		$('ul.main-level > li').show();
		returnMenu.hide();
	})
})