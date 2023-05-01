const usernameInput = document.getElementById("nombreInput")
const passwordInput = document.querySelector('.contra');
const iniciarSesionBtn = document.getElementById("boton2")



function verificarCampos() {

    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        iniciarSesionBtn.classList.remove("deButton");
        iniciarSesionBtn.classList.add("activarButton");
        iniciarSesionBtn.disabled = false;
      } else {
        iniciarSesionBtn.classList.remove("activarButton");
        iniciarSesionBtn.classList.add("deButton");
        iniciarSesionBtn.disabled = true;
      }
    // iniciarSesionBtn.disabled = false;
  //} else {
  //  iniciarSesionBtn.disabled = true;
  }

verificarCampos()
usernameInput.addEventListener("input",()=>{
    verificarCampos()
})
passwordInput.addEventListener('input', ()=>{
    verificarCampos()
});

iniciarSesionBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "./Pokedex.html"
})





