let listaDeNumerosSorteados = [];
let limiteTentativas = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male');
}
function exibirMensagemInicial(){
    exibeTextoNaTela('h1', 'O Jogo do Número Secreto!');
    exibeTextoNaTela('p', `Digite um número de 1 a ${limiteTentativas}`);
}
exibirMensagemInicial();


if (quantidadeDeNumerosNaLista == limiteTentativas){
    listaDeNumerosSorteados = [];
}
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * limiteTentativas + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function habilitaNovoJogo(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}
function desabilitaNovoJogo(){
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibeTextoNaTela('h1','Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Parabens você acertou o número secreto com ${tentativas} ${palavraTentativa}!`
        exibeTextoNaTela('p',mensagemTentativas);
        habilitaNovoJogo();
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
    desabilitaNovoJogo();
}