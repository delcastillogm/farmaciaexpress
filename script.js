document.addEventListener("DOMContentLoaded", () => {
  // ====== LOGIN ======
  const btnLogin = document.getElementById("btnLogin");
  if (btnLogin) {
    btnLogin.addEventListener("click", () => {
      const usuario = document.getElementById("usuario").value.trim();
      const password = document.getElementById("password").value.trim();
      const msgError = document.getElementById("msgError");

      if (usuario === "admin" && password === "admin") {
        localStorage.setItem("adminLogged", "true");
        window.location.href = "admin.html";
      } else {
        msgError.style.display = "block";
      }
    });
  }

  // ====== BLOQUEO DE ACCESO DIRECTO AL DASHBOARD ======
  if (window.location.pathname.includes("dashboard.html")) {
    const autorizado = localStorage.getItem("adminLogged");
    if (!autorizado) {
      window.location.href = "login.html";
    }
  }

  // ====== CIERRE DE SESIÓN ======
  const btnLogout = document.getElementById("btnLogout");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      localStorage.removeItem("adminLogged");
      window.location.href = "index.html";
    });
  }

  // ====== REGISTRO DE MOVIMIENTOS ======
  const formMovimiento = document.getElementById("formMovimiento");
  const tablaInventario = document.getElementById("tablaInventario");

  if (formMovimiento && tablaInventario) {
    formMovimiento.addEventListener("submit", (e) => {
      e.preventDefault();

      const medicamento = document.getElementById("movMedicamento").value;
      const tipo = document.getElementById("movTipo").value;
      const cantidad = parseInt(document.getElementById("movCantidad").value);

      if (!medicamento || !cantidad) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      const filas = tablaInventario.querySelectorAll("tbody tr");
      let encontrada = false;

      filas.forEach((fila) => {
        const nombre = fila.children[0].innerText.trim();
        let stock = parseInt(fila.children[1].innerText);
        const stockMin = parseInt(fila.children[2].innerText);

        if (nombre === medicamento) {
          encontrada = true;

          if (tipo === "entrada") stock += cantidad;
          else if (tipo === "salida") stock = Math.max(0, stock - cantidad);

          fila.children[1].innerText = stock;

          fila.classList.remove("table-danger", "table-warning");
          if (stock < stockMin) fila.classList.add("table-danger");
          else if (stock <= stockMin + 3) fila.classList.add("table-warning");
        }
      });

      if (encontrada) {
        alert(`✅ Movimiento registrado correctamente para ${medicamento}.`);
        formMovimiento.reset();

        const modalEl = document.getElementById("modalMovimiento");
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      } else {
        alert("⚠️ Medicamento no encontrado en el inventario.");
      }
    });
  }
});

// ====== CAMBIAR ENTRE SECCIONES ======
function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}
