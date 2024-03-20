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
    
    randomArray = getRandomIntUnique(1, 100, numberOfbox);
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
        let userInput = document.getElementById('user-input').value;
        for(i=0; i<numberOfbox; i++){
            userNum.push(userInput);
            console.log(userInput); 

        }
                  
    })
})

function drawBox(content){
    let drawBox = document.createElement('span');
    drawBox.classList.add('box');
    drawBox.innerHTML = content;
    return drawBox;
}

function displayInput(){
    const userInput = document.getElementById('user-num');
    userInput.className = 'd-block p-3 mt-3';
}

function hiddenBox(display){
    display.classList.add('invisible'); 
}

