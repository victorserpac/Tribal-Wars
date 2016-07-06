if(game_data.player.premium == false) {
	UI.InfoMessage('Para utilizar esse script é necessário uma Conta Premium!', 3000, true);
	end();
}

var interval;

function farmWithA() {
    var as = document.querySelector( '.farm_icon_a:not(.decoration):not(.farm_icon_disabled)' );

    if ( as.length === 0 ) {
        clearInterval( interval );
    }
    
    as.click();
}

interval = window.setInterval( farmWithA, 1000 );
