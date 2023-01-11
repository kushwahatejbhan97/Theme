(function( $ ) {
	$.fn.ResourceCatalog = function() {
		var $filter = $(this);

		$filter.find(".btn-clear-filter").click(function(){
			$filter.clearForm();
			$filter.submit();
		});

		$filter.submit(function(){
			Filter_BeforeSubmit();
		});

		$filter.find(".pagination li a").each(function(){
			var $a = $(this);
			$a.click(function(){
				if (!$a.parent().hasClass("disabled")) {
					goToPage($a.data("page"));
				}
			});
		});


		function goToPage(p) {
			$filter.find("input[name='page']").val(p);
			$filter.submit();
		}

		function Filter_BeforeSubmit() {
			$filter.find("input[type='text'], input[type='hidden'], select").each(function(){
				var $fld = $(this);
				if (""+$fld.val()=="") $fld.attr("disabled", true);
			});
		}
	}
})(jQuery);

$("#frmResourceFilter").ResourceCatalog();

