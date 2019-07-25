$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		$.ajax('result.html', {
			beforeSend: function () {
				$('#status').html('Cargando..');
			}
		})
		.done(function(response){
			// retraso el completado simulando que estoy esperando al servidor
			setTimeout(function() {
				$('#result').html(response);
			}, 2500);
		})
		.always(function(){
			// retraso el completado simulando que estoy esperando al servidor
			setTimeout(function() {
				$('#status').text('Completado');
			}, 2500);
		});		
	});

});