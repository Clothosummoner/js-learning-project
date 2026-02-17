'use strict';

class Pokemon {
    constructor(name, typ) {
        this.name = name;
        this.typ = typ;
    }
}

const glurak = new Pokemon("Glurak", "Feuer");

const button = document.getElementById("zeigeBtn");
const ausgabe = document.getElementById("ausgabe");

button.addEventListener("click", function () {
    ausgabe.innerHTML = glurak.name + " | Typ: " + glurak.typ;
});
