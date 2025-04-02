document.querySelector(".boton_inicio_sesion").addEventListener("click", function(event) {
    // Obtener el nombre de usuario ingresado
    let username = document.querySelector(".username").value;
    let contraseña = document.querySelector(".contraseña").value;
    let contraseña2 = document.querySelector(".contraseña2").value;
    let correo = document.querySelector(".correo").value;

    if (username === "" || contraseña === "" || contraseña2 === "" || correo === "") {
        alert("Por favor, rellene todos los campos.");
        event.preventDefault();
        return;
    }
    if (contraseña !== contraseña2) {
        alert("Las contraseñas no coinciden.");
        event.preventDefault();
        return;
    }

    fetch('/proyecto1/datos/usuarios-contraseñas.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Verificamos si el usuario existe en el archivo JSON
            let usuarioValido = true;
            data.usuarios.forEach(usuario => {
                if (usuario.id === username) {
                    usuarioValido = false;
                }
            });

            // Si el usuario no existía, se añade y se redirige a la página principal
            if (usuarioValido) {
                sessionStorage.setItem("username", username);
                window.location.href = "/proyecto1/index.html";
            }else{
                alert("Nombre de usuario no disponible");
            }
        })
        .catch(error => {
            console.error('Error al acceder al archivo JSON:', error);
            alert("Error al verificar el usuario.");
        });
})
