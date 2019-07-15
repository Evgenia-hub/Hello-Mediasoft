//alert('Hello Mediasoft!');

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
calculator();