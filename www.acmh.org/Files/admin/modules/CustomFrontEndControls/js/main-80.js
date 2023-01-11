$(document).ready(function(){
	$(".custom_dropdown_control").each(function(){
		$(this).FormDropdownControl();
	});

	$(".custom_upload_control").each(function(){
		var control = $(this);
		var uploadFile = control.find(".upload_file_btn input[type='file']");
		var uploadCaption = control.find(".upload_file_caption");

		uploadFile.change(function(){
			var fileName = $(this)[0].files[0].name;
			uploadCaption.val(fileName);
		});
	});

	$(".captcha-control").each(function(){
		var $control = $(this);
		RefreshCaptcha($control.attr("data-form-id"));
	});

	$("form[data-async=true]").each(function(){
		CMS_InitAsyncForm($(this));
	});

	
});


function CheckCaptcha(formID) {
	var $control = $("#captcha-control"+formID);
	var hdn = $control.find("input[name='captcha_hdn']").val();
	var fld = CryptoJS.MD5($control.find("input[name='captcha_fld']").val().toUpperCase());

	if (hdn==fld) {return true;}
	return false;
}

function RefreshCaptcha(formID) {
	var $control = $("#captcha-control"+formID);
	var $image = $control.find(".captcha-image");
	var $hdn = $control.find("input[name='captcha_hdn']");
	if ($image.length) {
		$image.unbind("load");
		$image.bind('load', function() {
			$.post("/files/admin/modules/CustomFrontEndControls/captcha/ajax.asp", {"id": formID}, function(data){
				$hdn.val(data);
				$image.show();
			});
		});

		$image.attr("src", "/files/admin/modules/CustomFrontEndControls/captcha/captcha.asp?id="+formID+"&x=" + $.now());
	}
}


function CMS_InitAsyncForm($form) {
	var $formSubmitButton = $form.find(".frm_submit_btn");

	$form.attr("onSubmit", "");
	$form.append('<input type="hidden" name="async_form" value="1"/>');
	$form.prepend('<div style="display:none;" class="form_status alert alert-success"></div>');
	$form.prepend('<div style="display:none;" class="form_error alert alert-danger"></div>');
	$formSubmitButton.after('<button type="button" class="btn btn-default frm_loading_btn" onClick="javascript:void(0)" style="display:none;">Submitting <i class="fa fa-refresh fa-spin"></i></button>');

	var $formStatus = $form.find(".form_status");
	var $formError = $form.find(".form_error");
	var $formLoadingButton = $form.find(".frm_loading_btn");

	$form.submit(function(e){
		e.preventDefault();

		var $inputs = $('input[type="file"]:not([disabled])', $form); //select input files
	    $inputs.each(function(_, input) {
    	    if (input.files.length > 0) return ;
        	$(input).prop('disabled', true) //if the input doesn't have uploaded files will be disable - safari bugfix
	    })

		var strErr = "";
	    var formData = new FormData($form[0]);// create the form data
	    $inputs.prop('disabled', false);//

		$formStatus.html("").hide();
		$formError.html("").hide();

		if ($form.find(".g-recaptcha").length) {
			if (grecaptcha.getResponse().length === 0) {strErr += "Incorrect Captcha<br/>";}
		}


		if (strErr=="") {
			$formSubmitButton.hide();
			$formLoadingButton.show();	

			$.ajax({
				type   : "POST",
				cache  : false,
				contentType: false,
				processData: false,
				url    : $form.attr("action"),
				data   : formData,
				dataType: "json",
				success: function (data) {
					if ($form.find(".g-recaptcha").length) {
						grecaptcha.reset();
					}

					setTimeout(function(){
						$formSubmitButton.show();
						$formLoadingButton.hide();	

						if (data.status=="1") {
							$formStatus.html(data.msg).show();
							$form.clearForm();
							if (data.redirect_url != "") {
								window.location.href = data.redirect_url;
							}
						} else {
							$formError.html(data.msg).show();
						}

						$("html, body").animate({ scrollTop: $form.offset().top - (($(window).width()>991)?100:15) }, "slow");
					}, 600); 
				}
			});
		} else {
			$formError.html(strErr).show();
			$("html, body").animate({ scrollTop: $form.offset().top - (($(window).width()>991)?100:15) }, "slow");
		}

	});
}


(function( $ ) {
	$.fn.FormDropdownControl = function() {
		var $container = $(this);
		var $value = $container.find('input[type="hidden"]');
		var $label = $container.find('[data-toggle=dropdown] > span').first();
		var $options = $container.find(".dropdown-menu li");

		$options.each(function(){
			var $option = $(this);
			var $a = $option.find("a[data-value]");

			$a.click(function(){
				var optVal = $a.data("value");
				$label.addClass("dropdown-placeholder");

				$options.removeClass("active");
				$option.addClass("active");

				$label.text($a.text());
				if (optVal!="") $label.removeClass("dropdown-placeholder");
				$value.val(optVal);
				if (optVal=="") {$label.text($a.text());}
			});
		});
	}
})(jQuery);
