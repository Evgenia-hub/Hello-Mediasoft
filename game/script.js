const game = document.querySelector('.game');
const ticTacToe = function(){
	 function gameField(){
	 	for (let i = 0; i < 9; i++){
	 		var cell = document.createElement('div');
	 		cell.classList.add('cell');
	 		game.appendChild(cell);
	 	}
	 }
	 gameField();
}
ticTacToe();
