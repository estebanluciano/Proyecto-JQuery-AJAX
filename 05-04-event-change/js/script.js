$(document).ready(function() {
/*
	$('#example').on('change', '#place', function() {
		var selected = $('#place option:selected');
		var value = selected.val();
		var price = selected.data('price');

		if(price) {
			$('#result').html(value + ' ' + price);
		}
		else {
			$('#result').html('');
		}
	})
*/
	$('#place').on('change', function() {
		var selected = $('#place option:selected'),
			value = selected.val(),
			price = selected.data('price');
		
		if(price) {
			$('#result').html(value + ' ' + price);
		}
		else {
			$('#result').html('');
		}
	})
});