let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(randomNumber){
  if(randomNumber == 2){
    return 'papier';
  } else if(randomNumber == 3){
    return 'nozyce';
  } else(randomNumber == 1)
    return 'kamien'
  }

console.log(getMoveName);
/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nozyce';
}*/

printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

function getMoveName(playerInput){
  if(playerInput == 2){
    return 'papier';
   }else if(playerInput == 3){
    return 'nozyce';
  } else(playerInput == 1)
    return 'kamień'
  }

console.log(getMoveName);
/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nozyce';
}*/

printMessage('Twój ruch to: ' + argPlayerMove);



function displayResult(argComputerMove, argPlayerMove){

  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ja wygrywam!');
  }
  else if(argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  }
  else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Mamy remis!');
  }
  else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Mamy remis!');
  }
  else if(argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
    printMessage('Ja wygrywam!');
  }
  else if(argComputerMove == 'papier' && argPlayerMove == 'kamien'){
    printMessage('Ty wygrywasz!');
  }
  else if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
    printMessage('Mamy remis!');
  }
  else if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  else if(argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
    printMessage('Ja wygrywam!');
  }
  else {
    printMessage('nieznany ruch');
  }
}
console.log('moves:', argComputerMove, argPlayerMove);
