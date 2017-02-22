// ==UserScript==
// @name           C
// @description    SÛ alegria.
// @author        ####.
// @include       https://*screen=am_farm*
// @version        1.0
// ==/UserScript==

(function() {
    'use strict';


    var autoFarm = (function() {

        /**
         * Module
         */
        var module = {};

        /**
         * Local vars
         */
        var atualizarPagina = 1;
        var tempo = 300;
        var x = 0;
        var minhaVar = "";
        var remove_atacadas = true;
        var remove_sem_recursos = false;
        var menu = $( '#am_widget_Farm a.farm_icon_c' );


        function removeSomeFarms() {
            $( 'a.farm_icon_a, a.farm_icon_b, a.farm_icon_c' ).click( function() {
                $( this ).closest( "tr" ).remove();
            });

            if ( remove_atacadas || remove_sem_recursos ) {
                $( 'img' ).each(function() {
                    var tempStr = $( this ).attr( 'src' );

                    if ( tempStr.indexOf( 'attack' ) != -1 || tempStr.indexOf( 'max_loot/0' ) != -1 ) {
                        $(this).closest("tr").remove();
                    }
                });
            }

        }

        // var jaEnviados = $(menu).parent().parent().find('img.tooltip').length+"000";
        //
        // if (remove_atacadas == 1) {
        //     $('img').each(function() {
        //         var tempStr = $(this).attr('src');
        //         if (tempStr.indexOf('attack') != -1) {
        //             $(this).addClass('tooltip')
        //         }
        //     });
        // }
        // if(atualizarPagina == 1) {
        //     setInterval(
        //         function() {
        //             window.location.reload();
        //         }, 180000);
        //     }
        //
        //     console.log("Ja existe " + jaEnviados.substring(0,(jaEnviados.length - 3)) + " aldeia com ataque.");
        //
        //     var altAldTempo = parseInt($('#am_widget_Farm a.farm_icon_a').length+"000") - parseInt(jaEnviados);
        //     console.log("Resta " + altAldTempo + " aldeias para Atacar.");
        //
        //     if (altAldTempo == "0") {
        //         var altAldTempo = aleatorio(4000,14000);
        //     } else {
        //         var altAldTempo = parseInt(altAldTempo) + parseInt(aleatorio(4000,14000));
        //     }
        //     console.log("Resta " + altAldTempo + " milesegundos para alternar a aldeia.");
        //
        //     function aleatorio(inferior, superior) {
        //         numPosibilidades = superior - inferior
        //         aleat = Math.random() * numPosibilidades
        //         return Math.round(parseInt(inferior) + aleat)
        //     }
        //
        //
        //
        //     for (i = 0; i < 40; i++) {
        //         $(menu).eq(i).each(function() {
        //             if (!($(this).parent().parent().find('img.tooltip').length)) {
        //                 var tempoAgora = (tempo * ++x) - aleatorio(150,300);
        //                 setTimeout(function(minhaVar) {
        //                     $(minhaVar).click();
        //                 }, tempoAgora, this);
        //             }
        //         })
        //     }
        //
        //     function altAldeia()
        //     {
        //         $('.arrowRight').click();
        //         $('.groupRight').click();
        //     }
        //
        //     setInterval(altAldeia, altAldTempo);
        //
        //
        //
        //
        //     ga('create', 'UA-48471099-1', 'datweb.com.br');
        //     ga('send', 'pageview');
        //
        //
        //     console.log("####;) ");





        module.farm = function( option ) {
            console.log( option );
            removeSomeFarms();

        };

        return module;

    }());

    var farmer = autoFarm();

    farmer.farm( 'C' );

}());
