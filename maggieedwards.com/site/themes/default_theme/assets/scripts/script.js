"use strict";

(function($) {
	// Foundation Init
	if (!$("html").hasClass("lt-ie9")) {
		$(document).foundation({
			interchange: {
				named_queries: {
					small_retina:
						"only screen and (max-width: 640px) and (-webkit-min-device-pixel-ratio: 2), only screen and (max-width: 640px) and (min--moz-device-pixel-ratio: 2), only screen and (max-width: 640px) and (-o-min-device-pixel-ratio: 2/1), only screen and (max-width: 640px) and (min-device-pixel-ratio: 2), only screen and (max-width: 640px) and (min-resolution: 192dpi), only screen and (max-width: 640px) and (min-resolution: 2dppx)",
					medium_retina:
						"only screen and (max-width: 1024px) and (min-width: 641px) and (-webkit-min-device-pixel-ratio: 2), only screen and (max-width: 1024px) and (min-width: 641px) and (min--moz-device-pixel-ratio: 2), only screen and (max-width: 1024px) and (min-width: 641px) and (-o-min-device-pixel-ratio: 2/1), only screen and (max-width: 1024px) and (min-width: 641px) and (min-device-pixel-ratio: 2), only screen and (max-width: 1024px) and (min-width: 641px) and (min-resolution: 192dpi), only screen and (max-width: 1024px) and (min-width: 641px) and (min-resolution: 2dppx)",
					large_retina:
						"only screen and (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (min--moz-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: 1025px) and (min-device-pixel-ratio: 2), only screen and (min-width: 1025px) and (min-resolution: 192dpi), only screen and (min-width: 1025px) and (min-resolution: 2dppx)"
				}
			}
		});
	} // ----------------------------------------
	// Sticky Header

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 1) {
			$(".header").addClass("active");
		} else {
			$(".header").removeClass("active");
		}
	}); // ----------------------------------------
	// Takeover Menu
	// Open

	$(document).on("click", ".js-takeover-menu", function(e) {
		e.preventDefault();
		$(".takeover-nav").addClass("open");
		$("body").addClass("noscroll");
	}); // Close

	$(document).on("click", ".js-close-takeover", function(e) {
		e.preventDefault();
		$(".takeover-nav").removeClass("open");
		$("body").removeClass("noscroll");
	}); // ----------------------------------------
	// Takeover Form
	// Open
	// Newsletter Opt-im

	$(document).on("click", ".js-takeover-form.newsletter", function(e) {
		e.preventDefault();
		$("#newsletter-modal").foundation("reveal", "open");
	}); // General Form

	$(document).on("click", ".js-takeover-form.general", function(e) {
		e.preventDefault();
		$(".takeover-form.general").addClass("open");
		$("body").addClass("noscroll");
	}); // Media Form

	$(document).on("click", ".js-takeover-form.media", function(e) {
		e.preventDefault();
		$(".takeover-form.media").addClass("open");
		$("body").addClass("noscroll");
	}); // Programs Form

	$(document).on("click", ".js-takeover-form.programs", function(e) {
		e.preventDefault();
		$(".takeover-form.programs").addClass("open");
		$("body").addClass("noscroll");
	}); // Close

	$(document).on("click", ".js-close-takeover-form", function(e) {
		e.preventDefault();
		$(".takeover-form").removeClass("open");
		$("body").removeClass("noscroll");
	}); // ----------------------------------------
	// Close Announcement

	$(document).on("click", ".js-close-announcement", function(e) {
		e.preventDefault();
		$("body").removeClass("announcement-active");
		$(".announcement").hide();
	}); // ----------------------------------------
	// Dropdown Menu

	$(document).on("click", ".dropdown-menu li .placeholder", function(e) {
		e.preventDefault();
		var menu = $(this).closest(".dropdown-menu");

		if (menu.hasClass("active")) {
			menu.removeClass("active");
		} else {
			menu.addClass("active");
		}
	});
	$(document).on("click", ".dropdown-item a", function(e) {
		var targetClass = $(e.target).data("target");
		var targetText = $(e.target).text();
		var menu = $(this).closest(".dropdown-menu");
		var placeholder = menu.find(".placeholder");
		$("#form-target")
			.removeClass("programs")
			.removeClass("media")
			.removeClass("general")
			.addClass(targetClass);
		placeholder.text(targetText);
		menu.removeClass("active");
	}); // ----------------------------------------
	// Slick

	$(".testimonial-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		fade: true,
		dots: false,
		arrows: false
	});
	$(".programs-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplay: false,
		autoplaySpeed: 8000,
		speed: 500,
		dots: true,
		appendDots: $(".slide-controls"),
		arrows: false,
		fade: true
	});
	$(".slide-controls .slick-dots button").remove();
	$(".slide-controls .slick-dots li:nth-child(1)").append('<div class="btn-slider">01</div>');
	$(".slide-controls .slick-dots li:nth-child(2)").append('<div class="btn-slider">02</div>');
	$(".slide-controls .slick-dots li:nth-child(3)").append('<div class="btn-slider">03</div>');
	$(".slide-controls .slick-dots li:nth-child(4)").append('<div class="btn-slider">04</div>');
	$(".slide-controls .slick-dots li:nth-child(5)").append('<div class="btn-slider">05</div>');
	$(".slide-controls .slick-dots li:nth-child(6)").append('<div class="btn-slider">06</div>');
	$(".slide-controls .slick-dots li:nth-child(7)").append('<div class="btn-slider">07</div>');
	$(".slide-controls .slick-dots li:nth-child(8)").append('<div class="btn-slider">08</div>');
	$(".slide-controls .slick-dots li:nth-child(9)").append('<div class="btn-slider">09</div>');
	$(".slide-controls .slick-dots li:nth-child(10)").append('<div class="btn-slider">10</div>'); // ----------------------------------------
	// Contact Form

	var step3Container = false;
	$("#program-first-name").on("change", function(e) {
		return $("#user-first-name").text(e.target.value);
	});
	$(".button.step-2").click(function(e) {
		var inputs = document.getElementById("takeover-form-step-1").querySelectorAll(".wpcf7-validates-as-required");
		var hasError = false;
		$(".wpcf7-not-valid-tip").remove();
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var input = _step.value;
				var value = $(input).val();

				if ($(input).hasClass("wpcf7-validates-as-email")) {
					if (
						!/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
							value
						)
					) {
						hasError = true;
						$(input)
							.parent()
							.prepend('<span role="alert" class="wpcf7-not-valid-tip">The e-mail address entered is invalid.</span>');
					}
				} else {
					// for other required text fields
					if (!value.length) {
						hasError = true;
						var fieldName = input.labels[0].textContent;
						$(input)
							.parent()
							.prepend('<span role="alert" class="wpcf7-not-valid-tip">' + fieldName + " is required.</span>");
					}
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return != null) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		if (hasError) {
			return;
		}

		$("#takeover-form-step-1").fadeOut(function() {
			return $("#takeover-form-step-2").removeClass("hide");
		});
	});
	$("input[name=rb]").change(function(e) {
		var _e$target$labels$ = e.target.labels[0],
			dataset = _e$target$labels$.dataset,
			textContent = _e$target$labels$.textContent;
		step3Container = "#".concat(dataset.container);
		$("#interested-in").value = textContent;
	});
	$(".button.step-3").click(function(e) {
		$("#takeover-form-step-2").fadeOut(function() {
			return $(step3Container).removeClass("hide");
		});
	}); // ----------------------------------------
	// Slider Prev/Next

	$(document).on("click", ".prev", function(e) {
		e.preventDefault();
		$(".programs-slider").slick("slickPrev");
	});
	$(document).on("click", ".next", function(e) {
		e.preventDefault();
		$(".programs-slider").slick("slickNext");
	}); // add noopener noreferrer to target=_blank anchors

	$("a[target=_blank]").attr("rel", "noopener noreferrer");

	// Block Grid Center Fix

	function centerBlockGrid(block_grid) {
		var $window = $(window);
		var windowWidth = $window.width();
		var listWidth = $(block_grid).width();
		var smallGrid;
		var mediumGrid;
		var largeGrid;

		var gridClass = $(block_grid).attr("class");

		if (gridClass.indexOf("small-block-grid") >= 0) {
			smallGrid = $(block_grid)
				.attr("class")
				.match(/small-block-grid-([0-9]+)/)[1];
		} else {
			smallGrid = 1;
		}

		if (gridClass.indexOf("medium-block-grid") >= 0) {
			mediumGrid = $(block_grid)
				.attr("class")
				.match(/medium-block-grid-([0-9]+)/)[1];
		} else {
			mediumGrid = smallGrid;
		}

		if (gridClass.indexOf("large-block-grid") >= 0) {
			largeGrid = $(block_grid)
				.attr("class")
				.match(/large-block-grid-([0-9]+)/)[1];
		} else {
			largeGrid = mediumGrid;
		}

		var listCount = $(block_grid + " > li").length;

		if (windowWidth <= 640) {
			var responsiveGrid = smallGrid;
		}

		if (windowWidth > 640 && windowWidth <= 1024) {
			var responsiveGrid = mediumGrid;
		}

		if (windowWidth > 1024) {
			var responsiveGrid = largeGrid;
		}

		var blockWidth = listWidth / responsiveGrid;
		var listRemainder = listCount % responsiveGrid;
		var listMissing = responsiveGrid - listRemainder;
		var listPush = listMissing / 2;
		var marginFix = blockWidth * listPush;

		if (listRemainder > 0) {
			$(block_grid + " li").css("margin-left", "0");
			$(block_grid + " li:nth-last-child(" + listRemainder + ")").css("margin-left", marginFix + "px");
		} else {
			$(block_grid + " li").css("margin-left", "0");
		}
	}

	$(document).ready(function() {
		if ($(".logo-block-grid").length) {
			centerBlockGrid(".logo-block-grid");
		}
	});

	$(window).resize(function() {
		if ($(".logo-block-grid").length) {
			centerBlockGrid(".logo-block-grid");
		}
	});

	// ----------------------------------------

	var date = new Date();
	//round to mins to nearest hour to allow for some caching
	date.setSeconds(0);
	date.setMinutes(0);

	$(document).ready(function() {
		$("#instagram-load-more").click();
	});

	$("#instagram-load-more").click(function() {
		$("#instagram-load-more").hide();
		$(".ajax-spinner").show();

		var ajax_container = $("#instgram-block");
		var feed_offset = $("#instagram-load-more").attr("data-offset");

		var feed_url = "/ajax-instagram-posts/?feed_offset=" + feed_offset + "&lastupdate=" + date.getTime();

		$.ajax({
			url: feed_url,
			success: function(data) {
				ajax_container.append(data);
				var loaded_count = ajax_container.find("li").length;

				feed_offset = parseInt(feed_offset, 10);

				var expected_count = 3 + feed_offset;

				if (loaded_count < expected_count) {
					$("#instagram-load-more").hide();
				} else {
					$("#instagram-load-more")
						.attr("data-offset", loaded_count)
						.show();
				}
				$(".ajax-spinner").hide();
				$(document).foundation("reflow");
			},
			error: function() {
				ajax_container.html("The content could not be loaded.");
			}
		});
	});

	// Scroll Reveal

	window.sr = ScrollReveal({
		duration: 700,
		scale: 1,
		distance: "15px",
		mobile: false,
		viewFactor: 0,
		viewOffset: {
			top: 100,
			bottom: 100
		},
		reset: false
	});
	sr.reveal("section, .footer");
})(jQuery);
