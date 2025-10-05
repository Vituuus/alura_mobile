
//Imprime um alert na tela assim que a pagina eh carregada
alert("Boas vindas ao jogo do Numero Secreto");
// criando a variavel principal do numSecreto
let numeroSecreto = parseInt(Math.random() * 10 + 1);
//criando a variavel que vai receber o chute do usuario
let chute;
let tentativas = 1;
// Loop para que o usuario possa tentar chutar ate acertar o numero
while(chute != numeroSecreto){
    //Prompt para o usuario chutar um numero
    chute = prompt("Escolha um numero entre 1 e 10: ");
    //Verifica as condicoes do chute e numero secreto, caso seja igual exibe uma mensagem de sucesso, caso contrario da dicas
    if (chute == numeroSecreto){
        break;
    }else if (chute > numeroSecreto){
            alert(`O numero secreto eh menor que ${chute}`);
    }else {
            alert(`O numero secreto eh maior que ${chute}`);
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabens voce acertou o numero secreto (${numeroSecreto}) com um total de ${tentativas} ${palavraTentativa}!`);

    

/*Exerc'icio 1
alert("Boas vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
nome = prompt("Qual o seu nome ?");
idade = prompt("Qual a sua idade ?");

if (idade >= 18){
    alert("Pode tirar a Habilitacao!");
} else {
    alert("Ainda nao pode tirar a Habilitacao!");
}
    */

//Exercicio 2
/* 1
let diaSemana = prompt("Que dia da semana eh hoje? (Segunda, Terca, Quarta...");

console.log("Dia digitado: " + diaSemana);

if (diaSemana === "Sabado" || diaSemana === "Domingo"){
    alert("Bom final de semana!");
} else{
    alert("Boa semana!");
}

// 2
let numero = prompt("Digite um numero positivo ou negativo! ");

if (numero > 0 ){
    alert("O numero digitado eh positivo!");
}else if (numero < 0){
    alert("O numero digitado eh negativo!");
}else {
    alert("O numero digitado eh zero!");
}
    
//3
let pontuacao = prompt("Qual a pontuacao ?");

if (pontuacao >= 100){
    alert("Parabens, voce venceu!");
}else {
    alert("Tente de novo!");
}
//4
let saldoConta = pontuacao;

alert(`O saldo da sua conta eh de R$ ${saldoConta}`);

//5
let nomeUser = prompt("Qual seu nome de usuario?");

alert(`Seja bem vindo ${nomeUser} !`);

// Exercicio 4

let cont1 = 1;
alert("Contador 1 iniciado!");

while (cont1 <= 10 ){
    console.log(`Contador 1: ${cont1}`);
    cont1++;
}

let cont2 = 10;
alert("Contador 2 iniciado!");

while (cont2 >= 0 ){
    console.log(`Contador 2: ${cont2}`);
    cont2--;
}

let cont3 = prompt("Digite um numero natural positivo :");

while (cont3 >= 0){
    console.log(`Contagem Regressiva: ${cont3}`);
    cont3--;
}
let contador = 0;
let cont4 = prompt("Digite um numero natural e positivo: ");

while (contador <= cont4){
    console.log(`Contagem Progressiva ate o ${cont4} : ${contador}`);
    contador++;
}
*/
