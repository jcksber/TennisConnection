$(document).ready(function(){

	$('.program-panel').hover(
		function(){
			$(this).find('.panel-img').css("transition","all 0.5s ease-in-out");
			$(this).find('.panel-img').css("-webkit-transition","all 0.5s ease-in-out");
			$(this).find('.img-container-panel').css("transition","all 0.5s ease-in-out");
			$(this).find('.img-container-panel').css("-webkit-transition","all 0.5s ease-in-out");
			$(this).find('.img-container-panel').css("border-top","solid 10px #0073A1");
			$(this).find('h2').css("transition","all 0.5s ease-in-out");
			$(this).find('h2').css("-webkit-transition","all 0.5s ease-in-out");
			$(this).find('h2').css("margin-bottom", "0");
			$(this).find('.panel-img').css("filter","grayscale(0)");
			$(this).find('.panel-img').css("-webkit-filter","grayscale(0)");
			$(this).find('.panel-img').css("-moz-filter","grayscale(0)");
			$(this).find('.panel-img').css("-ms-filter","grayscale(0)");
			$(this).find('.panel-img').css("-o-filter","grayscale(0)");
			
		}, function(){
			$(this).css("transition","all 0.5s ease-in-out");
			$(this).css("-webkit-transition","all 0.5s ease-in-out");
			$(this).find('.img-container-panel').css("border-top","solid 10px #5E5E5E");
			$(this).find('h2').css("margin-bottom", "30px");
			$(this).find('.panel-img').css("filter","grayscale(100%)");
			$(this).find('.panel-img').css("-webkit-filter","grayscale(100%)");
			$(this).find('.panel-img').css("-moz-filter","grayscale(100%)");
			$(this).find('.panel-img').css("-ms-filter","grayscale(100%)");
			$(this).find('.panel-img').css("-o-filter","grayscale(100%)");
		}
	);
});

(function($) {

	/**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *     the user visible viewport of a web browser.
	 *     only accounts for vertical position, not horizontal.
	 */

	$.fn.visible = function(partial) {
	
		var $t            = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height(),
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
	
	return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	};
	
})(jQuery);

var win = $(window);
var allMods = $(".mod");

// Already visible modules
allMods.each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
	el.addClass("already-visible"); 
	} 
});

win.scroll(function(event) {
	
	allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("come-in"); 
		} 
	});
	
});



// 	var updates = new Array();
		// 	updates[0] = document.getElementById('committed-player-name').innerHTML;
		// 	updates[1] = document.getElementById('committed-player-school').innerHTML;
		// 	function updateCycler(){
		// 		var topic_canv = document.getElementById('cycle-topic-id');
		// 		var topic_name = '';
		// 		var topic_color = '';
		// 		var item_canv = document.getElementById('cycle-item-id');
		// 		var item_name = updates[0];
		// 		var item_detail = updates[1];

		// 		item_canv.innerHTML += item_name + ' (' + item_detail + ')';
		// 	}















