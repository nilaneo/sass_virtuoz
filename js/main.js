$(document).ready(function(){
	/* Custom radiobutton
	========================================================================== */

	$(".custom-radio").on("click", function() {
		var $this = $(this),
			groupName = $this.data("name");
		$(".custom-radio[data-name=" + groupName + "]").removeClass("is-checked");
		$this.toggleClass("is-checked");
	});
})