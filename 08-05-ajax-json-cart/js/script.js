$(document).ready(function() {
  //load destinations
  $.ajax('destinations.json', {
     dataType: 'json',
     contentType: 'application/json',
     cache: false
  })
  .done(function(response){
    console.log(response);
    var html;
    $.each(response, function(index, element){
      //you can also use a templating engine like Underscore.js (the one I use), Mustache.js, Handlebars.js  http://garann.github.io/template-chooser/
      html = '<div class="item-box" data-id="'+element.id+'">';
      html += '<img src="images/'+element.image+'" />';
      html += '<div class="item-title">'+element.name+'</div>';
      html += '<p>'+element.description+'</p>';
      html += '<div class="item-price" data-price="'+element.price+'">$'+element.price+'</div>';
      html += '<button id="agregar">Add to cart</button>';
      html += '<button class="quitar disabled" disabled="disabled"><strong>X</strong></button>';
      html += '<div><a href="#" class="info-link">More info</a></div>';
      html += '<div class="more-info"><p>'+element.moreInfo+'</p></div>';
      html += '</div>';

      $('body').append(html);
    });
  });

  //show more info 
  $('body').on('click', '.info-link', function(event) {
    event.preventDefault();
    $(this).closest('.item-box').find('.more-info').slideToggle();
  }); 

  //shopping cart total
  var cart = 0;

  $('body').on('click', '.item-box #agregar', function(event) {
    event.preventDefault();
    //      +$ pide el número, no como cadena
    var id = +$(this).closest('.item-box').data('id'),
        precio = +$(this).closest('.item-box').find('.item-price').data('price');
    
    // hacerlo con variables para cuando la funcion responde OK, en la parte del cart +=
    $(this).addClass('disabled');
    $(this).attr('disabled', true);
    $(this).closest('.item-box').find('.quitar').removeClass('disabled');
    $(this).closest('.item-box').find('.quitar').attr('disabled', false);

    $.ajax('addItem.json', {
      type: 'post',
      data: {id: id},
      dataType: 'json',
      contentType: 'application/json',      
    })
    .done(function(response){
      console.log(response);
      
      //cart += response.price;
      cart += precio;
      $('#total-cost').text('Total $'+cart);
    });   
  });

  $('body').on('click', '.item-box .quitar', function(e) {
    
    var id = +$(this).closest('.item-box').data('id'),
        precio = +$(this).closest('.item-box').find('.item-price').data('price');
    // hacerlo con variables para cuando la funcion responde OK, en la parte del cart +=
    $(this).addClass('disabled');
    $(this).attr('disabled', true);
    $(this).closest('.item-box').find('#agregar').removeClass('disabled');    
    $(this).closest('.item-box').find('#agregar').attr('disabled', false);
    /* pongo el mismo archivo que ADDITEM solo para simular que lo devuelvo*/
    $.ajax('addItem.json', {
      type: 'post',
      data: {id: id},
      dataType: 'json',
      contentType: 'application/json',
    })
    .done(function(response){
      console.log(response);

      //cart -= response.price;
      cart -= precio;
      $('#total-cost').text('Total $'+cart);
    });
  
  //}; // fin IF
  
  });
});
