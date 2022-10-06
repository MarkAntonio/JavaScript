var alunos;
alunos = ["Naedson", "Marco", "Pedro", "Nícolas"];
var notas1 = [9.5, 8.6, 7.0, 7.8];
var notas2 = [9.0, 2.0, 6.5, 8.0];

function average(n1, n2) {
    return (n1 + n2) / 2;
}

// function success(average){
//     var situation = "disapproved";
//     if (average >= 7.0)
//         situation = "approved";
//     return situation
// }


// function success(average){
//     if (average >= 7.0)
//         return "Approved";
//     else
//         return "Disapproved;"
// }

var success = function (average){
    //operador ternário
            //condição  ? (se der) true : (se der) false
    return average >= 7.0 ? "Approved" : "Disapproved";
}

// function success(average) {
//     //operador ternário
//     return average >= 7.0 ? "approved" : "disapproved";
// }

for (index in alunos) {
    var media = average(notas1[index], notas2[index]);

    console.log("Aluno: " + alunos[index]);
    console.log("1a VA: " + notas1[index] + 
    " - 2a VA: " + notas2[index] +
    ' - Média: ' + media +
    " - Situação: " + success(media));
}
