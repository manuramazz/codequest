//Buscador de cursos, al clicar en la lupa busca coincidencias con los nombres de los cursos
$(document).ready(function() {
    $("button[type='submit']").click(function(event) {
        event.preventDefault();
        let texto = $('input[type="text"]').val();
        window.location.href = `../paginaCursos/paginaCursos.html?texto=${encodeURIComponent(texto)}`;
    });
});

