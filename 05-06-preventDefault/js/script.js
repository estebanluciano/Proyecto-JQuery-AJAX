$(document).ready(function() {
	$('#example').on('click', 'a', function(e) {
		e.preventDefault(); // evitar la accion por defecto
		//e.stopPropagation(); // evitar otras acciones fuera de estas:
		console.log('hello');
	});

	$('#example').on('click', function(e) {
		console.log('toco en el container');
	});
});