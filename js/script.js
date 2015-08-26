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
	};

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
});

$(window).load(function(){
	$('#main-nav ul.sub-level').each(function(){
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
		$('#main-nav ul.sub-level').css('height','0');
		var height = $(this).children('#main-nav ul.sub-level').attr('data-height');
		if($(this).hasClass('expanded')) {
			$(this).children('#main-nav ul.sub-level').css('height',height);
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
		$('main-nav ul.main-level > li').hide();
		returnMenu.show();
		$(this).show();
		$(this).toggleClass('expanded');
		$(this).children('#main-nav ul.sub-level').css('height','auto');
	});
	returnMenu.click(function(){
		$('#main-nav ul.sub-level').css('height','0');
		parent.removeClass('expanded');
		$('main-nav ul.main-level > li').show();
		returnMenu.hide();
	});
})