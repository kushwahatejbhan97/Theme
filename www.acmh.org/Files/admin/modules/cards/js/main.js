(function( $ ) {
	$.fn.CardCatalog = function() {
		var $filter = $(this);
		var $listing = $filter.find(".cards-list");
		var $pagination = $filter.find(".pagination");

		var page = parseInt($pagination.data("current-page"));
		var pages = parseInt($pagination.data("pages"));

		$filter.find("select[name='search_category']").change(function(){
			$filter.submit();
		});

		$filter.find(".btn-clear-filter").click(function(){
			$filter.clearForm();
			$filter.submit();
		});

		$pagination.find("a[data-page]").each(function(){
			$(this).click(function(){
				$a = $(this);
				var p = parseInt($a.attr("data-page"));
				goToPage(p);
			});
		});
		$pagination.find("a[data-prev]").each(function(){
			$(this).click(function(){
				var p = page-1;
				if (p>=1 && p<=pages) goToPage(p);
			});
		});
		$pagination.find("a[data-next]").each(function(){
			$(this).click(function(){
				var p = page+1;
				if (p>=1 && p<=pages) goToPage(p);
			});
		});

		function goToPage(p) {
			$pagination.find("li").removeClass("active");
			$pagination.find("a[data-page='"+p+"']").parent().addClass("active");
			$listing.find("li[data-page]").hide();
			$listing.find("li[data-page='"+p+"']").show();
			page = p;
		}

	}
})(jQuery);

$("#card-catalog-app").CardCatalog();

