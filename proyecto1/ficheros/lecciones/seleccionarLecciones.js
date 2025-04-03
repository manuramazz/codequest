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
                
                

                console.log(texto);
                // Buscar la lección específica en el XML
                //let leccion = xmlDoc.querySelector('[id="Objetos en Java"]');
                let leccion = xmlDoc.getElementsByTagName(texto)[0];
                
               //seteo todos los elementos 
               let strClase = leccion.getElementsByTagName("curso")[0].textContent;
               console.log(strClase);
                let strExplicacion = leccion.getElementsByTagName("explicacion")[0].textContent;
                let strForo = leccion.getElementsByTagName("foro")[0].innerHTML;
                let video = leccion.getElementsByTagName("video")[0];
                let enlaceBiblio = leccion.getElementsByTagName("bibliografia")[0].textContent;
                let strBiblio = leccion.getElementsByTagName("texto_biblio")[0].textContent;

                
                contenido.getElementsByClassName("nombreClase")[0].textContent = strClase;
                contenido.getElementsByClassName("explicacion")[0].textContent = strExplicacion;
                contenido.getElementsByClassName("foro")[0].innerHTML = strForo;

                //Insertar video embebido (tenemos que ponerle los atributos a mano porque sino google lo bloqueaba)
                contenido.getElementsByClassName("video")[0].setAttribute('width',video.getElementsByTagName("width")[0].textContent);
                contenido.getElementsByClassName("video")[0].setAttribute('height',video.getElementsByTagName("height")[0].textContent);
                contenido.getElementsByClassName("video")[0].setAttribute('src',video.getElementsByTagName("src")[0].textContent);
                contenido.getElementsByClassName("video")[0].setAttribute('frameborder',video.getElementsByTagName("frameborder")[0].textContent);
                contenido.getElementsByClassName("video")[0].setAttribute('allow',video.getElementsByTagName("allow")[0].textContent);
                contenido.getElementsByClassName("video")[0].setAttribute('referrerpolicy',video.getElementsByTagName("referrerpolicy")[0].textContent);
                contenido.getElementsByClassName("video")[0].setAttribute('allowfullscreen',video.getElementsByTagName("allowfullscreen")[0].textContent);

                //insertar bibliografia
                contenido.getElementsByClassName("bibliografia")[0].setAttribute('href',enlaceBiblio);
                contenido.getElementsByClassName("bibliografia")[0].textContent = strBiblio;
                



                //DIV DE LA CABECERA PARA PONER IMAGEN Y TITULO
                let tituloLeccion = document.getElementsByClassName("titulo_leccion")[0]; 


                tituloLeccion.getElementsByClassName("clase")[0].textContent = strClase;

                let imagenTitulo = leccion.getElementsByTagName("imagen")[0].textContent;
                console.log(imagenTitulo);
                tituloLeccion.getElementsByClassName("imagen_titulo")[0].setAttribute('src',imagenTitulo);

            } else {
                console.error('Error al cargar el archivo XML');
            }
        }
    };
    xhttp.open("GET", "/proyecto1/datos/contenidoLecciones.xml", true);
    xhttp.send();
    
}


cargarLeccion(texto);
