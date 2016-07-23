var numAttackElement = document.querySelector( '#incomings_amount' );

console.log( numAttackElement );

numAttackElement.addEventListener( 'DOMSubtreeModified', function( event ) {
    console.log('foo');
});

numAttackElement.addEventListener( 'DOMCharacterDataModified', function( event ) {
    console.log('bar');
});
