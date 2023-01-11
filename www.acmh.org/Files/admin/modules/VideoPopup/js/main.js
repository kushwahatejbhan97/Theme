(function( $ ) {
	$.fn.VideoModalPopup = function() {
		var $modal = $(this);
		var $iframe = $modal.find(".modal-body iframe");

		$(".video-wrap[data-video]").each(function(){
			var $video = $(this);
			var $thumb = $video.find("img");
			$thumb.wrap('<a href="javascript:void(0)"></a>');

			$video.find("a").click(function(){
				$iframe.attr("data-video-src", $video.data("video"));
				$modal.modal("show");
			});
		});

		$(".video-link-popup[data-video]").each(function(){
			$(this).click(function(){
				$iframe.attr("data-video-src", $(this).data("video"));
				$modal.modal("show");
			});
		});

		$modal.on("hidden.bs.modal", function () {
			$iframe.attr("src", "");
		});

		$modal.on("shown.bs.modal", function() {
			$iframe.attr("src", $iframe.data("video-src"));
		});

	}
})(jQuery);

$(document).ready(function(){
	$("#video-modal-popup").VideoModalPopup();
});
