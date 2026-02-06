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
function fuegeAttackeHinzu(pokemon, neueAttacke) {
    if (!pokemon.attacken.includes(neueAttacke)) {
        pokemon.attacken.push(neueAttacke);
        console.log(`Die Attacke "${neueAttacke}" wurde zu ${pokemon.name} hinzugefügt.`);
        return true;
    } else {
        console.log(`Die Attacke "${neueAttacke}" ist bereits bei ${pokemon.name} vorhanden.`);
        return false;
    }
}
function entferneAttacke(pokemon, attacke) {
    if (pokemon.attacken.includes(attacke)) {
        const index = pokemon.attacken.indexOf(attacke);
        pokemon.attacken.splice(index, 1);
        console.log(`Die Attacke "${attacke}" wurde von ${pokemon.name} entfernt.`);
        return true;
    } else {
        console.log(`Die Attacke "${attacke}" ist nicht bei ${pokemon.name} vorhanden.`);
        return false;
    }
}


// --- Programmstart ---
console.log("=== Alle Pokémon ===");
zeigeAllePokemons(pokedex);

console.log("\n=== Nur Shiny Pokémon ===");
zeigeNurShinyPokemons(pokedex);

console.log("\n=== Pokémon vom Typ Feuer ===");
zeigePokemonNachTyp(pokedex, "Feuer");

console.log("=== Vor dem Hinzufügen einer neuen Attacke ==="); 
zeigePokemon(darkrai);
fuegeAttackeHinzu(darkrai, "Schattenstoß");

console.log("\n=== Nach dem Hinzufügen einer neuen Attacke ===");
zeigePokemon(darkrai);
fuegeAttackeHinzu(darkrai, "Schattenstoß");

console.log("\n=== Vor dem Entfernen einer Attacke ===");
zeigePokemon(glurak);
entferneAttacke(glurak, "Sonnentag");

console.log("\n=== Nach dem Entfernen einer Attacke ===");
zeigePokemon(glurak);
entferneAttacke(glurak, "Sonnentag");
