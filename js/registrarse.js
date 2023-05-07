const usernameInput = document.getElementById("nombreInput");
const passwordInput = document.querySelector('.contra');
const mailInput = document.querySelector('.mail');
const iniciarSesionBtn = document.getElementById("boton2");


function verificarCampos() {
  if (
    usernameInput.value.trim() === '' ||
    passwordInput.value.trim() === '' ||
    mailInput.value.trim() === ''
  ) {
    iniciarSesionBtn.classList.remove("activarButton");
    iniciarSesionBtn.classList.add("deButton");
    iniciarSesionBtn.disabled = true;
  } else {
    iniciarSesionBtn.classList.remove("deButton");
    iniciarSesionBtn.classList.add("activarButton");
    iniciarSesionBtn.disabled = false;
  }
 
}

usernameInput.addEventListener("input", () => {
  verificarCampos();
});

mailInput.addEventListener("input", () => {
  verificarCampos();
});

passwordInput.addEventListener("input", () => {
  verificarCampos();
});

iniciarSesionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (passwordInput.value.length < 8 && mailInput.value.includes('@')) {
    alert("La contraseña debe tener al menos 8 caracteres");
  } else if (!mailInput.value.includes('@')) {
    alert("El correo electrónico debe contener el símbolo '@'");
  } else {
    window.location.href = "./Pokedex.html";
  }
});
