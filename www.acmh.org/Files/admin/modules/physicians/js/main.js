(function( $ ) {
	$.fn.PhysiciansDirectory = function() {
		var $filter = $(this);
		var $detailsModal = $(".physicians-details-modal");

		$filter.find(".physicians-filter select").change(function(){
			$filter.submit();
		});

		$filter.find(".btn-clear-filter").click(function(){
			$filter.clearForm();
			$filter.submit();
		});

		$filter.find(".physicians-listing-section .phys-list").each(function(){
			var $list = $(this);
			$list.LoadMore();

			$list.find(".item-wrap").each(function(){
				var $block = $(this);

				$block.find(".hover-link[data-id]").click(function(){
					$details = $("#item-detail-info-"+$(this).data("id")).html();
					$detailsModal.find(".detils-wrap").html($details);
					$detailsModal.modal("show");
				});

			});
		});


	}
})(jQuery);

$("#frmPhysicians").PhysiciansDirectory();

