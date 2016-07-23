console.log('loaded');

window.addEventListener( 'load', function() {
    document.querySelector( '#select_all' ).click();
    document.querySelector('#incomings_table input[type=submit]').click();
});


var numAttackElement = document.querySelector( '#incomings_amount' );

numAttackElement.addEventListener( 'DOMSubtreeModified', function( event ) {
    location.reload();
});
