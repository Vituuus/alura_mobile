let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibeTextoNaTela('h1', 'O Jogo do Número Secreto!');
    exibeTextoNaTela('p', 'Digite um número de 1 a 10');
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibeTextoNaTela('h1','Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Parabens você acertou o número secreto com ${tentativas} ${palavraTentativa}!`
        exibeTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if(chute < numeroSecreto){
            exibeTextoNaTela('p', 'O número secreto é maior!')
        } else {
            exibeTextoNaTela('p','O número secreto é menor!');
        }
        tentativas++;
        limparCampo();
    }
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1
}