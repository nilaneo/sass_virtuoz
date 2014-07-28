$(document).ready(function(){

	/* Custom radiobutton
	========================================================================== */

	$(".custom-radio").on("click", function() {
		var $this = $(this),
			groupName = $this.data("name");
		$(".custom-radio[data-name=" + groupName + "]").removeClass("is-checked");
		$this.toggleClass("is-checked");
	});

	/* Custom checkbox
	========================================================================== */

	$(".checkbox").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("is-checked");
	});

	/* Registration dropdown
	========================================================================== */

	$(".j-registration-menu").on("click", function (e) {
		e.preventDefault();
		$(".registration-menu-dropdown").slideToggle("fast");
	});

	/* Catalogue dropdown
	========================================================================== */

	$(".j-catalogue").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("is-open");
		$(".catalogue-container").slideToggle("fast");
	});

	/* Scrollbar
	========================================================================== */

	$(".select-big-container").on("click", function (e) {
		$(".select-big-dropdown").slideToggle("fast");
	});	

	/* Tooltips
	========================================================================== */

	$(".tooltip-open-all").on("hover", function () {
		$(this).tooltip({
				content: "lallala",
                position:{
                    at:"center bottom+10",
                    my:"center top"
                }
        }).tooltip('open');
        setTimeout(function(){ $(".btn-want").tooltip('disable'); }, 2000);
	});	

})