var alunos = new Array('Pedrão', 'Wenil', 'Marco', 'Naedson', 'silas', 'nicolas', 'tiago', 'wagner');
console.log(alunos[0]);

var notas = [5.0, 6.0, 6.5, 7.0];
console.log(notas);
console.log(notas.length);

console.log('')
console.log('first mode.');
for (i in alunos){
    console.log(alunos[i]);
} 
console.log('')
console.log('second mode')
for (var i = 0; i < alunos.length; i ++){
    console.log(alunos[i]);
}
console.log('')
console.log('third mode.')
for (aluno of alunos){
    console.log(aluno);
} 