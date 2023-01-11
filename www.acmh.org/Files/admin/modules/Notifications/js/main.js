$(document).ready(function(){
	var $notificationBar = $("#notification-bar");

	$notificationBar.find("#btn-close").click(function(){
		$notificationBar.slideUp(400, function(){
			$.ajax({
				url: 'files/admin/modules/notifications/ajax.asp',
				type: 'POST',
				data: "action=1",
				dataType: "json",
				cache: false,
				success: function (data) {
				} 
			});

		});
	});
});