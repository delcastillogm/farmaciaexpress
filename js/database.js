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
        tracking: "TRK-007-2025",
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
      const tracking = `TRK-${pedidoId.split("-")[1]}-2025`
      return this.updatePedidoEstado(pedidoId, "EN_DESPACHO", {
        repartidor: repartidorNombre,
        despachadoEn: hora,
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
}

// Instancia global
window.DB = new Database()
