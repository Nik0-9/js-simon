 /*
 Descrizione:
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */
let btnStart = document.getElementById('start');
let btnSend = document.getElementById('send');


btnStart.addEventListener('click', function(){
    btnStart.disabled = true;
    let numberOfbox = 5;
    let randomArray = [];
    randomArray = getRandomIntUnique(1, 99, numberOfbox);
    console.log(randomArray);
    const dispalyEl = document.getElementById('display');
    dispalyEl.innerHTML ='';
    dispalyEl.classList.remove('invisible');
    reset();
    setTimeout(function(){
        displayInput();
        btnStart.disabled = false;
        dispalyEl.classList.add('invisible'); 
    }, 5000);
    
    for(let i=0; i<numberOfbox; i++){
        dispalyEl.appendChild(drawBox(randomArray[i]));
    }
    btnSend.addEventListener('click',()=>{
        let userNum = [];
        /*let userInput1 = document.getElementById('user-input1').value;
        let userInput2 = document.getElementById('user-input2').value;
        let userInput3 = document.getElementById('user-input3').value;
        let userInput4 = document.getElementById('user-input4').value;
        let userInput5 = document.getElementById('user-input5').value;
        let result = document.getElementById('result');
        userNum.push(parseInt(userInput1),parseInt(userInput2),parseInt(userInput3),parseInt(userInput4),parseInt(userInput5));*/
        let userInputs = document.querySelectorAll('.user-input');
        userInputs.value = '';
        for(let i=0; i<userInputs.length; i++){
            if(!isNaN(userInputs[i].value)){
                userNum.push(parseInt(userInputs[i].value));
            }
        }
        console.log(userInputs);
        console.log(userNum);
        //console.log(randomArray);
        let correctNum = 0;
        let guessedNum = [];
            for(let i=0;i<randomArray.length;i++){
            if(randomArray.includes(userNum[i])){
                correctNum ++;
                guessedNum.push(userNum[i]);
            }
        }
        result.innerHTML = `I numeri inseriti sono: ${userNum}. `;
        result.innerHTML += `I numeri da indovinare erano ${randomArray}. `
        result.innerHTML += `Hai indovitato ${correctNum} numeri: ${guessedNum}`
        console.log(correctNum);
        console.log(guessedNum);

    },{once: true})
})

function drawBox(content){
    let drawBox = document.createElement('span');
    drawBox.classList.add('box');
    drawBox.innerHTML = content;
    return drawBox;
}

function displayInput(){
    const userInput = document.getElementById('user-num');
    userInput.classList.remove('d-none');
}
function reset(){
    const userInput = document.getElementById('user-num');
    userInput.classList.add('d-none');
    const inputs = document.getElementsByTagName('input');
    for(i=0; i<inputs.length; i++){
        inputs[i].value = '';
    }
    result.innerHTML = '';
}