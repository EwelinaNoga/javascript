'use strict';

/*typ liczbowy*/
var wyplata = 5000;
var premia = 2500.5;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*typ lancuchowy- string*/

var wyplataStr = "5000";
var premiaStr = "2500.5";
var calkowitaWyplata;

calkowitaWyplata = wyplataStr + premiaStr;

console.log(calkowitaWyplata);

/*typ logiczny- boolean*/

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("Jest Smog")
}
else {
    console.log("Nie ma Smoga")
}

/*Typ specjalne - undefine*/

var niezdefiniowanaZmienna;
var nellowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);

var imieStudenta = "Michał"
