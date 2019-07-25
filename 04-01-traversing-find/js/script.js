$(document).ready(function() {
	
	//CSS selectors
	var result = $('#animals .creature');
	console.log(result);
	//console.log($('.creature'))

	//DOM traversing (more efficient)
	result = $('#animals').find('.creature');
	console.log(result);
});