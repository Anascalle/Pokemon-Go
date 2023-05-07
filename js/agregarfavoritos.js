const favoritosIcono = document.createElement("i");
    favoritosIcono.className = "fas fa-star star-icon";

    document.getElementById("imagen").appendChild(favoritosIcono);

    favoritosIcono.onclick = function() {
        if (favoritosIcono.classList.contains('clicked')) {
            favoritosIcono.classList.remove('clicked');
            
        } else {
            favoritosIcono.classList.add('clicked');
            alert("Se ha agregado a favoritos");
        }
    };
