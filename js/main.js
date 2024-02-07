const selectMenu = document.querySelector("select#Menu")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputPersonas = document.querySelector("input#personas")
const valorVelada = document.querySelector("span#valorVelada")

const btnPresupuesto = document.querySelector("button.button.button-outline")

const btnGuardar = document.querySelector("span.guardar")
const arrayHistorial = []

function cargarMenues() {
    datosMenu.forEach((menu)=> {
        selectMenu.innerHTML += `<option>${menu.tipo}</option>`
    })
}

function cargarUbicaciones() {
    datosUbicacion.forEach((ubicacion)=> {
        selectUbicacion.innerHTML += `<option>${ubicacion.tipo}</option>`
    })
}

cargarMenues()
cargarUbicaciones()

function retornarFactorMenu(tipoMenu) {
    return datosMenu.find((menu)=> menu.tipo === tipoMenu)
}

function retornarFactorUbicacion(tipoUbica) {
    return datosUbicacion.find((ubicacion)=> ubicacion.tipo === tipoUbica)
}

function cotizarVelada() {
    if (selectMenu.value !== 'Seleccionar...' && selectUbicacion.value !== 'Seleccionar...' && (inputPersonas.value >= 1 && inputPersonas.value <= 20)) {
        let personas = inputPersonas.value
        let factorMenu = retornarFactorMenu(selectMenu.value)
        let factorUbicacion = retornarFactorUbicacion(selectUbicacion.value)

        const generartotal = new generarTotal(personas, factorMenu, factorUbicacion, costoCubiertos)
        return generartotal.total()
    }
}

btnPresupuesto.addEventListener("click", ()=> {
    let resultado = cotizarVelada()

    if (resultado !== 'Error') {
        valorVelada.textContent = resultado}})

        btnGuardar.addEventListener("click", ()=> {
            const historialGenerarTotal = {
                fecha: Date(),
                menu: selectMenu.value,
                ubicacion: selectUbicacion.value,
                personas: inputPersonas.value,
                Velada: valorVelada.textContent
            }
        
            localStorage.setItem("HistorialGenerarTotal", JSON.stringify(historialGenerarTotal))
        })        