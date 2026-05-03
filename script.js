const slides = document.querySelectorAll(".slide");
const btnIzq = document.querySelector(".izquierda");
const btnDer = document.querySelector(".derecha");

let index = 0;

function mostrarSlide(i) {
  slides.forEach(s => s.classList.remove("activo"));
  slides[i].classList.add("activo");
}

btnDer.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  mostrarSlide(index);
});

btnIzq.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  mostrarSlide(index);
});

/* automático */
setInterval(() => {
  index++;
  if (index >= slides.length) index = 0;
  mostrarSlide(index);
}, 5000);

function verificarRespuesta(respuesta) {
  const resultado = document.getElementById("resultado-simulador");

  if (respuesta === "phishing") {
    resultado.textContent = "Correcto. El mensaje es phishing porque usa urgencia, pide datos personales y muestra un enlace sospechoso.";
    resultado.style.color = "#16a34a";
  } else {
    resultado.textContent = "Incorrecto. Este mensaje es sospechoso porque intenta asustar al usuario para que entregue sus datos.";
    resultado.style.color = "#dc2626";
  }
}

