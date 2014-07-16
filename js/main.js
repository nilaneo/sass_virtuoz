$(document).ready(function(){

	/* Custom radiobutton
	========================================================================== */

	$(".custom-radio").on("click", function() {
		var $this = $(this),
			groupName = $this.data("name");
		$(".custom-radio[data-name=" + groupName + "]").removeClass("is-checked");
		$this.toggleClass("is-checked");
	});

	/* Catalogue dropdown
	========================================================================== */

	$(".j-catalogue").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("is-open");
		$(".catalogue-container").slideToggle("fast");
	});
})