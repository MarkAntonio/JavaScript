var numero= 5;

for (var vez = 0; vez < numero; vez ++){
    console.log('Executando o for ', + vez + 1 + ' vez(es).')

}
console.log('Acabou.')

var flag = true;
while (flag){
    console.log('é Verdade!')
    numero --
    if (numero == 0){
        flag = false
    }
}

var aleatorio = Math.random();  //Gera um número entre 0 e 1;
aleatorio *= 100


while (aleatorio < 90){
     console.log(aleatorio);
     aleatorio = Math.random()*100
}
console.log(aleatorio);

