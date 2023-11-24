const btnSignIn = document.getElementById("sign-in"),
  btnSignUp = document.getElementById("sign-up"),
  formRegister = document.querySelector(".register"),
  formLogin = document.querySelector(".login");

btnSignUp.addEventListener("click", (e) => {
  formLogin.classList.add("hide");
  formRegister.classList.remove("hide");
});

// DARK MODE

function toggleMode() {
  const body = document.body;

  // Alternar clases para cambiar el modo claro/oscuro
  body.classList.toggle("dark-mode");

  // Guardar el estado actual en el almacenamiento local (opcional)
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Verificar si el usuario tenía el modo oscuro activado al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
  }
});

// BOTON ME GUSTA

let likes = 0;

function like() {
  likes++;
  updateLikeCount();
}

function updateLikeCount() {
  const likeCountElement = document.getElementById("likeCount");
  likeCountElement.textContent = likes;
}
