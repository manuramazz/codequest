//Buscador de cursos, al clicar en la lupa busca coincidencias con los nombres de los cursos
$(document).ready(function() {
    $("button[type='submit']").click(function(event) {
        event.preventDefault();
        let texto = $('input[type="text"]').val();
        window.location.href = `ficheros/paginaCursos/paginaCursos.html?texto=${encodeURIComponent(texto)}`;
    });

    $(".lista_lecciones li").click(function(event) {
        event.stopPropagation();
        let texto = $(this).attr('class');
        console.log(texto);
        window.location.href = `/proyecto1/ficheros/lecciones/lecciones.html?texto=${encodeURIComponent(texto)}`;
    });
});

