var html = '';

const enviarBoton = document.createElement("input");
enviarBoton.type = "button";
enviarBoton.value = "Enviar";
enviarBoton.className = "Enviar";
enviarBoton.setAttribute("onclick", "comentario()");

document.getElementById("enviarDiv").appendChild(enviarBoton);




    function comentario() {
        if(document.getElementById("username").value === '@pokemon'){}
        else{
            var textoPublicacion = document.getElementById("username");

            textoPublicacion.value = "";
            alert('Porfavor ingrese un nombre de usuario valido');
            document.getElementById("Comentario").value = "";
            }

        if(document.getElementById("correo").value ==='usuario@gmail'){}
        else{
            var correopubli = document.getElementById("correo");

            correopubli.value = "";
            alert('Porfavor ingrese un correo electronico valido');
            document.getElementById("Comentario").value = "";
            }


        if(document.getElementById("username").value === '@pokemon')
        if(document.getElementById("correo").value ==='usuario@gmail')
        if(document.getElementById("Comentario").value)
        {alert('Comentario Enviado')
        document.getElementById("Comentario").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("username").value = "";}
        else{
            var comentariopubli = document.getElementById("Comentario");

                comentariopubli.value = "";
                alert('Porfavor ingrese un comentario');}
    }
    function redirectToRegistration() {
        window.location.href = "registrarse.html";
      }


const botoniniciarsesion = document.createElement("button");
botoniniciarsesion.id = "iniciarSesion";
botoniniciarsesion.className = "ini";
botoniniciarsesion.textContent = "Iniciar Sesión";

document.querySelector("nav").appendChild(botoniniciarsesion);

botoniniciarsesion.onclick = function() {
    window.location.href = `iniciarsesion.html`;
  }
