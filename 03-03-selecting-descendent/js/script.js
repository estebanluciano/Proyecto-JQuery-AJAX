$(document).ready(function() {
	// todo los li que encuentre a partir de #listado
	//$('#listado li').addClass('highlighted'); 

	// solo los li inmediatos a #listado
	$('#listado > li').addClass('highlighted');
});