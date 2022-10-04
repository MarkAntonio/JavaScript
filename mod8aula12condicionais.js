var nota1;
var nota2;
nota1 = 0;
nota2 = 10;
var media;
media = (nota1 + nota2) / 2;

var estado = '';

if (media >= 7){
    console.log('Você passou com média: ' + media)
}
else{
    console.log('Sua nota', media,'não foi o suficiente para passar.')
}

if (media >= 8){
    estado = 'excelente'
    console.log('Nota foi excelente')
}
else if (media > 6.5){
    estado = 'boa'
    console.log('Sua nota foi boa')
}

else if (media >= 5){
    estado = 'mais ou menos'
    console.log('Não foi boa, mas ta quase lá!')
}
else{
    estado = 'ruim'
    console.log('O negócio tá ruim meu fi. Estude não pra tu ver.')
}

estado = 'cagado'
switch(estado){
    case 'excelente':
        console.log('Toma 100 conto')
        break;
    case 'boa':
        console.log('Toma um babalu')
        break;
    case 'mais ou menos':       
        console.log('Toma 1 real')
        break;
    case 'ruim':
        console.log('Tome uma pisa')
        break;
    default:
        console.log('Tá bugado')
}   