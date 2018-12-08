$(document).ready( function() {
	$("header").addClass("load");
	$("#first").addClass("load");
})

$(document).on("scroll", function() {
	let pageTop = $(document).scrollTop();
	let pageBottom = pageTop + $(window).height();
	let tags = $("section");

	for (let i = 0; i < tags.length; i++) {
		let tag = tags[i];

		// if ($(tag).position().top < pageBottom && $(tag).position().top > pageTop) {
		if ($(tag).position().top < pageBottom) {
			$(tag).addClass("visible");
		} else {
			$(tag).removeClass("visible");
		}
	}

	if ($("#spacecraft").hasClass("visible")) {
		$("html").css({ 'background-color': '#d85030', 'transition': 'background-color 500ms linear' });
		$("#spacecraft p").css({ 'color': '#b9c1cb' });
		// if ($("#background").hasClass("visible") !== true) {
		// 	$("html").css({'background-color': '#d85030'});
		// }
	} else {
		$("html").css({ 'background-color': '#f7f7f7', 'transition': 'background-color 500ms linear' });
	}

	if ($("#essays").hasClass("visible")) {
		$("html").css({ 'background-color': '#f7f7f7', 'transition': 'background-color 500ms linear' });
		$("#essays a").css({ 'color': '#000' });
		// if ($("#background").hasClass("visible") !== true) {
		// 	$("html").css({'background-color': '#d85030'});
		// }
	}
})
