//1 Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Olá mundo!');
}
olaMundo();
//2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function saudacaoNome(nome){
    let userName = nome;
    console.log(`Olá,${userName}!`);
}
saudacaoNome('Vitor');
//3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobraNumero(a){
    let num = a;
    return num * 2;
}
let numero = dobraNumero(10);
console.log(numero);

//4 Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculaMedia(a, b, c){
    let num = a;
    let num1 = b;
    let num2 = c;
    return parseFloat((num+num1+num2)/3).toFixed(2);
    
}
let media = calculaMedia(2,10,5);
console.log(media);
//5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(a, b){
    let num = a;
    let num1 = b;

    if (num > num1){
        return num;
        
    }else {
        return num1;
    }
}

let maior = retornaMaior(1200,120);
console.log(maior);

//6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(a){
    let num = a;
    return num * num;
}
numero = multiplicaNumero(10);
console.log(numero);