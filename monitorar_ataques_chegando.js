console.log('loaded');

var selectAll = document.querySelector( '#select_all' );

console.log( selectAll );

selectAll.click();

// $('#incomings_form').submit();



var numAttackElement = document.querySelector( '#incomings_amount' );

numAttackElement.addEventListener( 'DOMSubtreeModified', function( event ) {
    location.reload();
});
