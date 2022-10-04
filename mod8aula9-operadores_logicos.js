// && - e
// || - ou
// true false - boleanos

//var a = true;
//var b = false;
//var c;
//c = a && b;
//console.log(c);

// var idade = 30;

// var maior20 = idade > 20;
// var menor30 = idade < 30;

// var between = maior20 && menor30;


// console.log("Idade:", idade);
// console.log('maior que vinte:', maior20);
// console.log('menor que trinta:', menor30);
// console.log('entre 20 e 30:', between);

//============================================================================================
var menor10;
var maior65;
var idade = 3;

menor10 = idade <= 10;
maior65 = idade >= 65;

var gratuidade = menor10 || maior65;


console.log("Idade:", idade);
console.log('maior que 65:', maior65);
console.log('menor que 10:', menor10);
console.log('Tem direito a gratuidade?', gratuidade);
