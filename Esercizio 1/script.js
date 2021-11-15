// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

let somma = 0;

// CON FOR
// for (i = 0; i < 5; i++) {
//     somma = somma + parseInt(prompt("Inserisci un numero"));
// }

// console.log("La somma è: " + somma);

// CON WHILE

let i = 0;

while (i < 5) {
    somma = somma + parseInt(prompt("Inserisci un numero"));
    i++;
}

console.log("La somma è: " + somma);