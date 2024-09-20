
/*Variaveis 
console.log('Hello, World');
let nome = "Joao";
const idade = 20;
console.log(nome);
console.log(idade);

let cidade = "Sao Paulo";
let temperatura = 25;
let estaChovendo = false;
console.log(cidade)
console.log(temperatura)
console.log(estaChovendo)

//Operadores 
let a = 10
let b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

//Operadores de comparçao 
console.log(10 == "10")
console.log(10 === "10")
console.log(10 != "10")
console.log(10 !== "10")

//funçoes 
function dizerOla(){
    console.log("Ola, Mundo!");
}

dizerOla()

function somar(a, b) {
    return a + b;
}
console.log(somar(5, 3));
console.log(somar(10, 20));
 
//Funçao sem retorno 
function dizerOla(nome) {
    console.log("Ola, " + nome)
}
dizerOla("Ana");
dizerOla("Pedro") 

function divd(a, b){
    return a / b
}

console.log(divd(6, 7))
console.log(divd(600, 9))

function saudacao(nome){
    console.log("Ola," + nome);
}
saudacao("Fernando");*

//Condicionais(if/else)
let idade = 18;
if (idade >= 18){
    console.log("Voce e maior de idade.");
} else {
    console.log("Voce nao e maior de idade.");
}*/

let hora = 10;
if(hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
}else {
    console.log("Boa noite!");
}

let idade = 63
if(idade <= 12) {
    console.log("Criança")
}else if( idade >= 13 && idade <= 17) {
    console.log("Adolecente")
}else if(idade >= 18 && idade <=63){
    console.log("Adulto")
}else if(idade >= 64) {
    console.log("Idoso")
}