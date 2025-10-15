//1 Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculaIMC(peso, altura){
    let imc = peso/(altura * altura);
    return parseFloat(imc).toFixed(2);
}

let peso = prompt('Digite seu peso em KG (Ex: 85.3): ');
let altura = prompt('Digite sua altura em M (Ex: 1.85): ');

let massaCorporal = calculaIMC(peso,altura);

let indice = massaCorporal <= 18.5 ? 'Magreza' : massaCorporal > 18.5 && massaCorporal <= 24.9 ? 'Normal' : massaCorporal > 24.9 && massaCorporal <= 29.9 ? 'Sobrepeso' : massaCorporal > 29.9 && massaCorporal <= 39.9 ? 'Obesidade I' : 'Obesidade II';

    alert(`Seu IMC é ${massaCorporal}, classificado como ${indice}`);

//2 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculaFatorial(numero){
    
    let cont = 2;
    let resultado = 1;
    while(cont <= numero ){
        
        resultado *= cont;
        cont++;
    }
    return resultado;
    
}
let numero = prompt('Digite um número para realizar o cálculo do fatorial: ');
let fatorial = calculaFatorial(numero);
alert(`O fatorial de ${numero}! = ${fatorial}`);

//3 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDollar(dollar){
    let valorDollar = 4.80;
    let valorReal = dollar * valorDollar;

    return valorReal;
}
let dollar = prompt('Digite a quantidade de Dolares para fazermos a conversão: ');
let realConvertido = parseFloat(converteDollar(dollar)).toFixed(2);
alert(`Convertendo  ${dollar}$ para reais, ficaria R$ ${realConvertido} na cotação de 1 real = 4,80 dollares!`);

//4 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaPerimetro(altura, base) {
    let resultado = 0
    resultado = (2 * altura) + (2 * base);
    return resultado;
}
let alturaRetangulo = prompt ('Digite a altura de um retangulo em cm: ');
let larguraRetangulo = prompt('Digite a largura de um retangulo em cm: ');
let perimetro = calculaPerimetro(alturaRetangulo, larguraRetangulo);
alert(`O perímetro do retângulo de base ${larguraRetangulo} e altura ${alturaRetangulo} é : ${perimetro} cm²!`);


//5 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculaPerimetroCirculo(raio) {
   let resultado = 0
   let pi = 3.14;
    return resultado = 2*pi*raio;
}
let raioCirculo = prompt ('Digite o raio de um circulo em cm: ');
let perimetroCirculo = parseFloat(calculaPerimetroCirculo(raioCirculo)).toFixed(1);
alert(`O perímetro do Círculo de raio ${raioCirculo}cm é : ${perimetroCirculo} cm!`);

//6 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for(i = 1; i<= 10; i++){
        let multiplicacao = numero*i;
        alert(`${numero} X ${i} = ${multiplicacao}`);
    }
}
let numTabuada = prompt('Digite um número para obter a tabuada do 10 dele: ');
tabuada(numTabuada);
