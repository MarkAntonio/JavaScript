
function calculo(nota1, nota2) {
    //var nota1 = 10;
    //var nota2 = 8;
    media = (nota1 + nota2) / 2;
    // console.log(media);
    return media
}

var n1 = 10;
var n2 = 5;
var resultado = calculo(n1, n2);
var sec_resul = calculo(9, 8);
console.log(resultado);
console.log(sec_resul);

function greeting() {
    return "Hello dude!"
}

var sentence = greeting();

var g = greeting;
console.log(sentence);
console.log(g());

//função anônima

var soma = function (n1, n2) {
    return n1 + n2
}

var power = function (n1, n2) {
    return n1 ** n2
}
console.log(soma(10, 24));
console.log("Potência:", power(2, 4))
// nas novas versões dá pra ficar até assim:

var subtrai = (n1, n2) => {
    return n1 - n2
}

console.log(subtrai(10, 24));

var multiply = (n1, n2) => {
    return n1 * n2
}

var division = (n1, n2) => {
    return n1 / n2
}

