//dati
const chilometri = prompt("inserisci i chilometri da percorrere");
const anni = prompt("inserisci la tua età")


const numChilometri = parseInt(chilometri);
const numAnni = parseInt(anni);

console.log(numChilometri);
console.log(numAnni);

const prezzoBiglietto = numChilometri * 0.21;


const sconto20 = prezzoBiglietto / 100 * 20;
const sconto65 = prezzoBiglietto / 100 * 40;

let prezzoTotale;
let messaggio;
//esecuzione logica

if ( anni <= 12){
    prezzoTotale= prezzoBiglietto - sconto20;
    prezzoTotale = prezzoTotale.toFixed(2);
    messaggio = `il prezzo del biglietto è ${prezzoTotale}`
    

}else if (anni >= 65){
    prezzoTotale= prezzoBiglietto - sconto65;
    prezzoTotale = prezzoTotale.toFixed(2);
    messaggio = `il prezzo del biglietto è ${prezzoTotale}`

}else {
    prezzoTotale = prezzoBiglietto;
    prezzoTotale = prezzoTotale.toFixed(2);
    messaggio = `il prezzo del biglietto è ${prezzoTotale}`

}

console.log(messaggio);
