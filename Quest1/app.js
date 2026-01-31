'use strict';
const glurak = {
    name: "Glurak",
    typ: "Feuer",
    istShiny: true,
    attacken: ["Flammenwurf", "Sonnentag", "Hitzewelle", "Feuersturm"],

}
console.log(glurak);
console.log(glurak.istShiny);
console.log(glurak.attacken[1]);

console.log(`Das Pokemon heißt ${glurak.name} und ist vom Typ ${glurak.typ} und hat die Attacken ${glurak.attacken.join(", ")}`)
// Alternative Möglichkeit die Informationen eines Pokemons anzuzeigen mit Template Literals
// join() wird genutzt, um das Attacken - Array als String darzustellen.
// Template Strings (Backticks `) erlauben das Einfügen von Variablen.

function zeigePokemon(pokemon) {
    console.log(`Das Pokemon heißt ${pokemon.name} und ist vom Typ ${pokemon.typ} und hat die Attacken ${pokemon.attacken.join(", ")}`);
}
zeigePokemon(glurak);  
// Funktion um die Informationen eines Pokemons anzuzeigen 

const darkrai = {
    name: "Darkrai",
    typ: "Unlicht",
    istShiny: false,
    attacken: ["Finsteraura", "Spukball", "Traumfresser", "Dunkelnebel"],
};
let pokedex = [glurak, darkrai];

for (let i = 0; i < pokedex.length; i++) {
    zeigePokemon(pokedex[i]);
}

// Alternative Möglichkeit mit einer for Schleife 
// for...of Schleife als Alternative zur for Schleife
for (let pokemon of pokedex) {
    zeigePokemon(pokemon);
}
// forEach Methode als weitere Alternative zur for Schleife
pokedex.forEach(pokemon => zeigePokemon(pokemon));

// Arrow Function als weitere Alternative zur for Schleife
const zeigeAllePokemons = (pokedex) => {
    for (let pokemon of pokedex) {
        zeigePokemon(pokemon);
    }
    
};  
zeigeAllePokemons(pokedex);

for (const pokemon of pokedex) {
    if (pokemon.istShiny) {
        console.log(`${pokemon.name} ist ein Shiny Pokémon! ✨`);
    } else {
        console.log(`${pokemon.name} ist kein Shiny Pokémon.`);
    }
}

// Alternative Möglichkeit wäre mit einem ternären Operator 
for (const pokemon of pokedex) {
    const status = pokemon.istShiny ? "ein Shiny Pokémon ✨" : "kein Shiny Pokémon";
    console.log(`${pokemon.name} ist ${status}.`);
}

// besser ist es jedoch die Funktion zu nutzen 
function zeigeShinyStatus(pokemon) {
    const status = pokemon.istShiny ? "ein Shiny Pokémon ✨" : "kein Shiny Pokémon";
    console.log(`${pokemon.name} ist ${status}.`);
}
zeigeShinyStatus(pokedex);