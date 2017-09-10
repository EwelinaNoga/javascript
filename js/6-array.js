'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';
imiona.push('Gerard');

console.log(imiona);

imiona.pop();
console.log(imiona);


console.log(imiona.unshift('Robert'));

console.log(imiona);

console.log(imiona.shift());

console.log(imiona);

console.log(imiona.length);

console.log(imiona);

/*for (var i=0; i <4; i++)
    console.log( imiona [i] );

for (var i=imiona.length; i >=0; i++)
    console.log( imiona [i] );*/

console.log(imiona.join(" - "));


