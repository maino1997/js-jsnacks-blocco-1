
const displayElement = document.getElementById("display");

const firstWord = prompt("inserisci la prima parola").trim();
const secondWord = prompt("inserisci la seconda parola").trim();


let message = "la parola più lunga è";

if((firstWord.length === 0) || (secondWord.length === 0)){
    message = "inserisci tutte e due le parole";
} else {
    if(firstWord.length > secondWord.length){
    message += `${firstWord}`;
    } else if(firstWord.length < secondWord.length){
        message += `${secondWord}`;
    } else{
        message = "le parole sono lunghe uguali";
    }
}


displayElement.innerHTML = message;
