$(document).ready(function() {

	//CSS selector
	var result = $('#animals > div');
	console.log(result);

	//DOM traversing
	//result = $('#animals').children('div');
	result = $('#animals').children('div').children('.terrain');
	console.log(result);
});