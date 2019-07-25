$(document).ready(function() {
	/*
	$('#example').on('click', 'button.switch', function() {
		console.log(this);

		$(this).parent().toggleClass('highlighted');
	});
	*/

	$('#boton').on('click', function() {
		console.log($(this).closest('div'));
		$(this).closest('div').toggleClass('highlighted');

	});
});