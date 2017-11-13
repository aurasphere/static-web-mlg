$(document).ready(function() {

	mainChangeSizeLoop($("#main"), false, 2500);

	// Starts up the color animations.
	setTimeout(function() {
		$("body").addClass("color-change");
		$("#main").addClass("color-rotate");
		$(".mlg").show();
		document.title = "...MLG!!!!";
		setTimeout(randomPageTitle, 5000);
	}, 16000);

});

// Changes the size of the main picture.
function mainChangeSizeLoop(element, bigger, timeout) {
	if (bigger) {
		element.addClass("bigger");
	} else {
		element.removeClass("bigger");
	}
	timeout -= 200;
	setTimeout(function() {
		mainChangeSizeLoop(element, !bigger, timeout);
	}, timeout);
}

// Generates a random page title.
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function randomPageTitle() {
	var text = "";
	for (var i = 0; i < 40; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	document.title = text;
	setTimeout(randomPageTitle, 200);
}
