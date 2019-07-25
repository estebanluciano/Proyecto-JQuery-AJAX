$(document).ready(function() {

  $('#hasPets').on('change', function(){
    if($(this).is(':checked')) {
      $('#pets-row').show();      
    }
    else {
      $('#pets-row').hide();
    }
  });
  //dispara el evento por si al recargar la pagina esta cheched la casilla!
  $('#hasPets').trigger('change');
});
