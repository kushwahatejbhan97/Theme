(function( $ ) {
	$.fn.SiteSearch = function() {
		var $container = $(this);
		var $form = $container.find("form").first();
		var $sstr = $form.find("input[name='sstr']");

		$container.click(function(){
			$container.addClass("expanded");
		});


		$sstr.on("focusout", function(){
			if (""+$sstr.val()=="") {
				$container.removeClass("expanded");
			}
		});


		$form.submit(function(e){
			if (!$container.hasClass("expanded") || ""+$sstr.val()=="") {
				$container.addClass("expanded");
				e.preventDefault();
			}
		});

	}
})(jQuery);

$(document).ready(function(){
	$("#top-search").SiteSearch();
});