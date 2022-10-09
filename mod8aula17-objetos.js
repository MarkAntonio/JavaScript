//O objeto em JavaScript é semelhante a um dicionário do python;
//É tanto que é possível printar como se fosse um dicionário. (console.log(aluno["nota1"]))

var aluno = {
    nome: "Marco",
    notas: [9.6, 7],

    average: function (n1, n2){
        return (n1 + n2) / 2
    }
}
console.log(aluno.nome);
console.log(aluno["notas"][1]);
aluno.matricula = 13690;
console.log(aluno);
aluno.sobrenome = "Oliveira Truká";
console.log("A média desse senvergoin", aluno.average(aluno.notas[0], aluno.notas[1]));

var dev = new Object()
console.log(dev)
dev.name = "Programador BR"
dev.xp = "10 years"
dev.knowledge = "HTML | CSS | JS"
console.log(dev)

function media (n1, n2){
    return (n1 + n2 / 2)
}

var aluno1 = {
    nome: "Renan Tenório",
    notas: [9.6, 7],

    average: media
    
}
var aluno2 = {
    nome: "Zézin",
    notas: [9.6, 7],

    average: media
    
}

function media2 (n1, n2){
    return ((this.notas[0] + this.notas[1]) / 2)
}

var aluno3 = {
    nome: "Solimões",
    notas: [9.6, 7],

    average: media2
    
}
console.log("A média desse senvergoin", aluno1.nome, ": ", aluno1.average(aluno.notas[0], aluno.notas[1]));
console.log("A média desse senvergoin", aluno2.nome, ": ", aluno2.average(aluno.notas[0], aluno.notas[1]));
console.log("A média desse ungido", aluno3.nome, ": ", aluno3.average());