
$(function() {
    var num = 1;
    var altura = 1;
    var imagenes = {
        1: $('.imagenes > a > img'),
        2: $('.imagenes2 > a > img')
    };
    cambiar();

    $( "body" ).keydown(function() {

        $( ".texto" ).html(event.which);

        if (event.which == 37) {  // A la izquierda
            if (num > 0) {
                num--;
                cambiar();
            }
        }
        if (event.which == 39) {
            if (num < imagenes[altura].length - 1) {  // A la derecha
                num++;
                cambiar();
            }
        }
        if (event.which == 38) {  // Hacia arriba
            if (altura > 1) {
                altura--;
                cambiar();
            }
        }
        if (event.which == 40) {  // Hacia abajo
            if (altura < 2) {
                num = 1;
                altura++;
                cambiar();
            }
        }
        if (event.which == 65) {  // Tecla A
            var portadaActual = $(imagenes[altura][num]).attr('src');
            $(".ventana").find('img').attr('src', portadaActual);
            abrir_ventana()
        }
        if (event.which == 83 || event.which == 27) {   // Tecla S o Esc
            cerrar_ventana();
        }
        if (event.which == 32 || event.which == 13) {   // Tecla Espacio o Intro
            cerrar_ventana();
            cargar();
        }
    });

    $( "#ver" ).click(function() {
        cerrar_ventana();
        cargar();
    });

    $( "#salir" ).click(function() {
        cerrar_ventana();
    });
    function cargar() {
        var actual;
        if (altura == 1) {
            actual = num;
        } else if (altura == 2) {
            actual = num + imagenes[altura].length + 1
        }
        $( "a.thumbnail" ).each(function( index, element ) {
            if (index == actual) {
                var url = $(element).attr('href');
                window.location.assign(url);
                return false;
            } else
                return true;
        });

    }
    function abrir_ventana() {
        $(".ventana").css( "display", "block" );
    }
    function cerrar_ventana() {
        $(".ventana").css( "display", "none" );
    }

    function cambiar() {

        $( ".menu a" ).each(function( index, element ) {
            $( element ).css( "backgroundColor", "white" );
            if (index==num && altura == 0) {
                $( element ).css( "backgroundColor", "yellow" );
            }
        });

        $( ".imagenes img" ).each(function( index, element ) {
            $( element ).css( "backgroundColor", "white" );
            $( element ).css( "width", "200px" );
            $( element ).css( "opacity", "0.5" );
            if (index==num && altura == 1) {
                $( element ).css( "backgroundColor", "yellow" );
                $( element ).css( "width", "+=20%" );
                $( element ).css( "opacity", "1" );
                $(".imagenes").css("left", -((num-1)*206)+"px");
            }
        });

        $( ".imagenes2 img" ).each(function( index, element ) {
            $( element ).css( "backgroundColor", "white" );
            $( element ).css( "width", "200px" );
            $( element ).css( "opacity", "0.5" );
            if (index==num && altura == 2) {
                $( element ).css( "backgroundColor", "yellow" );
                $( element ).css( "width", "+=20%" );
                $( element ).css( "opacity", "1" );
                $(".imagenes2").css("left", -((num-1)*206)+"px");
            }
        });

    }
});