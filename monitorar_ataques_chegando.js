document.querySelector( '#select_all' ).click();

$('#incomings_form').submit();



var numAttackElement = document.querySelector( '#incomings_amount' );

numAttackElement.addEventListener( 'DOMSubtreeModified', function( event ) {
    location.reload();
});
