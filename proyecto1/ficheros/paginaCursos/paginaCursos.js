$(document).ready(function() {
    //De inicio los cursos están cerrados
    $(".container_listas_curso").toggle();

    // Filtrar cursos cuando se cambia el filtro de nivel o lenguaje
    $("input[type='checkbox']").change(function() {
        // Obtener TODOS los valores seleccionados (no solo el primero)
        var nivelesSeleccionados = $("input[name='nivel']:checked").map(function() {
            return $(this).val();
        }).get();
        
        var lenguajesSeleccionados = $("input[name='lenguaje']:checked").map(function() {
            return $(this).val();
        }).get();
        
        $(".lista_cursos .informacion_curso").each(function() {
            var cursoNivel = $(this).data("nivel");
            var cursoLenguaje = $(this).data("lenguaje");
    
            var mostrarCurso = true;
    
            // Verificar niveles (si hay alguno seleccionado)
            if (nivelesSeleccionados.length > 0 && nivelesSeleccionados.indexOf(cursoNivel) == -1) {
                mostrarCurso = false;
            }
    
            // Verificar lenguajes (si hay alguno seleccionado)
            if (lenguajesSeleccionados.length > 0 && lenguajesSeleccionados.indexOf(cursoLenguaje) == -1) {
                mostrarCurso = false;
            }
    
            $(this).toggle(mostrarCurso);
        });
    });

    //Buscador de cursos, al clicar en la lupa busca coincidencias con los nombres de los cursos
    $("button[type='submit']").click(function() {
        let texto = $('input[type="text"]').val();
        if(texto!=""){
            $(".lista_cursos .informacion_curso").each(function() {

                var mostrarCurso = false;

                if ($(this).children('h2').text().includes(texto)) {
                    mostrarCurso = true;
                }

                if (mostrarCurso) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }else{
            $(".lista_cursos .informacion_curso").each(function() {
                $(this).show();
            });
        }
        
    })


    //Desplegar info de los cursos
    $(".informacion_curso").click(function(){
        $(this).find(".container_listas_curso").slideToggle("slow");
      });

      const rotacion = 0;
    //Rotar flecha al desplegar curso
    $('.flecha_ampliar').click(function() {
        
        // Incrementa 90 grados en cada clic
        if(rotacion==0){
            rotacion=90;
            $(this).css({
                'transform': 'rotate(' + rotacion + 'deg)',
                'transition': 'transform 0.5s ease'
            });
        }else if(rotacion==90){
            rotacion=0;
            $(this).css({
                'transform': 'rotate(' + rotacion + 'deg)',
                'transition': 'transform 0.5s ease'
            });
        }
        
    });

});