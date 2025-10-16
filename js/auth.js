// Sistema de autenticación y control de acceso
class AuthSystem {
  constructor() {
    this.currentUser = null
    this.loadSession()
  }

  // Cargar sesión desde localStorage
  loadSession() {
    const session = localStorage.getItem("farmacia_session")
    if (session) {
      try {
        this.currentUser = JSON.parse(session)
      } catch (e) {
        console.error("Error loading session:", e)
        this.currentUser = null
      }
    }
  }

  // Guardar sesión en localStorage
  saveSession() {
    if (this.currentUser) {
      localStorage.setItem("farmacia_session", JSON.stringify(this.currentUser))
    } else {
      localStorage.removeItem("farmacia_session")
    }
  }

  // Login con validación
  login(email, password) {
    // Validar campos vacíos
    if (!email || !password) {
      return { success: false, message: "Por favor complete todos los campos" }
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, message: "Formato de correo electrónico inválido" }
    }

    // Buscar usuario
    const user = window.DB.users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

    if (user) {
      this.currentUser = {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
        area: user.area,
      }
      this.saveSession()
      return { success: true, user: this.currentUser }
    }

    return { success: false, message: "Credenciales incorrectas" }
  }

  // Logout
  logout() {
    this.currentUser = null
    this.saveSession()
    window.location.href = window.location.pathname.includes("/pages/") ? "login.html" : "pages/login.html"
  }

  // Verificar si está autenticado
  isAuthenticated() {
    return this.currentUser !== null
  }

  // Verificar rol
  hasRole(roles) {
    if (!this.isAuthenticated()) return false
    if (typeof roles === "string") roles = [roles]
    return roles.includes(this.currentUser.rol)
  }

  // Proteger página
  protectPage(allowedRoles) {
    if (!this.isAuthenticated()) {
      window.location.href = window.location.pathname.includes("/pages/") ? "login.html" : "pages/login.html"
      return false
    }

    if (allowedRoles && !this.hasRole(allowedRoles)) {
      alert("No tienes permisos para acceder a esta página")
      this.redirectToDashboard()
      return false
    }

    return true
  }

  // Redirigir al dashboard según rol
  redirectToDashboard() {
    if (!this.isAuthenticated()) {
      window.location.href = window.location.pathname.includes("/pages/") ? "login.html" : "pages/login.html"
      return
    }

    const isInPagesFolder = window.location.pathname.includes("/pages/")

    switch (this.currentUser.rol) {
      case "admin":
        window.location.href = isInPagesFolder ? "intranet.html" : "pages/intranet.html"
        break
      case "farmaceutico":
        window.location.href = isInPagesFolder
          ? "farmacia/pedidos-aprobados.html"
          : "pages/farmacia/pedidos-aprobados.html"
        break
      case "logistica":
        window.location.href = isInPagesFolder
          ? "logistica/pedidos-preparados.html"
          : "pages/logistica/pedidos-preparados.html"
        break
      default:
        window.location.href = isInPagesFolder ? "../index.html" : "index.html"
    }
  }

  // Obtener usuario actual
  getCurrentUser() {
    return this.currentUser
  }
}

// Instancia global
window.Auth = new AuthSystem()
