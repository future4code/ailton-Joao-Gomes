//------ EXERCICIO 1 -------
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2
         
let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
                                    // Ira aparecer, em ordem, FALSE , FALSE , TRUE e BOOLEAN
*/

//--------- EXERCICIO 2 ----------
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero
                                       // Sera impresso no console 55, por causa que as variaveis primeiroNumero e segundNumero estão em string
console.log(soma)
*/

//----------- EXERCICIO 3 ---------------
/*
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//EXERCICIOS DE ESCRITA DE CODIGO ---------------------
//1
/*
let idadeDoUsuario = Number(prompt("Digite sua idade!"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
let idadeMaior = idadeDoUsuario > idadeMelhorAmigo
let diferençaDeIdade = idadeDoUsuario - idadeMelhorAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
console.log ("A diferença de idade de vocês é", diferençaDeIdade, "anos")
*/

//2
/*
let numeroPar = Number(prompt("Porfavor insira um número par"))
let restoDivisaoPor2 = numeroPar % 2

console.log(restoDivisaoPor2)  
//Sim existe um apadrão, sempre da 0 devido a divisão não possuir sobras.
//Caso insira um número ímpar, apresentara sobras e a resposta não será 0.
*/

//3
/*
let idade = Number(prompt("Qual a sua idade em anos?"))
let idadeEmMeses = idade * 12 
let idadeEmDias = idade * 365
let idadeEmHoras = idade * 8760

console.log ("Você tem", idadeEmMeses, "meses vividos,", "em dias", idadeEmDias, "e em horas", idadeEmHoras)
*/

//4 
/*
let numero1 = Number(prompt("Digite o seu primeiro número"))
let numero2 = Number(prompt("Digite seu segundo número"))
let numeroMaior = numero1 > numero2
let numeroIgual = numero1 === numero2
let numero1Divisivel = (numero1 % numero2) === 0
let numero2Divisivel = (numero2 % numero1) === 0


console.log ("O primeiro número é maior que o segundo?", numeroMaior)
console.log ("O primeiro número é igual ao segundo?", numeroIgual)
console.log ("O primeiro número é divisível pelo segundo?", numero1Divisivel)
console.log ("O segundo número é divisível pelo primeiro ?", numero2Divisivel)
*/

