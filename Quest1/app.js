'use strict';

// --- Pokémon-Daten ---
const glurak = {
    name: "Glurak",
    typ: "Feuer",
    istShiny: true,
    attacken: ["Flammenwurf", "Sonnentag", "Hitzewelle", "Feuersturm"],
};

const darkrai = {
    name: "Darkrai",
    typ: "Unlicht",
    istShiny: false,
    attacken: ["Finsteraura", "Spukball", "Traumfresser", "Dunkelnebel"],
};

const pokedex = [glurak, darkrai];

// --- Anzeige-Funktionen ---
function zeigePokemon(pokemon) {
    const shinyText = pokemon.istShiny ? "✨ Shiny" : "kein Shiny";
    console.log(
        `${pokemon.name} | Typ: ${pokemon.typ} | ${shinyText} | Attacken: ${pokemon.attacken.join(", ")}`
    );
}

// --- Logik-Funktionen ---
function zeigeAllePokemons(pokedex) {
    for (const pokemon of pokedex) {
        zeigePokemon(pokemon);
    }
}

function zeigeNurShinyPokemons(pokedex) {
    for (const pokemon of pokedex) {
        if (pokemon.istShiny) {
            zeigePokemon(pokemon);
        }
    }
}

function zeigePokemonNachTyp(pokedex, gesuchterTyp) {
    for (const pokemon of pokedex) {
        if (pokemon.typ === gesuchterTyp) {
            zeigePokemon(pokemon);
        }
    }
}

// --- Programmstart ---
console.log("=== Alle Pokémon ===");
zeigeAllePokemons(pokedex);

console.log("\n=== Nur Shiny Pokémon ===");
zeigeNurShinyPokemons(pokedex);

console.log("\n=== Pokémon vom Typ Feuer ===");
zeigePokemonNachTyp(pokedex, "Feuer");
