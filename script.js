<<<<<<< HEAD
//alert('Hello Mediasoft!');

=======
>>>>>>> 39902a6f43f6c9657d8e26842243d75ab1168d90
function calculator(){
	let a = +prompt('Введите число', '');
	let b = +prompt('Введите число','');
	let c = prompt('Ведите операцию','');
	let operation = 0;
		if (c == '+') {
			operation = a + b;
		}else if (c== '-')
		{
		 	operation = a - b;			
		}
		if (c== '*'){
			operation = a * b;
		}else if (c== '/'){
			operation = a / b;
		}
		alert(operation);		
}
<<<<<<< HEAD
calculator();
=======
calculator();
      
>>>>>>> 39902a6f43f6c9657d8e26842243d75ab1168d90
