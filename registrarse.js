const usernameInput = document.getElementById("nombreInput")
const passwordInput = document.querySelector('.contra');
const mailInput = document.querySelector('.mail');
const iniciarSesionBtn = document.getElementById("boton2")



function verificarCampos() {
    console.log("verificarCampos")
  if (usernameInput.value.trim() === '' && passwordInput.value.trim() === '' && mailInput.value.trim() === '') {
        iniciarSesionBtn.classList.remove("activarButton")
        iniciarSesionBtn.classList.add("deButton")
        iniciarSesionBtn.disabled = true;
    } else if(usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '' && mailInput.value.trim() !== '') {
        iniciarSesionBtn.classList.remove("deButton")
        iniciarSesionBtn.classList.add("activarButton")
        iniciarSesionBtn.disabled = false;
    }
    // iniciarSesionBtn.disabled = false;
  //} else {
  //  iniciarSesionBtn.disabled = true;
  }


usernameInput.addEventListener("change",()=>{
    verificarCampos()
})
mailInput.addEventListener("change",()=>{
    verificarCampos()
})
passwordInput.addEventListener("change", ()=>{
    verificarCampos()
});

iniciarSesionBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "./Pokedex.html"
})