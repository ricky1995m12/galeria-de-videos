$(function(){
    var num = 1;
    var altura = 1;
    cambiar()

    $( "body" ).keydown(function() {
        $( ".texto" ).html(event.which);

        if(event.which==37){
            if (num>0){
                num--;
                cambiar()

            }
        }
        if(event.which==39){
            if (num<( ".imagenes img" ).length-4){
                num++;
                cambiar();

            }
        }
        if(event.which==38){
            if (altura >0){
                num =1;
                altura--
                cambiar();
            }
        }
        if(event.which==40){
            if (altura <2){
                num =1;
                altura++
                cambiar();
            }

        }
        if(event.which==65){
            abrir_ventana()
        }
        if(event.which==83){
            cerrar_ventana()
        }
        if(event.which==32){
            cerrar_ventana()
            cargar()
        }
    });

    function cargar() {
        $( "a" ).each(function( index, element ) {
            if (index==num){
                var url = $(element).attr('href');
                window.location.assign(url)
            }
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
            if (index==num && altura == 0){
                $( element ).css( "backgroundColor", "yellow" );
            }
        });

        $( ".imagenes img" ).each(function( index, element ) {
            $( element ).css( "backgroundColor", "white" );
            $( element ).css( "width", "200px" );
            $( element ).css( "opacity", "0.5" );
            if (index==num && altura == 1){
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
            if (index==num && altura == 2){
                $( element ).css( "backgroundColor", "yellow" );
                $( element ).css( "width", "+=20%" );
                $( element ).css( "opacity", "1" );
                $(".imagenes2").css("left", -((num-1)*206)+"px");
            }
        });

    }

});