$(document).ready(function() {
	//con atributo 'required' lo resalta
	//$('input[required]').addClass('highlighted');
	
	// solo resalta con atributo 'placeholder="Phone"'
	$('input[placeholder="Phone"]').addClass('highlighted');

	// resalta los que contengan en el atributo placeholder la palabra 'Name'
	//$('input[placeholder*="Name"]').addClass('highlighted');

});