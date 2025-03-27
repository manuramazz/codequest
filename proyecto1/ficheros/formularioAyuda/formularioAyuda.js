
    botonLimpiar = document.querySelector('#btnLimpiar');
    botonLimpiar.addEventListener('click', limpiarFormulario);

    // Función para limpiar todo el formulario
    function limpiarFormulario() {

        botonLimpiar.disabled = true;

        let a = document.getElementsByTagName('input');
        for(let i=0; i<a.length; i++){
            a[i].value = '';
            
        }
        
        let b = document.getElementsByTagName('select');
        for(let i=0; i<b.length; i++){
            b[i].selectedIndex = 0;
        }
        
        let c = document.getElementsByTagName('textarea')
        for(let i=0; i<c.length; i++){
            c[i].value = '';
            
        }

        document.getElementById('rangoUrgencia').value = 0;
        document.getElementById('valorRango').textContent = '0';

        // Limpiar primera columna
        /*document.getElementById('campoNombre').value = '';
        document.getElementById('campoApellidos').value = '';
        document.getElementById('campoCorreo').value = '';
        document.getElementById('campoTelefono').value = '';
        
        // Limpiar segunda columna
        document.getElementById('campoSeleccionarProblema').selectedIndex = 0;
        document.getElementById('CampoOtroProblema').value = '';
        
        // Limpiar tercera columna
        document.getElementById('campoSeleccionarSO').selectedIndex = 0;
        document.getElementById('campoSeleccionarNavegador').selectedIndex = 0;
        document.getElementById('rangoUrgencia').value = 0;
        document.getElementById('valorRango').textContent = '0';*/
        
        //alert("Formulario borrado");
        
        if(document.getElementById("cajaTexto")){
            
            document.getElementById("cajaTexto").id = "cajaTextoAntigua";
            document.getElementById("cajaTextoAntigua").remove(); 
        }

        cajaFormulario = document.getElementById('cajaFormulario');

        cajaTexto = document.createElement("div");
        cajaTexto.className = "text-center fw-bold mt-4";
        cajaTexto.id= "cajaTexto";
        cajaTexto.textContent = "¡Se han borrado todos los campos con éxito!";
        
        cajaFormulario.appendChild(cajaTexto);

        setTimeout(function(){
            cajaTexto.remove(); 
            botonLimpiar.disabled = false;
            },
            3000);
        //IMPORTANTE: tiempo en milisegundos
    }

   

    // Actualizar el valor del slider
    document.getElementById('rangoUrgencia').addEventListener('input', function() {
        document.getElementById('valorRango').textContent = this.value;
    });





    //El formulario se ha envidado con exito
     botonEnviar =document.querySelector("#btnEnviar");
     botonEnviar.addEventListener('click', formularioEnviado);

     function formularioEnviado(){

        botonEnviar.disabled = true;

        //Eliminar el texto si ya hay texto (el de limpiar por ejemplo)
        if(document.getElementById("cajaTexto")){
            
            document.getElementById("cajaTexto").id = "cajaTextoAntigua";
            document.getElementById("cajaTextoAntigua").remove(); 
        }

        //Si no se ha rellenado el nombre, el problema y el correo no te deja enviar el formulario
        if(document.getElementById('campoNombre').value == '' || 
        document.getElementById('campoSeleccionarProblema').selectedIndex == 0 ||
        document.getElementById('campoCorreo').value == ''){
        
        cajaFormulario = document.getElementById('cajaFormulario');
        cajaTexto = document.createElement("div");
        cajaTexto.className = "text-center fw-bold mt-4";
        cajaTexto.textContent = "Completa los campos obligatorios";
        
        cajaFormulario.appendChild(cajaTexto);

        }else{
            //sino si que se envia
        cajaFormulario = document.getElementById('cajaFormulario');

        cajaTexto = document.createElement("div");
        cajaTexto.className = "text-center fw-bold mt-4";
        cajaTexto.textContent = "El formulario se ha enviado correctamente";
        
        cajaFormulario.appendChild(cajaTexto);

        }

        setTimeout(function(){
            cajaTexto.remove();
            botonEnviar.disabled = false;
        }
        ,3000);
     }

    
