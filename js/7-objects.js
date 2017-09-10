'use strict';

/*var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function() {consolelog(this.imie)}
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {consolelog(this.imie)}  
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);
console.log(kaja);
console.log(kaja.wzrost);*/


class Osoba  {
    constructor(imie, nazwisko, wzrost) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        
    }
    
    wyswietlInfo() {
        console.log( "Imię:" + this.imie + ", " + "Nazwisko:" + this.nazwisko);
    }
}

var krystian = new Osoba('Krystain', 'Dziopa');
var kaja = new Osoba('Kaja', 'Brzeczyszczykiewicz');

console.log(krystian);
console.log(kaja);

kaja.wyswietlInfo();
