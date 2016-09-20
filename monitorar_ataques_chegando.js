console.log('loaded');

window.addEventListener( 'load', function() {
    document.querySelector( '#select_all' ).click();
    document.querySelector('#incomings_table input[type=submit]').click();
});


var numAttackElement = ;

document.querySelector( '#incomings_amount' ).addEventListener( 'DOMSubtreeModified', function( event ) {
    location = "https://br76.tribalwars.com.br/game.php?screen=overview_villages&mode=incomings";
});
