'use strict';

for ( var i=100 ; i>50 ; i--) {
    console.log(i);
}

for ( var i=1 ; i<5; ) {
    console.log(++i);
}

console.log('------');
for ( var i=1 ; i<5; ) {
    console.log(i++);
}

var tablica = ["Krystian", "Monika", "Danuta"];

tablica.forEach( function( element, index) {
                console.log( "Element z Indexem: " + index + " ma wartość" + element );
                });

/*var it = 0;

while ( it < 10 ) {
    console.log(it)
    it++;
}*/

var iter = 20 ;
do {
    console.log(iter);
    iter++;
} while (iter < 10)
    
    var a = 0;
while ( a < 10) {
    console.log(++a);
    
    if ( a == 5 ) {
        break;
    }
    
for ( var b = 0; b < 10; ++b) {
    if ( b == 5 ) {
        continue;
    }
    else {
        console.log(b);
    }
    console.log("---");
}
}
