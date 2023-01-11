(function ($) {
    'use strict';
    var _state = {}
    const selectorsClick = [
        // '#secondary .widget .product-categories a',
        // '#secondary .widget .product-brands a',
        '#secondary .widget .woocommerce-widget-layered-nav-list a',
        '#secondary .widget.widget_layered_nav_filters a',
        '#secondary .widget.widget_rating_filter a',
        // '#secondary .widget_product_tag_cloud a',

        '#melawell-canvas-filter .widget .product-categories a',
        '#melawell-canvas-filter .widget .product-brands a',
        '#melawell-canvas-filter .widget .woocommerce-widget-layered-nav-list a',
        '#melawell-canvas-filter .widget.widget_layered_nav_filters a',
        '#melawell-canvas-filter .widget.widget_rating_filter a',
        '#melawell-canvas-filter .widget_product_tag_cloud a',
        '.melawell-active-filters a',
        '#main ul.products + .melawell-woocommerce-pagination a',
    ];

    $('body').on('click', selectorsClick.join(','), (event) => {
        event.preventDefault();
        let $this = $(event.currentTarget);
        if($this.closest('.widget_layered_nav_filters').length > 0){
            $this.closest('li').remove();
        }
        let url = $this.attr('href');
        let objUrl = new URL(url);
        let search = location.search.substring(1);
        if(search) {
            search = decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"');
            search = JSON.parse('{"' + search + '"}');
            if (search['woocommerce_archive_layout']){
                objUrl.searchParams.append('woocommerce_archive_layout',search['woocommerce_archive_layout']);
            }
            if (search['woocommerce_catalog_columns']){
                objUrl.searchParams.append('woocommerce_catalog_columns',search['woocommerce_catalog_columns']);
            }
        }
        scrollUp();
        sendRequest(objUrl.toString());
    });

    $(window).on("popstate", () => {
        if (history.state && history.state.woofilter) {
            renderHtml(history.state);
        }
    });

    function scrollUp() {

        let position = $('#primary').offset().top;

        if ($('#wpadminbar').length > 0) {
            position -= $('#wpadminbar').outerHeight();
        }
        if ($(window).scrollTop() > position) {
            $('html, body').animate({scrollTop: position}, 'slow');
        }
    }

    function sendRequest(url, replace = true) {
        var $products = $('ul.melawell-products');
        if($products.hasClass('products-list')){
            $products.addClass('preloader');
        }else{
            $('>li', $products).html('<div class="skeleton-body"><div class="skeleton-item skeleton-product"></div></div>');
        }
        $.post(url, (data) => {

            if (data) {
                let $html = $(data);
                let breadcrumb = data.split('<!--Start Breadcrumb-->')
                let state = {
                    woofilter: true,
                    title: $html.filter('title').text(),
                    sidebar: $html.find('#secondary').html(),
                    filter: $html.find('.melawell-canvas-filter-wrap').html(),
                    pagetitle: $html.find('#page-title-bar').html(),
                    breadcrumb: $(get_content_ajax(data, '<!--Start Breadcrumb-->', '<!--End Breadcrumb-->')).html(),
                };
                window.history.pushState(state, state.title, url);
                state.content = $html.find('#primary');
                renderHtml(state);
            }
        })
    }

    function get_content_ajax(data, split1, split2){
        var arr = data.split(split1);
        if(arr.length > 1){
            var arr2 = arr[1].split(split2);
            if(arr2.length > 0){
                return arr2[0].trim();
            }
        }
        return '';
    }

    function renderHtml(state) {
        let clearFilters = state.content.find('.melawell-active-filters');
        if(clearFilters.length > 0){
            if($('#primary .melawell-active-filters').length > 0){
                $('#primary .melawell-active-filters').html(state.content.find('.melawell-active-filters').html());
            }else{
                $('#primary .melawell-sorting').after('<div class="melawell-active-filters">' + state.content.find('.melawell-active-filters').html() + '</div>');
            }
        }else{
            $('#primary .melawell-active-filters').remove();
        }
        $('head title').text(state.title);
        $('#primary .woocommerce-result-count').html(state.content.find('.woocommerce-result-count').html());
        $('#primary .melawell-products').html(state.content.find('.melawell-products').html());
        $('#primary .melawell-woocommerce-pagination').html(state.content.find('.melawell-woocommerce-pagination').html());
        $('#secondary').html(state.sidebar);
        $('#melawell-canvas-filter .melawell-canvas-filter-wrap').html(state.filter);
        $('#page-title-bar').html(state.pagetitle);
        $('.breadcrumb-wrap').html(state.breadcrumb);
        initPriceSlider();
        initOrdering();
        clone_sidebar();
        $(document).trigger('skeletonScreen');
    }

    function initOrdering() {
        setTimeout(() => {
            $('.woocommerce-ordering').off('change');
            $('.woocommerce-ordering').on('change', (event) => {
                let $select = $(event.currentTarget).find('.orderby');
                let url = window.location.href.replace(/&orderby(=[^&]*)?|^orderby(=[^&]*)?&?/g, '')
                    .replace(/\?orderby(=[^&]*)?|^orderby(=[^&]*)?&?/g, '?')
                    .replace(/\?$/g, '')


                if (url.indexOf('?') !== -1) {
                    url = url + `&orderby=${$select.val()}`;
                } else {
                    url = url + `?orderby=${$select.val()}`;
                }
                sendRequest(url);
            })
        }, 100);
    }

    function initPriceSlider() {
        setTimeout(() => {
            if ($('.price_slider:not(.ui-slider)').length <= 0) {
                return true;
            }
            $('input#min_price, input#max_price').hide();
            $('.price_slider, .price_label').show();

            let min_price = $('.price_slider_amount #min_price').data('min'),
                max_price = $('.price_slider_amount #max_price').data('max'),
                current_min_price = $('.price_slider_amount #min_price').val(),
                current_max_price = $('.price_slider_amount #max_price').val();

            $('.price_slider:not(.ui-slider)').slider({
                range: true,
                animate: true,
                min: min_price,
                max: max_price,
                values: [current_min_price, current_max_price],
                create: function () {

                    $('.price_slider_amount #min_price').val(current_min_price);
                    $('.price_slider_amount #max_price').val(current_max_price);

                    $(document.body).trigger('price_slider_create', [current_min_price, current_max_price]);
                },
                slide: function (event, ui) {

                    $('input#min_price').val(ui.values[0]);
                    $('input#max_price').val(ui.values[1]);

                    $(document.body).trigger('price_slider_slide', [ui.values[0], ui.values[1]]);
                },
                change: function (event, ui) {

                    $(document.body).trigger('price_slider_change', [ui.values[0], ui.values[1]]);
                }
            });
        }, 200);
    }

    function priceSlideChange() {
        $(document.body).bind('price_slider_change', (event, min, max) => {
            let url = window.location.href.replace(/(min_price=\d+\&*|max_price=\d+\&*)/g, '')
                .replace(/\?$/g, '')
            if (url.indexOf('?') !== -1) {
                url = url + `&min_price=${min}&max_price=${max}`;
            } else {
                url = url + `?min_price=${min}&max_price=${max}`;
            }
            sendRequest(url);
        })
    }

    function clone_sidebar() {
        var $canvas = $('.melawell-canvas-filter-wrap');
        if(!$('body').hasClass('shop_filter_canvas')){
            if($(window).width() < 1024){
                $('#secondary').children().appendTo(".melawell-canvas-filter-wrap");
                $('.melawell-dropdown-filter-wrap').children().appendTo(".melawell-canvas-filter-wrap");
            }else {
                $canvas.children().appendTo("#secondary");

                $canvas.children().appendTo(".melawell-dropdown-filter-wrap");
            }
        }

    }


    $(document).ready(function () {
        priceSlideChange();
        initOrdering();
    }).on('init_woocommerce_price_range', function(){
        initPriceSlider();
    });

})(jQuery);
