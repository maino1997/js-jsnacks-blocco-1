// Prendo l'elemento dal documento
const displayElement = document.getElementById("display");

// Inizializzo la variabile somma a 0
let sum = 0;
let isRight = true;

// Chiedo per 10 volte all'utente di inserire un numero 
for (let i=0 ; i<10 ; i++){
    const currentNumber = parseInt(prompt("inserisci un numero"));
    if(isNaN(currentNumber)){
        isRight = false;
    } else{
        sum += currentNumber;
        // NON METTERE QUA COME TRUE IL FLAG PERCHè COSì L'UTENTE PASSA SEMPRE,
        // DISTASTRO
    }
}

// Stampo il risultato in pagina 
if (isRight === true){
displayElement.innerHTML = sum;
} else {
    displayElement.innerHTML = "uno dei valori non è corretto";
}