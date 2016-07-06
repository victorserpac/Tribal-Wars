var interval;

function farmWithA() {
    var as = document.querySelectorAll( '.farm_icon_a:not(.decoration):not(.farm_icon_disabled)' );

    if ( as.length === 0 ) {
        clearInterval( interval );
    }

    var length = 3;

    if ( as.length < 3 ) {
        length = as.length;
    }

    for ( var i = 0; i < length; i++ ) {
        as[i].click();
    }

}

interval = window.setInterval( farmWithA, 1000 );
