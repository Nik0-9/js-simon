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
    let numberOfbox = 5
    let randomArray = [];
    
    randomArray = getRandomIntUnique(1, 99, numberOfbox);
      console.log(randomArray);
    const dispalyEl = document.getElementById('display');
    dispalyEl.innerHTML ='';
    setTimeout(function(){
        dispalyEl.classList.add('invisible'); 
    }, 5000);
    setTimeout(displayInput, 5000);

    for(i=0; i<numberOfbox; i++){
        dispalyEl.appendChild(drawBox(randomArray[i]));
    }
    btnSend.addEventListener('click', function(){
        let userNum = [];
        let userInput1 = document.getElementById('user-input1').value;
        let userInput2 = document.getElementById('user-input2').value;
        let userInput3 = document.getElementById('user-input3').value;
        let userInput4 = document.getElementById('user-input4').value;
        let userInput5 = document.getElementById('user-input5').value;
        let result = document.getElementById('result');
        userNum.push(parseInt(userInput1),parseInt(userInput2),parseInt(userInput3),parseInt(userInput4),parseInt(userInput5));
        console.log(userNum);
        //console.log(randomArray);
        let correctNum = 0;
        for(i=0;i<randomArray.length;i++){
            if(randomArray.includes(userNum[i])){
                correctNum ++;
            }
        }
        result.innerHTML = `I numeri inseriti sono: ${userNum}. `;
        result.innerHTML += `I numeri da indovinare erano ${randomArray}. `
        result.innerHTML += `Hai indovitato ${correctNum} numeri`
        console.log(correctNum);
    });
})

function drawBox(content){
    let drawBox = document.createElement('span');
    drawBox.classList.add('box');
    drawBox.innerHTML = content;
    return drawBox;
}

function displayInput(){
    const userInput = document.getElementById('user-num');
    userInput.className = 'p-3 mt-3 ';
}

function hiddenBox(display){
    display.classList.add('invisible'); 
}

