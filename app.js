/*
 * MIT License
 *
 * Copyright (c) 2017 Donato Rimenti
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

window.alert("*** EPILEPSY WARNING *** \nThis page contains strong flashing lights that can cause seizures in people with photosensitive epilepsy. View it at your own discretion.");

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
