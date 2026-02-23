'use strict';

const button = document.getElementById("zeigeBtn");
const ausgabe = document.getElementById("ausgabe");

button.addEventListener("click", function () {
    ausgabe.innerHTML = "";

    for (const pokemon of pokedex) {
        const shinyText = pokemon.istShiny ? "✨ Shiny" : "kein Shiny";

        ausgabe.innerHTML += `
            <div>
                <h3>${pokemon.name}</h3>
                <p>Typ: ${pokemon.typ}</p>
                <p>${shinyText}</p>
                <p>Attacken: ${pokemon.attacken.join(", ")}</p>
            </div>
        `;
    }
});
const shinyBtn = document.getElementById("shinyBtn");

shinyBtn.addEventListener("click", function () {
    ausgabe.innerHTML = "";

    for (const pokemon of pokedex) {
        if (pokemon.istShiny) {
            ausgabe.innerHTML += `
                <div>
                    <h3>${pokemon.name}</h3>
                    <p>Typ: ${pokemon.typ}</p>
                </div>
            `;
        }
    }
});

function renderPokemonListe(liste) {
    ausgabe.innerHTML = "";

    for (const pokemon of liste) {
        const shinyText = pokemon.istShiny ? "✨ Shiny" : "kein Shiny";

        ausgabe.innerHTML += `
            <div>
                <h3>${pokemon.name}</h3>
                <p>Typ: ${pokemon.typ}</p>
                <p>${shinyText}</p>
                <p>Attacken: ${pokemon.attacken.join(", ")}</p>
            </div>
        `;
    }
}

button.addEventListener("click", function () {
    renderPokemonListe(holeAllePokemons());
});

shinyBtn.addEventListener("click", function () {
    renderPokemonListe(holeShinyPokemons());
});
