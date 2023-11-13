//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function alpiGrant(a,b){
let ageOne=a;
let ageTwo=b;

// if(ageOne>ageTwo) {console.log(ageOne + " è piu grande")
// } else if(ageOne===ageTwo) {console.log("I numeri sono uguali");
// } else {console.log(ageTwo + " è il piu grande");}

if(ageOne !== ageTwo) {
let piuGrande= (ageOne>ageTwo) ? ageOne:ageTwo;
console.log(piuGrande + " è il piu grande");
} else {console.log("I numeri sono uguali");}
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num=0;
if(num<5) {console.log("Tiny");
}else if (num<10) {console.log("Small");
}else if (num<15) {console.log("Medium");
}else if(num<20) {console.log("Large");
}else {console.log("Huge");}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for(let i=0;i<=10;i++) {
  if(i===3 || i===8){
    continue;
  }
  console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for(i=0;i<=15;i++){
  if(i%2==0) {console.log(i + " è pari");
  }else{console.log(i + " è dispari");}
}

let a=0;
while(a<=15){
  if(a%2==1) {console.log("Il numero "+a+" è dispari");}
  else {console.log("Il numero "+a+" è pari");}
  a++;
}

let b=0;
do {
  let isPari= (b%2==0);
  let pariDispari=isPari?"pari":"dispari";
  console.log("Il numero "+b+" è "+pariDispari);
  b++;
}while(b<=15);

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function biliardoBall(a,b){
  let numberOne=a;
  let numberTwo=b;
  if(numberOne===8 || numberTwo===8) {console.log("Il valore di un numero è uguale a 8");
  }else if((numberOne+numberTwo)===8){console.log("La loro somma è uguale a 8");
  }else if ((numberOne-numberTwo)==8 || (numberTwo-numberOne)==8  ) {console.log("La loro differenza è uguale a 8");
  }else{console.log("Nessuna delle richieste è verificata")}
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function freeDelivery (a) {

  let totalShoppingCart=a;
  console.log("Il totale del carrello è euro "+totalShoppingCart);
  let promo=totalShoppingCart>50;
  if(promo){console.log("Promo spedizione gratuita");
  }else{totalShoppingCart+=10;
        console.log("Costo spedizione euro 10");}
  console.log("Tot checkout euro "+totalShoppingCart);
}
/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

function blackFriday(a,b){

  let totalShoppingCart=a;
  console.log("Il totale del carrello è euro "+totalShoppingCart);
  let isBlack=b;
  if(isBlack){console.log("è il black friday sconto del 20%");
              totalShoppingCart=totalShoppingCart*0.8;}
  let promo=totalShoppingCart>50;
  if(promo){console.log("piu quota spedizione gratuita");
  }else{totalShoppingCart+=10;
        console.log("Costo spedizione euro 10");}
  console.log("Tot checkout euro "+totalShoppingCart);
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

function genere(a) {
  let isMale=(a==="M");
  let gender=isMale?"male":"female";
  console.log("The ID n.72300 is "+gender);
}

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for(let i=1;i<=100; i++) {
  if((i%5==0) && (i%3==0)){console.log("FizzBuzz");
            continue;
  }else if(i%5==0){console.log("Buzz");
      continue;
  }else if(i%3==0){console.log("Fizz");
      continue;
  }else{console.log(i);}
}