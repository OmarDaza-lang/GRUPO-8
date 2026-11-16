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

    if (darkModeCheck) {
        darkModeCheck.addEventListener("change", function () {
        if (this.checked) {
            document.body.setAttribute('data-bs-theme', 'oscuro');
            if (darkModeLabel) darkModeLabel.textContent = "Modo claro";
            localStorage.setItem('theme', 'oscuro');
        }
        else {
            document.body.setAttribute('data-bs-theme', 'claro');
            if (darkModeLabel) darkModeLabel.textContent = "Modo oscuro";
            localStorage.setItem('theme', 'claro');
        }
    });
    }
    
    window.addEventListener('storage', (event) => {
        if (event.key === 'theme') {
            const temaSincronizado = event.newValue;
            document.body.setAttribute('data-bs-theme', temaSincronizado);
            if (darkModeCheck) {
                darkModeCheck.checked = (temaSincronizado === 'oscuro');
            }
            if (darkModeLabel) {
                darkModeLabel.textContent = (temaSincronizado === 'oscuro') ? "Modo claro" : "Modo oscuro";
            }
        }
    })
});

if(mostrarDatos) {
    mostrarDatos.addEventListener("click", () => {
        datosCuriosos.forEach(dato => {dato.classList.toggle('d-none');})
    });

    function actualizarDatosCuriosos() {
    datosCuriosos.forEach(e => {
        if(mostrarDatos.checked) {
            e.classList.remove('d-none');
        }
        else {
            e.classList.add('d-none');
        }
    })
    }

    actualizarDatosCuriosos();

    mostrarDatos.addEventListener('change', actualizarDatosCuriosos);
}



