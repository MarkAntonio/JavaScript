// x = y   x = y
// x += y  x = x + y
// x -= y  x = x - y
// x /= y  x = x / y
// x *= y  x = x * y
// x %= y  x = x % y

var a = 10;
var b = 3.5;

a %= b;
console.log(a); 


// operadores comparativos

// == igual a 
// === valor igual e igual
// != não é igual
// !== não é igual ou não igual
// > maior que 
// < menor que
// >= maior que ou igual a
// <= menor que ou igual a

var a = 3;
var b = 4;

console.log(2 == 2);
console.log(a == b);
var c = '3';
console.log(a == c);
console.log(a === c);

console.log(a != b);

console.log(a != c);
console.log(a !== c);

// Se eu comparar um número (2) e uma string ('2'), ele diz que é verdade.
// console.log(2 == '2'); - true

// Mas se eu comprar usando o triplo =, ele verifica também o tipo e retorna false.
// console.log(2 === '2'); - false
 