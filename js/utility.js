function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntUnique(min, max, arrayLength){
  let uniqueInt;
  let list = [];
      while(list.length < arrayLength){
          uniqueInt = getRndInteger(min, max);
          if(!list.includes(uniqueInt)){
              list.push(uniqueInt);
          }
      }
  return list;
  
}