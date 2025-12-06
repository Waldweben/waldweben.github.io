// ---- Página principal ----
function cargarMenu() {
    const cont = document.getElementById("menu");

    personas.forEach((p, i) => {
        const div = document.createElement("div");
        div.className = "columna";
        div.style.background = p.color;
        div.textContent = p.nombre;

        div.onclick = () => {
            window.location.href = "persona.html?id=" + i;
        };

        cont.appendChild(div);
    });
}

// ---- Cargar datos del menú individual ----
function cargarPersona() {
    const id = new URLSearchParams(window.location.search).get("id");
    const persona = personas[id];

    document.getElementById("nombre-persona").textContent = persona.nombre;
    document.getElementById("foto-persona").style.backgroundImage =
        `url(${persona.foto})`;

    const colores = document.getElementById("colores-lateral");

    personas.forEach((p) => {
        const c = document.createElement("div");
        c.style.flex = "1";
        c.style.background = p.color;
        colores.appendChild(c);
    });

    document.getElementById("btn-lista").onclick = () =>
        window.location.href = "lista.html?id=" + id;

    document.getElementById("btn-regresar").onclick = () =>
        window.location.href = "index.html";
}

// ---- Lista de regalos ----
function cargarLista() {
    const id = new URLSearchParams(window.location.search).get("id");
    const persona = personas[id];

    document.getElementById("lista-nombre").textContent = persona.nombre;

    const galeria = document.getElementById("galeria");

    persona.regalos.forEach(r => {
        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <img src="${r.img}">
            <p>${r.txt}</p>
        `;

        galeria.appendChild(div);

        document.getElementById("btn-regresar-lista").onclick = () =>
        window.location.href = "index.html";
    });
}
