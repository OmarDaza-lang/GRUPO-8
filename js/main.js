const mostrarDatos = document.getElementById("checkDesplegarDatos")
const datosCuriosos = document.querySelectorAll('.ocultable')

mostrarDatos.addEventListener("click", () => 
    {
        datosCuriosos.forEach(dato => {dato.classList.toggle('d-none');})
    })