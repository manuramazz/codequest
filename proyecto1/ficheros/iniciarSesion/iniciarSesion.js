document.querySelector(".boton_inicio_sesion").addEventListener("click", function(event) {
    // Obtener el nombre de usuario ingresado
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;

    fetch('../../datos/usuarios-contraseñas.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Verificamos si el usuario existe en el archivo JSON
            let usuarioValido = false;
            data.usuarios.forEach(usuario => {
                if (usuario.id === username && usuario.contraseña === password) {
                    usuarioValido = true;
                }
            });

            // Si el usuario es válido, redirigimos y guardamos el nombre en sessionStorage
            if (usuarioValido) {
                sessionStorage.setItem("username", username);

                window.location.href = "../../index.html";
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        })
        .catch(error => {
            console.error('Error al acceder al archivo JSON:', error);
            alert("Error al verificar el usuario.");
        });
})
