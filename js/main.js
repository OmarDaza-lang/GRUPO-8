const mostrarDatos = document.getElementById("checkDesplegarDatos");
const datosCuriosos = document.querySelectorAll('.ocultable');
const contenidoCentral = document.getElementById("contenido-central");

document.addEventListener('DOMContentLoaded', () => {
    const darkModeCheck = document.getElementById("checkDarkMode");
    const darkModeLabel = document.getElementById("darkModeLabel");
    const modoGuardado = localStorage.getItem('theme');

    if (modoGuardado === 'oscuro') {
        document.body.setAttribute('data-bs-theme', 'oscuro');
        darkModeCheck.checked = true;
        darkModeLabel.textContent = "Modo claro"
    }
    else {
        document.body.setAttribute('data-bs-theme', 'claro');
        darkModeCheck.checked = false;
        darkModeLabel.textContent = "Modo oscuro"
    }

    darkModeCheck.addEventListener("change", function () {
        if (this.checked) {
            document.body.setAttribute('data-bs-theme', 'oscuro');
            darkModeLabel.textContent = "Modo claro";
            localStorage.setItem('theme', 'oscuro');
        }
        else {
            document.body.setAttribute('data-bs-theme', 'claro');
            darkModeLabel.textContent = "Modo oscuro";
            localStorage.setItem('theme', 'claro');
        }
    });
});

if(mostrarDatos) {
    mostrarDatos.addEventListener("click", () => {
        datosCuriosos.forEach(dato => {dato.classList.toggle('d-none');})
    });
}

