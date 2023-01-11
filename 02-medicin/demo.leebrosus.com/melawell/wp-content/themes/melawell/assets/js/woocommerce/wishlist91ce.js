(function($){'use strict';function ajax_wishlist_count(){$('body').on('woosw_change_count',function(event,count){var counter=$('.header-wishlist .count, .footer-wishlist .count');counter.html(count);});}
function wishlist_side(){var $wishlist_side=$('.site-wishlist-side');var $body=$('body');if(!$wishlist_side.length){return;}
$body.on('click','.header-wishlist, .footer-wishlist',function(e){melawell_woosw_load(true);});$(document.body).on('woosw_wishlist_show',function(){melawell_woosw_load();});}
function melawell_woosw_load(check=false){var $wrap_content=$('.melawell-wishlist-content');if($wrap_content.hasClass('content-loaded')&&check){return;}
var data={action:'wishlist_load',};$wrap_content.addClass('loadding');$.post(woosw_vars.ajax_url,data,function(response){if(response.content!=null){$wrap_content.html(response.content);}
if(response['notice']!=null){$wrap_content.html('<div class="woosw-content-mid-notice">'+
response['notice']+
'</div>');}
$wrap_content.removeClass('loadding');$(document.body).trigger('melawell_woosw_loaded')});$wrap_content.addClass('content-loaded');}
function melawell_woosw_load_count(){var data={action:'wishlist_load',};$.post(woosw_vars.ajax_url,data,function(response){if(response.count!=null){var counter=$('.header-wishlist .count, .footer-wishlist .count');counter.html(response.count);}});}
$(document).ready(function(){wishlist_side();ajax_wishlist_count();melawell_woosw_load_count();});})(jQuery);