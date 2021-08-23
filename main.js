//dettagli passeggero quali : eta nome cognome  e km che vuole fare
var nomePasseggero = prompt('inserisci nome e cognome');
document.getElementById('nome').innerHTML= nomePasseggero;

var eta = Number(prompt('inserisci la tua eta\''));
document.getElementById('eta').innerHTML= eta

var km = Number(prompt('quanti chilometri vuoi fare??'))
document.getElementById('km').innerHTML= 'i tuoi km : ' + " " + km
//fine dettagli passegero

const prezzoAlKm = 0.21;
// utilizzo una costante poichè il prezzo al km non muta e rimane uguale  ed è 0.21 al km

var prezzoScontato 
//questa variabile la utilizzeremo quando dovremmo applicare gli sconti per i minorenni e per i senior

var prezzoIntero = prezzoAlKm * km ;
//prezzoIntero sarà il prezzo del biglietto senza nessuno  sconto applicato
/*

utilizzeremo il condizionale (if - if else) per determinare le scontistiche da applicare in base all'eta
del passeggero 
*/
if(eta < 18){

    prezzoScontato = prezzoAlKm / 100 * 80 *km
    prezzoScontato = prezzoScontato.toFixed(2)
    document.getElementById('totale').innerHTML = prezzoScontato + " €"
    document.getElementById('sconto').innerHTML = 'sconto Junior pari al 20%'
    
}

else if (eta >17 && eta <= 65){
    prezzoScontato = prezzoIntero
    prezzoScontato = prezzoScontato.toFixed(2)
    document.getElementById('totale').innerHTML = prezzoScontato + " €"
    document.getElementById('sconto').innerHTML = ' nessuno sconto applicabile'
    
}

else if (eta > 65){
    prezzoScontato = prezzoAlKm / 100 * 60 *km
    prezzoScontato = prezzoScontato.toFixed(2)
    document.getElementById('totale').innerHTML = prezzoScontato + " €"
    document.getElementById('sconto').innerHTML = 'sconto Senior pari al 40%'
    
}

//fine esercizio calcolo biglietto treno semplice 
