const boton = document.getElementById('botonCargar');
const contenedor = document.getElementById('lista-libros');

async function obtenerLibros() {
    try {
        const respuesta = await fetch("https://stephen-king-api.onrender.com/api/books");
        const datos = await respuesta.json();
        datos.data.forEach(libro => {
            const p = document.createElement('p');
            p.classList.add("bg-primary");
            p.textContent = libro.Title;
            contenedor.appendChild(p);
        });
    } catch (error) {
        console.error(error);
    }
}
boton.addEventListener('click', obtenerLibros);