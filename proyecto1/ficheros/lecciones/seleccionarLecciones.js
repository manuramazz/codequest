const urlParams = new URLSearchParams(window.location.search);
const texto = urlParams.get("texto");
console.log(texto);

function cargarLeccion(texto) {
    var xhttp = new XMLHttpRequest();
    
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {

                let xmlDoc = this.responseXML;

                if (!xmlDoc) {
                    console.error("XML inválido o con errores");
                }

                //Busco el div que es contenido para insertar cosas
                let contenido = document.getElementsByClassName("contenido")[0];
                //Pongo en titulo
                contenido.getElementsByTagName("h3")[0].textContent = texto;

                console.log(texto);
                // Buscar la lección específica en el XML
                //let leccion = xmlDoc.querySelector('[id="Objetos en Java"]');
                let leccion = xmlDoc.getElementsByTagName(texto)[0];
                
                //pongo explicacion
                //contenido.getElementById("explicacion").textContent = 
                let strExplicacion = leccion.getElementsByTagName("explicacion")[0].textContent;
                let strForo = leccion.getElementsByTagName("foro")[0].textContent;
                let strVideo = leccion.getElementsByTagName("video")[0].textContent;
                console.log(strVideo);
                let strBiblio = leccion.getElementsByTagName("bibliografia")[0].textContent;
                contenido.getElementsByClassName("explicacion")[0].textContent = strExplicacion;
                contenido.getElementsByClassName("foro")[0].textContent = strForo;
                contenido.getElementsByClassName("video")[0].setAttribute('src',strVideo);
            } else {
                console.error('Error al cargar el archivo XML');
            }
        }
    };
    xhttp.open("GET", "/proyecto1/datos/contenidoLecciones.xml", true);
    xhttp.send();
    
}


cargarLeccion(texto);
