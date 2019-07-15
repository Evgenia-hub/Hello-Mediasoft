const films = [
  {
    title: 'The Green Mile',
    creationYear: 1999,
    country: ['USA'],
    budget: '$60 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Paul Edgecomb',
      },
      {
        name: 'David Morse',
        age: 65,
        role: 'Brutus Howell',
      },
      {
        name: 'Michael Clarke Duncan',
        age: 54,
        role: 'John Coffey',
      },
    ],
    director: {
      name: 'Frank Darabont',
      age: 60,
      oscarsCount: 0,
    }
  },
  {
    title: 'Inception',
    creationYear: 2010,
    country: ['USA'],
    budget: '$160 000 000',
    actors: [
      {
        name: 'Leonardo DiCaprio',
        age: 44,
        role: 'Cobb',
      },
      {
        name: 'Joseph Gordon-Levitt',
        age: 38,
        role: 'Arthur',
      },
      {
        name: 'Ellen Page',
        age: 32,
        role: 'Ariadne',
      },
      {
        name: 'Tom Hardy',
        age: 41,
        role: 'Eames',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Forrest Gump',
    creationYear: 1994,
    country: ['USA'],
    budget: '$55 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Forrest Gump',
      },
      {
        name: 'Robin Wright',
        age: 53,
        role: 'Jenny Curran',
      },
      {
        name: 'Sally Field',
        age: 72,
        role: 'Mrs. Gump',
      },
    ],
    director: {
      name: 'Robert Zemeckis',
      age: 68,
      oscarsCount: 1,
    }
  },
  {
    title: 'Interstellar',
    creationYear: 2014,
    budget: '$165 000 000',
    country: ['USA','Great Britain', 'Canada'],
    actors: [
      {
        name: 'Matthew McConaughey',
        age: 49,
        role: 'Cooper',
      },
      {
        name: 'Anne Hathaway',
        age: 36,
        role: 'Brand',
      },
      {
        name: 'Jessica Chastain',
        age: 42,
        role: 'Murph',
      },
      {
        name: 'Michael Caine',
        age: 86,
        role: 'Professor Brand',
      },
      {
        name: 'Matt Damon',
        age: 48,
        role: 'Mann',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Catch Me If You Can',
    creationYear: 2002,
    budget: '$52 000 000',
    country: ['USA', 'Canada'],
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Carl Hanratty',
      },
      {
        name: 'Leonardo DiCaprio',
        age: 36,
        role: 'Frank Abagnale Jr.',
      },
      {
        name: 'Christopher Walken',
        age: 76,
        role: 'Frank Abagnale',
      },
      {
        name: 'Amy Adams',
        age: 44,
        role: 'Brenda Strong',
      },
    ],
    director: {
      name: 'Steven Spielberg',
      age: 72,
      oscarsCount: 4,
    }
  },
];

function middleAge(){
var oscarsCountAge = films.filter(function(item, i, films){ 
	return item.director.oscarsCount === 0; //отсеиваем фильмы без оскара
}); 
var ageActors = [];
for (var i = 0; i < oscarsCountAge.length; i++){
 	var actors = oscarsCountAge[i].actors; // сохраним в переменную массив актеров
 	for (var a = 0; a < actors.length; a++){
 		ageActors.push(actors[a].age); // поместим возраст в массив
 	}
}
var result = ageActors.reduce(function(sum, current){ 
	return sum + current; //находим сумму всех возрастов
}, 0);
return Math.round(result/ ageActors.length); // округляем до ближайшего целого числа
}
middleAge();


function allActors(){
var creation = films.filter(function(item){
	return item.creationYear > 1995; //отсеиваем фильмы после 1995
});	
var nameActors = creation.filter(function(item){
	return item.actors.some(function(item){
		return item.name === 'Tom Hanks'; //оставим фильмы с Томом Хэнксом
	})
});
var nameAll = [];
nameActors.forEach(function(item){
	var actors = item.actors; // сохраним в переменную массив актеров
	for(var i = 0; i < actors.length; i++ ){
		if(actors[i].name !== 'Tom Hanks'){
			nameAll.push(actors[i].name); // поместим имя в массив если это не Том Хэнкс
		}
	}
});
return nameAll;
}
allActors();

function budget(){
var age = films.filter(function(item){
	return item.director.age < 70; //отсеиваем фильмы в которых директор младше 70
})
var nameActors = age.filter(function(item){
	return item.actors.every(function(item){
		return item.name !== 'Tom Hanks'; //оставим фильмы без Тома Хэнкса
	})
});
var filmsBudget = [];
nameActors.forEach(function(item){
 filmsBudget.push(+item.budget.replace(/[\$\s]/g, ''));	//записываем в массив бюджет и убираем 
 //пробел, знак $ и преобразуем их в число
});
var result = filmsBudget.reduce(function(sum, current){
	return sum + current;
}, 0); //находим сумму бюджетов
return result;
}
budget();