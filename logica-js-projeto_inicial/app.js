//Imprime um alert na tela assim que a pagina eh carregada
alert("Boas vindas ao jogo do Numero Secreto");
//Definindo uma variavel para armazenar o numero maximo do jogo
let numMaximo = 300;
// criando a variavel principal do numSecreto aleatoria
let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
//criando a variavel que vai receber o chute do usuario
let chute;
//variavel que guarda a quanditadade de tentativas
let tentativas = 1;
// Loop para que o usuario possa tentar chutar ate acertar o numero
while(chute != numeroSecreto){
    //Prompt para o usuario chutar um numero
    chute = prompt(`Escolha um numero entre 1 e ${numMaximo}: `);
    //Verifica as condicoes do chute e numero secreto, caso seja igual usa o brake para finalizar o loop, caso contrario da dicas
    if (chute == numeroSecreto){
        break;
    }else if (chute > numeroSecreto){
            alert(`O numero secreto eh menor que ${chute}`);
    }else {
            alert(`O numero secreto eh maior que ${chute}`);
    }
    //Incrementa a quantidade de tentativas (Inclui erros e acertos)
    tentativas++;
}
//Verificaçao na quantidade de tentativas, caso o usuario acerte na primeira a String ficara com "Tentativa", caso contrario ficara com "Tentativas"
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
//Alert final que mostra o numero secreto e a quantidade de tentativas, alem de utilizar a variavel que define se a palavra tentativa se mantem no plural ou singular
alert(`Parabens voce acertou o numero secreto (${numeroSecreto}) com um total de ${tentativas} ${palavraTentativa}!`);

    
// Esta area foi utilizada para resolver problemas opcionais propostos durante o curso basico!
/*Exercicio 1
//1 Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");
//2 Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";
//3 Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;
//4 Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;
//5 Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;
//6 Exiba um alerta com o texto "Erro! Preencha todos os campos"
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
//7 Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
//8 Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
nome = prompt("Qual o seu nome ?");
//9 Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = prompt("Qual a sua idade ?");
//10 Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18){
    alert("Pode tirar a Habilitacao!");
} else {
    alert("Ainda nao pode tirar a Habilitacao!");
}
    

//Exercicio 2
/* 1 Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Que dia da semana eh hoje? (Segunda, Terca, Quarta...");

console.log("Dia digitado: " + diaSemana);

if (diaSemana === "Sabado" || diaSemana === "Domingo"){
    alert("Bom final de semana!");
} else{
    alert("Boa semana!");
}

// 2 Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite um numero positivo ou negativo! ");

if (numero > 0 ){
    alert("O numero digitado eh positivo!");
}else if (numero < 0){
    alert("O numero digitado eh negativo!");
}else {
    alert("O numero digitado eh zero!");
}
    
//3 Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Qual a pontuacao ?");

if (pontuacao >= 100){
    alert("Parabens, voce venceu!");
}else {
    alert("Tente de novo!");
}
//4 Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = pontuacao;

alert(`O saldo da sua conta eh de R$ ${saldoConta}`);

//5 Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUser = prompt("Qual seu nome de usuario?");

alert(`Seja bem vindo ${nomeUser} !`);

// Exercicio 3
//1 Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let cont1 = 1;
alert("Contador 1 iniciado!");

while (cont1 <= 10 ){
    console.log(`Contador 1: ${cont1}`);
    cont1++;
}
//2 Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let cont2 = 10;
alert("Contador 2 iniciado!");

while (cont2 >= 0 ){
    console.log(`Contador 2: ${cont2}`);
    cont2--;
}
//3  Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let cont3 = prompt("Digite um numero natural positivo :");

while (cont3 >= 0){
    console.log(`Contagem Regressiva: ${cont3}`);
    cont3--;
}
//4 Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contador = 0;
let cont4 = prompt("Digite um numero natural e positivo: ");

while (contador <= cont4){
    console.log(`Contagem Progressiva ate o ${cont4} : ${contador}`);
    contador++;
}

//Exercicio 4
//1 Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let mensagem = "Seja bem vindo!";
console.log(mensagem);
//2 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Vitor";
console.log(`Ola ${nome}!`);
//3 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Ola ${nome}!`);
//4 Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let mensagem2 = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(mensagem2);
//5 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 10;
let valor2 = 15;
let resultado = (valor1+valor2);
console.log(`A soma de ${valor1} e ${valor2} resulta em : ${resultado}`);
//6 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
valor1 = 2000;
valor2 = 757;
resultado = (valor1-valor2);
console.log(`A subtracao de ${valor1} e ${valor2} resulta em : ${resultado}`);
//7 Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Qual a sua idade ? ");

if (idade >= 18){
    alert("Voce eh maior de idade");
}else if(idade < 18 && idade > 13){
    alert("Voce eh menor de idade");
}else {
    alert("Voce eh muito novo para usar esse site ou a idade digitada eh invalida!")
}
//8 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um numero natural : ");

if (numero > 0 ){
    alert(`O numero ${numero} eh positivo!`);

} else if(numero < 0){
    alert(`O numero ${numero} eh negativo!`);
}else {
    alert("Voce digitou 0!");
}
//9 Use um loop while para imprimir os números de 1 a 10 no console.
let cont = 1;
while (cont <= 10){
    console.log(cont);
    cont++;
}
//10 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = parseInt(Math.random() * 10);
if (nota >= 7){
    console.log("Aprovado!");
}else {
    console.log("Reprovado!");
}
//11 Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numAleatorio = Math.random();
console.log(numAleatorio);
//12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
numAleatorio = parseInt(Math.random() * 10);
console.log(numAleatorio)
//13 Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
numAleatorio = parseInt(Math.random() * 1000);
console.log(numAleatorio)
*/