(function( $ ) {
	$.fn.LoadMore = function(config) {
		var list = $(this);

		var loadmoreBtnsHTML_ID = list.attr("id")+'_loadmore-btn-wrap';
		var loadmoreBtnsHTML = '<div id="'+loadmoreBtnsHTML_ID+'" class="loadmore-btn-wrap text-center">'+
								'<a class="btn btn-default btn_load_more" href="javascript:void(0)" style="display:none">Load More</a>'+
								'<a class="btn btn-default btn_load_less" href="javascript:void(0)" style="display:none">Load Less</a>'+
								'<a class="btn btn-default btn_loading" onClick="javascript:void(0)">Loading <i class="fa fa-refresh fa-spin"></i></a>'+
							'</div>';
		list.after(loadmoreBtnsHTML);

		var loadmoreWrap = $("#"+loadmoreBtnsHTML_ID);
		var btnLoad = loadmoreWrap.find(".btn_load_more");
		var btnLoadLess = loadmoreWrap.find(".btn_load_less");
		var btnSpin = loadmoreWrap.find(".btn_loading");

		var pages = 0;
		var page = 0;

		Init();

		btnLoad.click(function(){
			LoadData(page+1);
		});

		btnLoadLess.click(function(){
			page = 1;

			list.find("[data-page]").hide();
			list.find("[data-page="+page+"]").show();

			btnLoad.show();
			btnLoadLess.hide(100, function(){
				$("html, body").animate({ scrollTop: $("#"+loadmoreBtnsHTML_ID).offset().top - $(window).height() + 100}, "slow");
			});

		});

		function Init() {
			list.find("[data-page]").each(function(){
				var $obj = $(this);
				$obj.hide();
				if (parseInt($obj.data("page"))>pages) pages = parseInt($obj.data("page"));
			});

			LoadData(1);
			list.show();
		}

		function LoadData(p){
			btnLoad.hide();
			btnSpin.show();

			list.find("[data-page="+p+"]").each(function(){
				$(this).show();
			});

			btnLoad.show();
			btnSpin.hide();

			page++;
			if (page==pages) {
				btnLoad.hide();
				if (pages>1) btnLoadLess.show();
			}

		}
	};
})(jQuery);


