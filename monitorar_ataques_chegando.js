var numAttackElement = document.querySelector( '#incomings_amount' );

console.log( numAttackElement );

numAttackElement.addEventListener( 'DOMSubtreeModified', function( event ) {
    location.reload();
});
