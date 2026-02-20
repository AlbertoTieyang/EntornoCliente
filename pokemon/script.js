const texto = document.getElementById("texto");
const boton = document.getElementById("boton");

async function obtenerDatos(url) {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.forms[0].url;

    } catch (error) {
        console.log(error);
    }
}

async function ponerFoto(url) {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.sprites.front_default;

    } catch (error) {
        console.log(error);
    }
}

async function buscarPokemom() {
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000");
        const datos = await respuesta.json();
        for (const pokemon of datos.results) {

            if (pokemon.name === texto.value.toLowerCase()) {
                const p = document.createElement("p");
                p.textContent = pokemon.name;
                document.body.appendChild(p);
                const urlPokemon = pokemon.url;
                const datosPokemon = await obtenerDatos(urlPokemon);
                const fotoPokemon = await ponerFoto(datosPokemon);
                const img = document.createElement("img");
                img.src = fotoPokemon;
                document.body.appendChild(img);
                break; 
            }
        }

    } catch (error) {
        console.log(error);
    }
}

boton.addEventListener("click", buscarPokemom);