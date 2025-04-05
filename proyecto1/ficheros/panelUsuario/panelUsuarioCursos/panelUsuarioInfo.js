//Buscador de cursos, al clicar en la lupa busca coincidencias con los nombres de los cursos
function cargarLeccion() {
    
    let username = sessionStorage.getItem("username");
    
    if (username) {
        document.getElementById("parrafo_usuario").textContent = "Información de usuario:"
        var xhttp = new XMLHttpRequest();
        console.log(username);
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    console.log("prueba1");
                    let jsonObj = JSON.parse(this.responseText);

                if (!jsonObj) {
                    console.error("JSON inválido o con errores");
                }
                //COMPRUEBO EN QUE POSICION ESTA
                var contador = 0;
                console.log("prueba2");
                for(x in jsonObj.usuarios){
                    if(username == jsonObj.usuarios[x].id){
                        console.log("hola"+x);
                        contador = x;
                        break;
                    }
                }
                console.log("contador: "+contador);
                
                //RECOJO LOS DATOS DEL USUARIO
                let nombreUsuario = jsonObj.usuarios[contador].id;
                let contraseña = jsonObj.usuarios[contador].contraseña;
                let correo = jsonObj.usuarios[contador].email;

                let lista = document.getElementById("lista_informacion");
                let items = [`Nombre de usuario: ${nombreUsuario}`, `Contraseña: ${contraseña}`, `Correo electrónico: ${correo}`];
                items.forEach(texto => {
                    const nuevoElemento = document.createElement("li");
                    nuevoElemento.textContent = texto;
                    lista.appendChild(nuevoElemento);
                });
                }
            }

        }
        xhttp.open("GET", "../../../datos/usuarios-contraseñas.json", true);
        xhttp.send();
    }
}

cargarLeccion();

