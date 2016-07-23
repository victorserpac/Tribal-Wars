console.log('loaded');



// $('#incomings_form').submit();


window.addEventListener( 'load', function() {
    console.log('wow');
    document.querySelector( '#select_all' ).click();
});


var numAttackElement = document.querySelector( '#incomings_amount' );

numAttackElement.addEventListener( 'DOMSubtreeModified', function( event ) {
    location.reload();
});
