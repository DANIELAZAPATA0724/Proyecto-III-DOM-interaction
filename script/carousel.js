function clearDefaultText() {
  var emailInput = document.getElementById("email");
  if (emailInput.value === "correo@example.com") {
    emailInput.value = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("myForm");
  const emailInput = document.getElementById("email");
  const validationMessage = document.getElementById("validationMessage");

  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(emailInput.value);

    if (isEmailValid) {
      validationMessage.textContent = "Correo electrónico válido";
      validationMessage.style.color = "green";
    } else {
      validationMessage.textContent =
        "Por favor, introduce un correo electrónico válido";
      validationMessage.style.color = "red";
    }
  });
});

const navLinks = document.querySelector("#navLinks");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  navLinks.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  navLinks.classList.remove("visible");
});

// CAROUSEL

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  let index = 0;

  function updateTrack() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function prevSlide() {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 1;
    }
    updateTrack();
  }

  function nextSlide() {
    if (index < items.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateTrack();
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  setInterval(nextSlide, 5000); // Cambiar las imágenes automáticamente cada 5 segundos
});

// NEWSLETTER

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("email");
  const validationMessage = document.getElementById("validationMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (isValidEmail(emailInput.value)) {
      validationMessage.textContent = "Formulario enviado correctamente.";
      validationMessage.style.color = "green";
      form.reset();
    } else {
      validationMessage.textContent =
        "Por favor, ingresa un correo electrónico válido.";
      validationMessage.style.color = "red";
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
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

