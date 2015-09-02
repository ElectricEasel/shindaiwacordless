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
	$(window).resize(function(){
		if($(window).innerWidth() > 767) {
			return 0;
		}
		$('#main-nav ul.sub-level').each(function(){
			if($(this).parent().hasClass('special')) {
				return 0;
			}
			$(this).css('height','auto');
			var height = $(this).height();
			$(this).attr('data-height',height);
			$(this).css('height','0');
		});
	});
	var parent = $('.parent > a');
	parent.click(function(){
		var grandparent = $(this).parent('li');
		if($(this).parent('li').hasClass('special')) {
			return 0;
		}
		var trueClass = false;
		$(this).parent('li').toggleClass('expanded');
		$('#main-nav ul.sub-level').css('height','0');
		var height = $(this).parent('li').children('#main-nav ul.sub-level').attr('data-height');
		if($(this).parent('li').hasClass('expanded')) {
			$(this).parent('li').children('#main-nav ul.sub-level').css('height',height);
			trueClass = true;
		}
		parent.parent('li').removeClass('expanded');
		if(trueClass) {
			$(this).parent('li').addClass('expanded');
		}
		if($(this).hasClass('parent-link')) {
			return false;
		}
	});

	var special = $('.parent.special > a');
	var returnMenu = $('.back');
	special.click(function(){
		if($(window).innerWidth() > 767) {
			return 0;
		}
		if($(this).parent('li').hasClass('expanded')) {
			return false;
		}
		$('#main-nav ul.main-level > li').hide();
		returnMenu.show();
		$(this).parent('li').show();
		$(this).parent('li').toggleClass('expanded');
		$(this).parent('li').children('#main-nav ul.sub-level').css('height','auto');
		if($(this).hasClass('parent-link')) {
			return false;
		}
	});
	returnMenu.click(function(){
		$('#main-nav ul.sub-level').css('height','0');
		parent.parent('li').removeClass('expanded');
		$('#main-nav ul.main-level > li').show();
		returnMenu.hide();
	});
})
function equalHeights(columns) {
	var maxHeight = 0;
	columns.each(function(){
		$(this).outerHeight('auto');
		if ($(this).outerHeight() > maxHeight) {
			maxHeight = $(this).outerHeight();
		}
	});
	columns.each(function(){
		if ($(this).outerHeight() <= maxHeight) {
			$(this).outerHeight(maxHeight);
		}
	});
}