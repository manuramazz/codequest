document.querySelector(".boton_inicio_sesion").addEventListener("click", function(event) {
    // Obtener el nombre de usuario ingresado
    let username = document.querySelector(".username").value;
    // Guardar en localStorage
    sessionStorage.setItem("username", username);

    // Redirigir a la página principal
    window.location.href = "/proyecto1/index.html";
})
