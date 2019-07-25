$(document).ready(function() {
	$('#example').on('click', 'button', function() {
		//$('#place').val();
		//var selected = $('#example select option:selected');
		var selected = $('#place option:selected'),
		    value = selected.val(),
		//var price = selected.attr('data-price');
		    price = selected.data('price');

		console.log(value);
		console.log(price);
		console.log(selected.attr('data-price'));
		
		if(price) {
			$('#result').html(value + ' ' + price);
		}
		else {
			$('#result').html('');
		};
		
	});
});