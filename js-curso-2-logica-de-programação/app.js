let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibeTextoNaTela('h1', 'O Jogo do Número Secreto!');
exibeTextoNaTela('p', 'Digite um número de 1 a 10');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        alert('Você acertou!');
    }else{
        alert('Você errou!');
    }
    
}