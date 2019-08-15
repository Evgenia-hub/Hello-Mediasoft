const container = document.querySelector('.game');
const banner = document.querySelector('.banner');
const restart = document.querySelector('.restart');
const winner = document.querySelector('.winner');

class TicTacToe {
	constructor(){ 
		this.gameField();
		this.step();
		this.combination();
	}

	gameField(){
		for (let i = 0; i < 9; i++){
    	let cell = document.createElement('div');
    	cell.classList.add('cell');
    	cell.setAttribute('data-index', i);
    	container.appendChild(cell); 
		}
	}

	step(){
		let state = true;
  	const allCell = [].slice.call(container.querySelectorAll('.cell'));

  	allCell.forEach((item) => {
  		item.addEventListener('click',() => {
  			if(state && !item.classList.contains('checked')){
       		item.classList.add('cross');
	       	item.classList.add('checked');
	       	state = false;
     		} else if(!item.classList.contains('checked')) {
       		item.classList.add('ring');
       		item.classList.add('checked');
       		state = true;
  			}
  			this.combination();
  		});
  	});
	}

	index(){
		const IndCross = [].slice.call(container.querySelectorAll('.checked.cross'));
 		const IndRing = [].slice.call(container.querySelectorAll('.checked.ring'));
 		
 		let Ind1 = IndCross.map((item) => {
    	return +item.getAttribute('data-index');
  	});
  	let Ind2 = IndRing.map((item) => {
    	return +item.getAttribute('data-index');
  	});
  	return [Ind1, Ind2]; 
	}

	gameOver(value){
		winner.innerHTML = value;
  	banner.classList.remove("hidden");
	}
  
  restart(){
  	const allCell = [].slice.call(container.querySelectorAll('.cell'));
		allCell.forEach((item) => {
		  item.classList.remove("cross");
		  item.classList.remove("ring");
		  item.classList.remove("checked");
	    banner.classList.add("hidden");
  	});
  }

  drawCheck(){
  	const allCell = [].slice.call(container.querySelectorAll('.cell')); 

  	return allCell.every((item) => {
   	return item.classList.contains("checked"); 
    });
  } 
  
  combination(){
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
  	finishCombination.forEach((item) => {
	    if(this.compare(item, this.index()[0]) === 3){
	     this.gameOver('Выиграли Крестики');
	    } else if(this.compare(item, this.index()[1]) === 3){
	     this.gameOver('Выиграли Нолики');
	    } else if(this.drawCheck()) {
	     this.gameOver('Ничья');
	    } 
  	});
  }

  compare(arr, arr2){
  	let a = 0;
  	arr.forEach((item, i) => {
    	for(let j = 0; j < arr2.length; j++){
      	if(item == arr2[j]){
        	a++;
      	}
    	}
  	});
  	return a;
  }
}
const game = new TicTacToe();
restart.addEventListener('click',() => {
  game.restart();
});