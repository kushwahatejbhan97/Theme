$(function(){
	/********** INIT JQUERY.APPEAR **********/
	var $animateNumbers = $("#stats-section .stats-list .number");
	$animateNumbers.each(function(){
		var $n = $(this);
		$n.attr("data-number", $n.html()).html("0");
	});
	$animateNumbers.appear();

	$(document.body).on('appear', '#stats-section .stats-list .number', function(e, $affected) {
		$affected.each(function() {
			var $el = $(this);
			if (!$el.hasClass("animate-completed-flag")) {

				$el.animateNumber({
					number: parseInt((""+$el.data("number")).replace(/,/g, "")),
					numberStep: $.animateNumber.numberStepFactories.separator(',')
				},2000);

				$el.addClass("animate-completed-flag");
			}
		})
	});

	$.force_appear();
	/********** END INIT JQUERY.APPEAR **********/


	/********** INIT SKROLLR **********/
	if ($(window).width()>991 && !isTouchDevice()) {
		var s = skrollr.init({
			smoothScrollingDuration: 1000,
			mobileCheck: function(){return isTouchDevice()},
			forceHeight: false
		});
	} else {
		$("[data-scroll-animation-block=true]").addClass("animation-disabled");
	}
	/********** END INIT SKROLLR **********/

});