const numeriCasualiHTML = document.getElementById('numeriCasuali');
const textInput = document.getElementById('textInput');
let inputNumber = document.getElementById('number');
const btn = document.getElementById('esegui');
const numeriRandom = [];
const numeriUtente = [];
const numeriUguali = [];
let numeriAggiunti = 0;
let cond = true;



randomize(numeriRandom);
console.log('numeri generati: ', numeriRandom);
numeriCasualiHTML.innerHTML = "Tieni a mente questi numeri, dovrai ricordarteli: " + numeriRandom;

let count = 0
const timer = setInterval(function(){
    count++
    console.log(count)
    // Setto a 5 anzichè 30, tvb Gabriel & Simone
    if (count == 5){
        numeriCasualiHTML.classList.add('d-none')
        textInput.classList.remove('d-none');
        inputNumber.classList.remove('d-none');
        btn.classList.remove('d-none');
        clearInterval(timer)
    }
}, 1000)


btn.addEventListener('click', aggiungiNumeriUtente);

function aggiungiNumeriUtente(){ 

                    inserisciNumeri(numeriUtente)
                    numeriAggiunti++
                    if(numeriAggiunti == 5){
                    confrontaNumeri(numeriUguali)
                    console.log('numeri indovinati', numeriUguali)
                    numeriCasualiHTML.classList.remove('d-none')
                    numeriCasualiHTML.innerHTML = `Hai indovinato ${numeriUguali.length} numeri, ovvero: ${numeriUguali}`
    }
}
    function inserisciNumeri(array){
        let inputNumber = document.getElementById('number').value;
        array.push(parseInt(inputNumber));
        console.log(array);
    }

    function confrontaNumeri(array){
        for (let i = 0; i < numeriRandom.length; i++){
             if(numeriRandom.includes(numeriUtente[i])){ 
/*             if(numeriRandom.some(v=> numeriUtente[i].indexOf(v) !== -1)){
 */            array.push(numeriUtente[i])
            console.log(array)
            }
    }
}


function randomize(array){
    for (let i = 0; i < 5; i++){
        let numeriRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1 );
        array.push(numeriRandom);
    }
}