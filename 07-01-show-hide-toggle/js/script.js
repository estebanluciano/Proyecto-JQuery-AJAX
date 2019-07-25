$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function(e){
		e.preventDefault();
		//show() hide()
		$(this).closest('.item-box').find('.more-info').toggle(1000, function(){
			console.log('se completo!');
		});
	});
	
});