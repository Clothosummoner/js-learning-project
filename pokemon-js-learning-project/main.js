'use strict';

const button = document.getElementById("zeigeBtn");
const shinyBtn = document.getElementById("shinyBtn");
const ausgabe = document.getElementById("ausgabe");
const unlichtBtn = document.getElementById("unlichtBtn");
const nameInput = document.getElementById("nameInput");
const typInput = document.getElementById("typInput");
const attackenInput = document.getElementById("attackenInput");
const shinyInput = document.getElementById("shinyInput");
const addBtn = document.getElementById("addBtn");

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


unlichtBtn.addEventListener("click", function () {
    const unlichtPokemon = holeAllePokemons().filter(pokemon => pokemon.typ === "Unlicht");
    renderPokemonListe(unlichtPokemon);
});

addBtn.addEventListener("click", function () {
    const name = nameInput.value;
    const typ = typInput.value;
    const istShiny = shinyInput.checked;

    const attacken = attackenInput.value
        .split(",")
        .map(a => a.trim());

    fuegePokemonHinzu(holeAllePokemons(), name, typ, istShiny, attacken);

    renderPokemonListe(holeAllePokemons());
});
