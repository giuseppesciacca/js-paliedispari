/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// Palidroma
console.log('*****Palindrome*****');
//Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(word) {
    if (word == word.split('').reverse().join('')) {
        // con split metto la parola lettera per lettera dentro un array, con reverse rivolto l'array e con join riunisco le lettere dell'array formando la parola al contrario; Sostanzialmente rigiro la parola;
        return true
    } else {
        return false
    }
};

//Chiedere all’utente di inserire una parola 
const word = prompt('Inserisci una parola e vediamo se è palindroma!').toLocaleLowerCase();

if (word == '') {
    console.log('Beh! forse uno spazio vuoto è palindromo, ma prova ad inserire una parola!');
    alert('Beh! forse uno spazio vuoto è palindromo, ma prova ad inserire una parola!')
} else if (word.length == 1) {
    console.log('Eddaje magari 2 lettere inseriamole, su!');
    alert('Eddaje magari 2 lettere inseriamole, su!')
} else if (isPalindrome(word)) {
    console.log('WOW! si è palindroma!');
    alert('WOW! si è palindroma!')
} else {
    console.log('Eh no, non è palindroma');
    alert('Eh no, non è palindroma')
};

//Pari e Dispari
console.log('*****Pari e Dispari*****');
//L’utente sceglie pari o dispari e // inserisce un numero da 1 a 5
const userChoice = prompt('pari o dispari?').toLocaleLowerCase();
const userNumber = Number(prompt('Tira un numero da 1 a 5:'));

console.log(`Hai scelto ${userChoice}`);
console.log(`Hai tirato ${userNumber}`);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomNum(min, max) {
    return Math.floor(Math.random() * max) + min;
};

const botNumber = randomNum(1, 5);

console.log('Il pc ha tirato ' + botNumber);
alert(`Il pc ha tirato ${botNumber}`);

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

const result = userNumber + botNumber;
console.log('La somma dei numeri è ' + result);

function isEven(sum) {
    if (sum % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    };
};

//Dichiariamo chi ha vinto.

if (userChoice == isEven(result)) {
    console.log(`Hai detto ${userChoice} ed hai vinto! ${result} è ${userChoice}`);
    alert(`Hai detto ${userChoice} ed hai vinto! ${result} è ${userChoice}`)
} else if (userChoice != isEven(result)) {
    console.log(`Hai detto ${userChoice} ma hai perso. ${result} NON è ${userChoice}`);
    alert(`Hai detto ${userChoice} ma hai perso. ${result} NON è ${userChoice}`);
} else {
    console.log('Sarebbe il caso che scegliessi "pari" o "dispari" per poter giocare');
    alert('Sarebbe il caso che scegliessi "pari" o "dispari" per poter giocare');
}