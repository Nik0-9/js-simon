function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntUnique(min, max,){
  let uniqueInt;
  let list = [];
      while(blacklist.length < 5){
          uniqueInt = getRndInteger(min, max);
          if(!blacklist.includes(uniqueInt)){
              blacklist.push(uniqueInt);
          }
      }
  return list;
  
}