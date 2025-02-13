function header() {
    let div = document.createElement('div');
    div.className = "div-header";

    // Contenedor del logo
    let logoContainer = document.createElement('div');
    logoContainer.className = "logo-container";

    let img = document.createElement('img');
    img.className = "img";
    img.src = "https://img.freepik.com/vector-gratis/gradiente-ilustracion-pajaro-colorido_343694-1741.jpg";
    
    logoContainer.appendChild(img);

    // Contenedor de los niveles
    let nivelesContainer = document.createElement('div');
    nivelesContainer.className = "niveles";
    nivelesContainer.textContent = "Niveles";

    // Agregar ambos elementos al header
    div.appendChild(logoContainer);
    div.appendChild(nivelesContainer);

    return div;
}

export { header };
