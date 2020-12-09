{function playGame(playerInput) {

  clearMessages();
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const argComputerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + argComputerMove);

  const argPlayerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + argPlayerMove);
  console.log('moves:', argComputerMove, argPlayerMove);

  displayResult(argComputerMove, argPlayerMove);

}

function displayResult(argComputerMove, argPlayerMove) {
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
  else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
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

const getMoveName = function(playerInput){
  if (playerInput == 2) {
    return 'papier';
  } else if(playerInput == 3) {
    return 'nozyce';
  } else if (playerInput == 1) {
    return 'kamień';
  }
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}