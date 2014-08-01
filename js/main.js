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

	/* Menu dropdown
	========================================================================== */

	$(".j-menu").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("is-open");
		var $menuItem = $(this).parent("li").siblings("li");
		$menuItem.find(".nav-link").removeClass("is-open");
		$menuItem.find(".menu-container").slideUp("fast");
		$(this).parent("li").find(".menu-container").slideToggle("fast");
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

	/* Services
	========================================================================== */

	$(".j-btn-close-service").on("click", function (e) {
		e.preventDefault();
		console.log("lalala")
		$(this).closest(".service").fadeOut("fast");
	});

	/* Filter buttons
	========================================================================== */

	$(".filter-buttons a").on("click", function (e) {
		e.preventDefault();
		$(".filter-buttons a").removeClass("is-active");
		$(this).addClass("is-active");
	});

})