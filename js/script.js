const numeriCasualiHTML = document.getElementById('numeriCasuali');
const textInput = document.getElementById('textInput');
const inputNumber = document.getElementById('number');
const btn = document.getElementById('esegui');
const numeriRandom = [];
/* const numeriUtente = []; */
/* const numeriUguali = []; */
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

function randomize(array){
    for (let i = 0; i < 5; i++){
        let numeriRandom = Math.floor(Math.random() * (100 - 1 + 1) + 1 );
        array.push(numeriRandom);
    }
}