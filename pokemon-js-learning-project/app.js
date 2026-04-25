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
function holeAllePokemons() {
    return pokedex;
}

function holeShinyPokemons() {
    return pokedex.filter(pokemon => pokemon.istShiny);
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
function pokemonExistiert(pokedex, name) {
    for (const pokemon of pokedex) {
        if (pokemon.name === name) {
            return true;
        }
    }
    return false;
}
function fuegePokemonHinzu(pokedex, name, typ, istShiny, attacken) {
    if (pokemonExistiert(pokedex, name)) {
        console.log(`Das Pokémon "${name}" existiert bereits im Pokédex.`);
        return false;
    } 
        const neuesPokemon = { name, typ, istShiny, attacken };
        pokedex.push(neuesPokemon);
        console.log(`Das Pokémon "${name}" wurde zum Pokédex hinzugefügt.`);
        return true;
    
}






