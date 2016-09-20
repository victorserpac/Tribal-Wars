console.log( 'loaded' );

document.querySelector( '#incomings_amount' ).addEventListener( 'DOMSubtreeModified', function( event ) {
    setTimeout(function(){
        location = "https://br76.tribalwars.com.br/game.php?screen=overview_villages&mode=incomings";
    }, 10000);
});

setTimeout(function(){
    location = "https://br76.tribalwars.com.br/game.php?screen=overview_villages&mode=incomings";
}, 300000);
