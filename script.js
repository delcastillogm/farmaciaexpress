const stars = document.querySelectorAll(".star");
const btnEnviar = document.getElementById("btnEnviar");
const comentario = document.getElementById("comentario");
const thankyou = document.getElementById("thankyou");

let calificacion = 0;

// === Selección de estrellas ===
stars.forEach(star => {
  star.addEventListener("click", () => {
    calificacion = star.dataset.value;
    stars.forEach(s => s.classList.remove("active"));
    for (let i = 0; i < calificacion; i++) {
      stars[i].classList.add("active");
    }
  });
});

// === Envío de encuesta ===
btnEnviar.addEventListener("click", () => {
  const facilidad = document.querySelector("input[name='facilidad']:checked")?.value;
  const repartidor = document.querySelector("input[name='repartidor']:checked")?.value;
  const tiempo = document.querySelector("input[name='tiempo']:checked")?.value;

  if (!facilidad || !repartidor || !tiempo || calificacion === 0) {
    alert("Por favor responde todas las preguntas antes de enviar.");
    return;
  }

  const respuesta = {
    facilidad,
    repartidor,
    tiempo,
    calificacion,
    comentario: comentario.value.trim(),
    fecha: new Date().toLocaleString()
  };

  // === Simulación de almacenamiento ===
  const registros = JSON.parse(localStorage.getItem("encuestas") || "[]");
  registros.push(respuesta);
  localStorage.setItem("encuestas", JSON.stringify(registros));

  // === Mostrar mensaje de agradecimiento ===
  thankyou.classList.remove("d-none");
  comentario.value = "";
  stars.forEach(s => s.classList.remove("active"));
  calificacion = 0;
  document.querySelectorAll("input[type='radio']").forEach(i => i.checked = false);

  console.log("✅ Encuesta registrada:", respuesta);
});
