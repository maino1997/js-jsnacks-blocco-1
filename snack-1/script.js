

// Prendo l'elemento
const displayElement = document.getElementById("display");


// Chiedo i numeri all'utente 
const firstNumber = parseInt(prompt("inserisci un numero"));
const secondNumber = parseInt(prompt("inserisci un altro numero"));


// Dichiaro la variabile come pari di default 
let message = `i numeri sono pari`;


// Comparo e vedo chi è il più grande 
if (firstNumber > secondNumber){
    message = `il numero maggiore è ${firstNumber}`;  

} else if (secondNumber > firstNumber){
    message = `il numero maggiore è ${secondNumber}`;    
} 

// Stampo il risultato in pagina 
displayElement.innerHTML = message;



