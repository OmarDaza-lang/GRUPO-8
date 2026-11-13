let darkMode = false;

const mostrarDatos = document.getElementById("checkDesplegarDatos");
const datosCuriosos = document.querySelectorAll('.ocultable');
const darkModeCheck = document.getElementById("checkDarkMode");
const darkModeLabel = document.getElementById("darkModeLabel");
const contenidoCentral = document.getElementById("contenido-central");


if(mostrarDatos) {
    mostrarDatos.addEventListener("click", () => 
    {
        datosCuriosos.forEach(dato => {dato.classList.toggle('d-none');})
    });
}

darkModeCheck.addEventListener("click", () => 
    {
        if(!darkMode) {
            darkModeLabel.textContent = "Modo claro";
            darkMode = true;
        }
        else {
            darkModeLabel.textContent = "Modo oscuro";
            darkMode = false;
        }
        document.body.classList.toggle("dark-mode");
    });