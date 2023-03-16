/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//Pari e Dispari
//L’utente sceglie pari o dispari e // inserisce un numero da 1 a 5
const userChoice = prompt('pari o dispari?');
const userNumber = Number(prompt('Inserisci un numero da 1 a 5:'));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomNum(min, max) {
    return Math.floor(Math.random() * max) + min;
};

const botNumber = randomNum(1, 5);

console.log('bot number ' + botNumber);

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

const result = userNumber + botNumber;
console.log('result ' + result);

function isEven(sum) {
    if (sum % 2 == 0) {
        return true;
    } else {
        return false;
    };
};
console.log(isEven(result));

//Dichiariamo chi ha vinto.

if ((userChoice.toLocaleLowerCase() == 'pari') && (isEven(result) == true) || (userChoice.toLocaleLowerCase() == 'dispari' && isEven(result) == false)) {
    console.log(`Hai detto ${userChoice.toLocaleLowerCase()} ed hai vinto! ${result} è ${userChoice.toLocaleLowerCase()}`);
} else if ((userChoice.toLocaleLowerCase() == 'dispari') && (isEven(result) == true) || (userChoice.toLocaleLowerCase() == 'pari' && isEven(result) == false)) {
    console.log(`Hai detto ${userChoice.toLocaleLowerCase()} ma hai perso. ${result} è ${userChoice.toLocaleLowerCase()}`);
} else {
    console.log('Sarebbe il caso che scegliessi "pari" o "dispari" per poter giocare');
};