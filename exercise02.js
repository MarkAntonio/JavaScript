function clicou(){
    let nome = window.prompt("Qual é seu nome? ")
    let res = window.document.getElementById('resultado')
    res.innerHTML = '<p>Olá, <b>${nome}</b>! É um grande prazer te conhecer!'
}