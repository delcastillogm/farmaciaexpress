// Simulación de Base de Datos en Memoria
class Database {
  constructor() {
    this.pedidos = [
      {
        id: "PED-001",
        medicamento: "PARACETAMOL 500MG",
        cantidad: 30,
        paciente: "JUAN PÉREZ",
        habitacion: "HAB. 205",
        destino: "HOSPITAL CENTRAL - ZONA NORTE",
        urgencia: "URGENTE",
        zona: "NORTE",
        estado: "APROBADO",
        lote: null,
        vencimiento: null,
        preparadoEn: null,
        repartidor: null,
        despachadoEn: null,
        tracking: null,
      },
      {
        id: "PED-002",
        medicamento: "IBUPROFENO 400MG",
        cantidad: 20,
        paciente: "MARÍA GARCÍA",
        habitacion: "HAB. 310",
        destino: "HOSPITAL CENTRAL - ZONA SUR",
        urgencia: "NORMAL",
        zona: "SUR",
        estado: "APROBADO",
        lote: null,
        vencimiento: null,
        preparadoEn: null,
        repartidor: null,
        despachadoEn: null,
        tracking: null,
      },
      {
        id: "PED-003",
        medicamento: "AMOXICILINA 250MG",
        cantidad: 15,
        paciente: "CARLOS LÓPEZ",
        habitacion: "HAB. 102",
        destino: "HOSPITAL CENTRAL - ZONA CENTRO",
        urgencia: "BAJA",
        zona: "CENTRO",
        estado: "PREPARADO",
        lote: "LOT123456",
        vencimiento: "31/12/2025",
        preparadoEn: "14:32",
        repartidor: null,
        despachadoEn: null,
        tracking: null,
      },
      {
        id: "PED-004",
        medicamento: "OMEPRAZOL 20MG",
        cantidad: 28,
        paciente: "ANA MARTÍNEZ",
        habitacion: "HAB. 401",
        destino: "CLÍNICA SAN JOSÉ - ZONA NORTE",
        urgencia: "NORMAL",
        zona: "NORTE",
        estado: "APROBADO",
        lote: null,
        vencimiento: null,
        preparadoEn: null,
        repartidor: null,
        despachadoEn: null,
        tracking: null,
      },
      {
        id: "PED-005",
        medicamento: "LOSARTÁN 50MG",
        cantidad: 30,
        paciente: "ROBERTO SÁNCHEZ",
        habitacion: "HAB. 215",
        destino: "HOSPITAL REGIONAL - ZONA SUR",
        urgencia: "URGENTE",
        zona: "SUR",
        estado: "APROBADO",
        lote: null,
        vencimiento: null,
        preparadoEn: null,
        repartidor: null,
        despachadoEn: null,
        tracking: null,
      },
      {
        id: "PED-006",
        medicamento: "METFORMINA 850MG",
        cantidad: 60,
        paciente: "LAURA TORRES",
        habitacion: "HAB. 108",
        destino: "CENTRO MÉDICO - ZONA CENTRO",
        urgencia: "BAJA",
        zona: "CENTRO",
        estado: "PREPARADO",
        lote: "LOT789012",
        vencimiento: "15/06/2026",
        preparadoEn: "15:45",
        repartidor: null,
        despachadoEn: null,
        tracking: null,
      },
      {
        id: "PED-007",
        medicamento: "ATORVASTATINA 20MG",
        cantidad: 30,
        paciente: "DIEGO RAMÍREZ",
        habitacion: "HAB. 302",
        destino: "HOSPITAL UNIVERSITARIO - ZONA NORTE",
        urgencia: "NORMAL",
        zona: "NORTE",
        estado: "EN_DESPACHO",
        lote: "LOT345678",
        vencimiento: "20/08/2025",
        preparadoEn: "10:15",
        repartidor: "CARLOS MENDOZA",
        despachadoEn: "10:30",
        fechaDespacho: "2025-01-16",
        tracking: "TRK-007-2025",
      },
      {
        id: "PED-008",
        medicamento: "ENALAPRIL 10MG",
        cantidad: 30,
        paciente: "SOFÍA RAMÍREZ",
        habitacion: "HAB. 203",
        destino: "HOSPITAL CENTRAL - ZONA SUR",
        urgencia: "NORMAL",
        zona: "SUR",
        estado: "EN_DESPACHO",
        lote: "LOT456789",
        vencimiento: "10/09/2025",
        preparadoEn: "11:20",
        repartidor: "LUIS GARCÍA",
        despachadoEn: "11:35",
        fechaDespacho: "2025-01-16",
        tracking: "TRK-008-2025",
      },
      {
        id: "PED-009",
        medicamento: "LEVOTIROXINA 100MCG",
        cantidad: 30,
        paciente: "PATRICIA MORALES",
        habitacion: "HAB. 150",
        destino: "CENTRO MÉDICO - ZONA CENTRO",
        urgencia: "URGENTE",
        zona: "CENTRO",
        estado: "EN_DESPACHO",
        lote: "LOT567890",
        vencimiento: "25/07/2025",
        preparadoEn: "09:45",
        repartidor: "JORGE PÉREZ",
        despachadoEn: "10:00",
        fechaDespacho: "2025-01-16",
        tracking: "TRK-009-2025",
      },
      {
        id: "PED-010",
        medicamento: "ASPIRINA 100MG",
        cantidad: 60,
        paciente: "FERNANDO CASTRO",
        habitacion: "HAB. 405",
        destino: "CLÍNICA DEL NORTE - ZONA NORTE",
        urgencia: "BAJA",
        zona: "NORTE",
        estado: "EN_DESPACHO",
        lote: "LOT678901",
        vencimiento: "30/11/2025",
        preparadoEn: "13:10",
        repartidor: "CARLOS MENDOZA",
        despachadoEn: "13:25",
        fechaDespacho: "2025-01-16",
        tracking: "TRK-010-2025",
      },
      {
        id: "PED-011",
        medicamento: "SIMVASTATINA 40MG",
        cantidad: 30,
        paciente: "ROBERTO DÍAZ",
        habitacion: "HAB. 501",
        destino: "HOSPITAL CENTRAL - ZONA NORTE",
        urgencia: "URGENTE",
        zona: "NORTE",
        estado: "ENTREGADO",
        lote: "LOT789123",
        vencimiento: "15/10/2025",
        preparadoEn: "08:30",
        repartidor: "CARLOS MENDOZA",
        despachadoEn: "08:45",
        fechaDespacho: "2025-01-15",
        tracking: "TRK-011-2025",
        fechaEntrega: "2025-01-15",
        horaEntrega: "09:15",
        nombreReceptor: "Roberto Díaz",
        metodoPago: "Efectivo",
        comentarios: "Entrega realizada sin inconvenientes",
        evidenciaFoto:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        entregadoEn: "2025-01-15T09:15:00.000Z",
      },
      {
        id: "PED-012",
        medicamento: "CAPTOPRIL 25MG",
        cantidad: 60,
        paciente: "ELENA VARGAS",
        habitacion: "HAB. 308",
        destino: "HOSPITAL REGIONAL - ZONA SUR",
        urgencia: "NORMAL",
        zona: "SUR",
        estado: "ENTREGADO",
        lote: "LOT890234",
        vencimiento: "20/12/2025",
        preparadoEn: "10:00",
        repartidor: "LUIS GARCÍA",
        despachadoEn: "10:20",
        fechaDespacho: "2025-01-15",
        tracking: "TRK-012-2025",
        fechaEntrega: "2025-01-15",
        horaEntrega: "11:00",
        nombreReceptor: "Elena Vargas",
        metodoPago: "Tarjeta",
        comentarios: "Paciente satisfecho con el servicio",
        evidenciaFoto:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        entregadoEn: "2025-01-15T11:00:00.000Z",
      },
      {
        id: "PED-013",
        medicamento: "RANITIDINA 150MG",
        cantidad: 20,
        paciente: "MIGUEL ÁNGEL RUIZ",
        habitacion: "HAB. 125",
        destino: "CENTRO MÉDICO - ZONA CENTRO",
        urgencia: "BAJA",
        zona: "CENTRO",
        estado: "ENTREGADO",
        lote: "LOT901345",
        vencimiento: "05/08/2025",
        preparadoEn: "14:15",
        repartidor: "JORGE PÉREZ",
        despachadoEn: "14:30",
        fechaDespacho: "2025-01-15",
        tracking: "TRK-013-2025",
        fechaEntrega: "2025-01-15",
        horaEntrega: "15:10",
        nombreReceptor: "Miguel Ángel Ruiz",
        metodoPago: "Transferencia",
        comentarios: "Entrega en tiempo récord",
        evidenciaFoto:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
        entregadoEn: "2025-01-15T15:10:00.000Z",
      },
    ]

    this.repartidores = [
      { id: 1, nombre: "CARLOS MENDOZA", zona: "NORTE", estado: "DISPONIBLE" },
      { id: 2, nombre: "ANA TORRES", zona: "NORTE", estado: "EN_RUTA" },
      { id: 3, nombre: "LUIS GARCÍA", zona: "SUR", estado: "DISPONIBLE" },
      { id: 4, nombre: "MARÍA LÓPEZ", zona: "SUR", estado: "DISPONIBLE" },
      { id: 5, nombre: "JORGE PÉREZ", zona: "CENTRO", estado: "DISPONIBLE" },
    ]

    this.users = [
      {
        id: 1,
        nombre: "Administrador",
        email: "admin@farmacia.com",
        password: "admin123",
        rol: "admin",
        area: "Administración",
      },
      {
        id: 2,
        nombre: "Carla Méndez",
        email: "farmacia@farmacia.com",
        password: "farm123",
        rol: "farmaceutico",
        area: "Farmacia",
      },
      {
        id: 3,
        nombre: "Luis Ramos",
        email: "logistica@farmacia.com",
        password: "log123",
        rol: "logistica",
        area: "Logística",
      },
      {
        id: 4,
        nombre: "Carlos Mendoza",
        email: "carlos@farmacia.com",
        password: "rep123",
        rol: "repartidor",
        area: "Reparto",
        zona: "NORTE",
      },
      {
        id: 5,
        nombre: "Luis García",
        email: "luis@farmacia.com",
        password: "rep123",
        rol: "repartidor",
        area: "Reparto",
        zona: "SUR",
      },
      {
        id: 6,
        nombre: "Jorge Pérez",
        email: "jorge@farmacia.com",
        password: "rep123",
        rol: "repartidor",
        area: "Reparto",
        zona: "CENTRO",
      },
    ]

    this.loadFromStorage()
  }

  // Cargar desde localStorage
  loadFromStorage() {
    const data = localStorage.getItem("pharmaDB")
    if (data) {
      try {
        const parsed = JSON.parse(data)
        this.pedidos = parsed.pedidos || this.pedidos
        this.repartidores = parsed.repartidores || this.repartidores
      } catch (e) {
        console.error("Error loading data from storage:", e)
      }
    }
  }

  // Guardar en localStorage
  saveToStorage() {
    try {
      localStorage.setItem(
        "pharmaDB",
        JSON.stringify({
          pedidos: this.pedidos,
          repartidores: this.repartidores,
        }),
      )
    } catch (e) {
      console.error("Error saving data to storage:", e)
    }
  }

  // Obtener pedidos por estado
  getPedidosByEstado(estado) {
    return this.pedidos.filter((p) => p.estado === estado)
  }

  // Obtener pedidos por zona
  getPedidosByZona(zona) {
    return this.pedidos.filter((p) => p.zona === zona)
  }

  // Obtener pedido por ID
  getPedidoById(id) {
    return this.pedidos.find((p) => p.id === id)
  }

  // Actualizar estado del pedido
  updatePedidoEstado(id, nuevoEstado, datos = {}) {
    const pedido = this.getPedidoById(id)
    if (pedido) {
      pedido.estado = nuevoEstado
      Object.assign(pedido, datos)
      this.saveToStorage()
      return true
    }
    return false
  }

  // Preparar pedido
  prepararPedido(id, lote, vencimiento) {
    const ahora = new Date()
    const hora = `${ahora.getHours()}:${ahora.getMinutes().toString().padStart(2, "0")}`
    return this.updatePedidoEstado(id, "PREPARADO", {
      lote,
      vencimiento,
      preparadoEn: hora,
    })
  }

  // Asignar repartidor
  asignarRepartidor(pedidoId, repartidorNombre) {
    const repartidor = this.repartidores.find((r) => r.nombre === repartidorNombre)
    if (repartidor) {
      repartidor.estado = "EN_RUTA"
      const ahora = new Date()
      const hora = `${ahora.getHours()}:${ahora.getMinutes().toString().padStart(2, "0")}`
      const fecha = ahora.toISOString().split("T")[0] // Format: YYYY-MM-DD
      const tracking = `TRK-${pedidoId.split("-")[1]}-2025`
      return this.updatePedidoEstado(pedidoId, "EN_DESPACHO", {
        repartidor: repartidorNombre,
        despachadoEn: hora,
        fechaDespacho: fecha,
        tracking,
      })
    }
    return false
  }

  // Obtener repartidores disponibles por zona
  getRepartidoresDisponibles(zona) {
    return this.repartidores.filter((r) => r.zona === zona && r.estado === "DISPONIBLE")
  }

  // Obtener todos los repartidores por zona
  getRepartidoresByZona(zona) {
    return this.repartidores.filter((r) => r.zona === zona)
  }

  // Entregar pedido
  entregarPedido(id) {
    const pedido = this.getPedidoById(id)
    if (pedido) {
      const repartidor = this.repartidores.find((r) => r.nombre === pedido.repartidor)
      if (repartidor) {
        repartidor.estado = "DISPONIBLE"
      }
      return this.updatePedidoEstado(id, "ENTREGADO")
    }
    return false
  }

  // Obtener usuario actual por área
  getUsuarioActual(area) {
    return this.users.find((u) => u.area.toLowerCase() === area.toLowerCase()) || this.users[0]
  }

  // Iniciar preparación
  iniciarPreparacion(id) {
    return this.updatePedidoEstado(id, "EN_PREPARACION")
  }

  // Obtener todos los pedidos
  getPedidos() {
    return this.pedidos
  }

  // Guardar encuesta
  saveSurvey(surveyData) {
    const surveys = JSON.parse(localStorage.getItem("encuestas") || "[]")
    surveys.push(surveyData)
    localStorage.setItem("encuestas", JSON.stringify(surveys))
    return true
  }

  // Obtener todas las encuestas
  getSurveys() {
    return JSON.parse(localStorage.getItem("encuestas") || "[]")
  }

  // Obtener pedidos asignados a un repartidor específico
  getPedidosByRepartidor(nombreRepartidor) {
    const nombreUpper = nombreRepartidor.toUpperCase()
    return this.pedidos.filter((p) => p.repartidor && p.repartidor.toUpperCase() === nombreUpper)
  }

  // Registrar entrega con información completa
  registrarEntrega(pedidoId, datosEntrega) {
    const pedido = this.getPedidoById(pedidoId)
    if (pedido && pedido.estado === "EN_DESPACHO") {
      const repartidor = this.repartidores.find((r) => r.nombre === pedido.repartidor)
      if (repartidor) {
        repartidor.estado = "DISPONIBLE"
      }
      return this.updatePedidoEstado(pedidoId, "ENTREGADO", {
        fechaEntrega: datosEntrega.fechaEntrega,
        horaEntrega: datosEntrega.horaEntrega,
        nombreReceptor: datosEntrega.nombreReceptor,
        comentarios: datosEntrega.comentarios,
        evidenciaFoto: datosEntrega.evidenciaFoto,
        entregadoEn: new Date().toISOString(),
      })
    }
    return false
  }
}

// Instancia global
window.DB = new Database()
