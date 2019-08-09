const container = document.querySelector('.game');
const banner = document.querySelector('.banner');
const restart = document.querySelector('.restart');
const winner = document.querySelector('.winner');
function TicTacToe(){}
  
TicTacToe.prototype.gameField = function(){
 for (let i = 0; i < 9; i++){
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-index', i);
    container.appendChild(cell); 
  }
}
TicTacToe.prototype.step = function(){
  let obj = this;
  let state = true;
  const allCell = [].slice.call(container.querySelectorAll('.cell'));

  allCell.forEach(function(item, i, allCell){
    item.addEventListener('click', function(){
     if (state && !item.classList.contains('checked')){
       item.classList.add('cross');
       item.classList.add('checked');
       state = false;
     } else if(!item.classList.contains('checked')) {
       item.classList.add('ring');
       item.classList.add('checked');
       state = true;
     }
      obj.combination();
    });
  });
}
TicTacToe.prototype.index = function(){
  const IndCross = [].slice.call(container.querySelectorAll('.checked.cross'));
  const IndRing = [].slice.call(container.querySelectorAll('.checked.ring'));
  let Ind1 = IndCross.map(function(item){
    return +item.getAttribute('data-index');
  });
  let Ind2 = IndRing.map(function(item){
    return +item.getAttribute('data-index');
  });
  return [Ind1, Ind2]; 
}
TicTacToe.prototype.gameOver = function(value){
 winner.innerHTML = value;
  banner.classList.remove("hidden");
}
TicTacToe.prototype.restart = function(){
  const allCell = [].slice.call(container.querySelectorAll('.cell'));
  allCell.forEach(function(item){
  item.classList.remove("cross");
  item.classList.remove("ring");
  item.classList.remove("checked");
    banner.classList.add("hidden");
  });
}
TicTacToe.prototype.drawCheck = function(){
  const allCell = [].slice.call(container.querySelectorAll('.cell')); 
  return allCell.every(function(item){
   return item.classList.contains("checked"); 
  });
  console.log(allCell);
}
TicTacToe.prototype.combination = function(){
  let obj = this;
  let finishCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  finishCombination.forEach(function(item){
    if(obj.compare(item, obj.index()[0]) === 3){
     obj.gameOver('Выиграли Крестики');
    } else if(obj.compare(item, obj.index()[1]) === 3){
     obj.gameOver('Выиграли Нолики');
    } else if(obj.drawCheck()) {
     obj.gameOver('Ничья');
    } 
  });
  console.log(obj.drawCheck());
}

TicTacToe.prototype.compare = function(arr, arr2){
  let a = 0;
  arr.forEach(function(item, i){
    for(let j = 0; j < arr2.length; j++){
      if(item == arr2[j]){
        a++;
      }
    }
  });
  return a;
}
const game = new TicTacToe();
game.gameField(); 
game.step();
game.combination();
restart.addEventListener('click',function(){
  game.restart();
});
