// ==UserScript==
// @name           Auto Farm
// @description    Foobar
// @author        ####.
// @include       https://*screen=am_farm*
// @version        1.0
// ==/UserScript==

(function() {
    'use strict';

    var opcoes = {
        letra:               'C',
        atualizarPagina:     true,
        tempo:               300,
        x:                   0,
        minhaVar:            '',
        remove_atacadas:     true,
        remove_sem_recursos: false
    };

    // var atualizarPagina     = 1;
    // var tempo               = 300;
    // var x                   = 0;
    // var minhaVar            = "";
    // var remove_atacadas     = true;
    // var remove_sem_recursos = false;


    var autoFarm = (function() {

        /**
         * Module
         */
        var module = {};

        /**
         * Local vars
         */
        var menu                = $( '#am_widget_Farm a.farm_icon_c' );

        function Farmer( args ) {

            /**
             * Attributes
             */
            this.refresh      = args.atualizarPagina || null;
            this.time         = args.tempo || null;
            // this.x            = args.x || null;
            this.var          = args.minhaVar || null;
            this.removeAttack = args.remove_atacadas || null;
            this.removeEmptys = args.remove_sem_recursos || null;

            /**
             * Elements
             */
            this.button = this.getButton( args.letra || null );

            this.watch();
        }

        Farmer.prototype.removeSomeFarms = function () {

            if ( this.removeAttack || this.removeEmptys ) {

                $( '#plunder_list td:nth-child(3) img, #plunder_list td:nth-child(4) img' ).each( function () {
                    var response;

                    var imageSource = $( this ).attr( 'src' );

                    if ( this.removeAttack ) {
                        response = imageSource.indexOf( 'attack' );
                    } else {
                        response = imageSource.indexOf( 'max_loot/0' );
                    }

                    if ( response != -1 ) {
                        removeLineTable( $( this ) );
                    }
                });
            }
        };

        Farmer.prototype.watch = function () {
            this.button.on( 'click', function() {
                removeLineTable( $( this ) );
            });
        };

        Farmer.prototype.getButton = function ( letter ) {
            var queries = {
                'A': 'a.farm_icon_a',
                'B': 'a.farm_icon_b',
                'C': 'a.farm_icon_c'
            };

            return $( queries[ letter ] );
        };

        function removeLineTable( element ) {
            element.closest( 'tr' ).remove();
        }

        var jaEnviados = menu.parent().parent().find( 'img.tooltip' ).length + "000";

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
        //}
        // console.log("Ja existe " + jaEnviados.substring(0,(jaEnviados.length - 3)) + " aldeia com ataque.");
        //
        // var altAldTempo = parseInt($('#am_widget_Farm a.farm_icon_a').length+"000") - parseInt(jaEnviados);
        // console.log("Resta " + altAldTempo + " aldeias para Atacar.");
        //
        // if (altAldTempo == "0") {
        //     var altAldTempo = aleatorio(4000,14000);
        // } else {
        //     var altAldTempo = parseInt(altAldTempo) + parseInt(aleatorio(4000,14000));
        // }
        // console.log("Resta " + altAldTempo + " milesegundos para alternar a aldeia.");
        //
        // function aleatorio(inferior, superior) {
        //     numPosibilidades = superior - inferior
        //     aleat = Math.random() * numPosibilidades
        //     return Math.round(parseInt(inferior) + aleat)
        // }
        //
        //
        //
        // for (i = 0; i < 40; i++) {
        //     $(menu).eq(i).each(function() {
        //         if (!($(this).parent().parent().find('img.tooltip').length)) {
        //             var tempoAgora = (tempo * ++x) - aleatorio(150,300);
        //             setTimeout(function(minhaVar) {
        //                 $(minhaVar).click();
        //             }, tempoAgora, this);
        //         }
        //     })
        // }
        //
        // function altAldeia()
        // {
        //     $('.arrowRight').click();
        //     $('.groupRight').click();
        // }
        //
        // setInterval(altAldeia, altAldTempo);
        //
        //
        //
        //
        // ga('create', 'UA-48471099-1', 'datweb.com.br');
        // ga('send', 'pageview');
        //
        //
        // console.log("####;) ");





        module.farm = function( options ) {

            /**
             * Instance new farmer
             */
            var farmer = new Farmer( options );

            /**
             * Call some actions
             */
            farmer.removeSomeFarms();

        };

        return module;

    }());

    autoFarm.farm( opcoes );

}());
