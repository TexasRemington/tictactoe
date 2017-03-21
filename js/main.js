board = [];
player_1 = 1
player_2 = 2

function newGame(){
  board = [[0,0,0],
           [0,0,0],
           [0,0,0]];
  counter = null;
  current_player = 0;
  var div = document.getElementById('game_container');
    while (div.firstChild){
      div.removeChild(div.firstChild);
    }
  for (y = 0; y < 3; y++){
    for (x = 0; x < 3; x++){
      box = document.createElement("div");
      box.setAttribute("id", x+','+y);
      box.setAttribute("style", 'background:grey');
      z = 'this';
      box.setAttribute("onclick", 'move('+z+','+x+','+y+')');
      document.getElementById('game_container').appendChild(box);
    }
  }
}

function move(box,x,y){
  if (current_player == 0 && board[x][y] == 0){
    box.innerHTML = 'X';
    current_player = 1;
    board[x][y] = player_1;
  }
  if (current_player == 1 && board[x][y] == 0){
    box.innerHTML = 'O';
    current_player = 0;
    board[x][y] = player_2;
  }
  checkVictory();
}

function checkVictory(x,y){
  checkHorizontal(x,y);
  checkVertical(x,y);
  checkDiagonal(x,y);
}

function checkHorizontal(x,y){
      current_val = null;
      previous_val = 0;
      counter = 0;


      for (var y = 0; y < 3; y++){
        for (var x = 0; x < 3; x++){
          current_val = board[y][x];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 2){
            win();
          }
          previous_val = current_val;
        }
      counter = 0;
      previous_val = 0;
      }
    }

    function checkVertical(x,y){
      current_val = null;
      previous_val = 0;
      counter = 0;

      for (var x = 0; x < 3; x++){
        for (var y = 0; y < 3; y++){
          current_val = board[y][x];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 2){
            win();
          }
          previous_val = current_val;
        }
      counter = 0;
      previous_val = 0;
      }
    }

    function checkDiagonal(){
      current_val = null;
      previous_val = 0;
      counter = 0;
      x_temp = 0;
      y_temp = 0;

      //down-right top
      for (var x = 0; x < 3; x++){
        x_temp = x;
        y_temp = 0;

        while (x_temp < 3 && y_temp < 3){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 2){
            win();
          }
          previous_val = current_val;
          x_temp++;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }

      //down-left top
      for (var x = 0; x < 3; x++){
        x_temp = x;
        y_temp = 0;

        while (0 <= x_temp  && y_temp < 3){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 2){
            win();
          }
          previous_val = current_val;
          x_temp--;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }

      //down-right from left
      for (var y = 0; y < 3; y++){
        x_temp = 0;
        y_temp = y;

        while (x_temp < 3 && y_temp < 3){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 2){
            win();
          }
          previous_val = current_val;
          x_temp++;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }

      //down-left from right
      for (var y = 0; y < 3; y++){
        x_temp = 3;
        y_temp = y;

        while (0 <= x_temp  && y_temp < 3){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 2){
            win();
          }
          previous_val = current_val;
          x_temp--;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }
    }

function computer(){
  if (current_player == 1){
  }
}

function evaluateMove(){
}


function win(){
alert("winner!");
playAgain();
}

function playAgain(){
  var restart = window.confirm("Play again??");
    if (restart){
      newGame();
    }
    else{
      window.close();
    }
  }
