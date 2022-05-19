//Exercicio interpretaçao de codigo======================================================
//1.----------------------------------
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//10

//2.----------------------------
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a.-----Os numeros maiores que 18
//b.-----Sim, mas deveria tirar o if que seleciona numeros maiores que 18

//3.---------------------------------------------
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//aparece * depois ** depois *** depois ****

//Exercicio de escrita de codigo------------------------------------------------------------------------
//1-----------------------------------
// let quantidadeBichinhos = Number(prompt("Quantos bichinhos você tem?"))
// if (quantidadeBichinhos === 0){
//      console.log("Que pena!")
// } 
// else{
// let bichinhos = 0
// let listaBichinhos = []
// while (bichinhos < quantidadeBichinhos){
//     listaBichinhos.push(prompt("Qual o nome deles?"))
//     bichinhos += 1
// }
// console.log(listaBichinhos)
// }

//2-------------------------------------
//  let arrayOriginal = [20,11,24,5,40,17]
//  let arrayPares = []
 //a.
//  function imprime (arr){
//      for (let num of arrayOriginal){
//          console.log(num)
//      }
//  }
//  imprime(arrayOriginal)
//b.
//  function imprimeDividido (arr){
//      for (let num of arrayOriginal){
//          console.log(num/10)
//      }
//  }
//  imprimeDividido(arrayOriginal) 
//c.
// let arrayOriginal = [20,11,24,5,40,17]
// let arrayPares = []
// function criaEImprime (arr){
//     for (let num of arrayOriginal){
//        if (num % 2 === 0){
//         arrayPares.push(num)
//        }
//     }
// console.log(arrayPares)
// }
// criaEImprime(arrayOriginal)
//d.
// let arrayOriginal = [20,11,24,5,40,17]
// let arrayVazio = []
// function criaNovo (arr){
    
//     for (let i = 0 ; i < arr.length; i++) {
//         arrayVazio.push(arr[i])
//         console.log(`O elemento de index ${i} é: ${arr[i]}`)
//     }   
// }
// criaNovo(arrayOriginal)
//e.
// let arrayOriginal = [20,11,24,5,40,17]
// function imprimeMaiorMenor (arr){
//     let maior = 0
//     let menor = 1000
//     for (let i = 0 ; i < arr.length ; i++ ){
//         elemento = arr[i]
//          if (elemento > maior){
//             maior = elemento
//         }
//         elemento2 = arr[i]
//         if (elemento2 < menor ){
//             menor = elemento2
//         }
//     }
//     console.log(maior)
//     console.log(menor)
// }
// imprimeMaiorMenor(arrayOriginal)

//Desafios-----------------------------------------------------------------
//1.-
// let tentativas = 0
// let primeiroNumero = Number(prompt("Digite um número:"))
// function jogo (num){
//     confirm("Vamos jogar!")
//     let chuteJogador = primeiroNumero + 1
//     while (primeiroNumero !== chuteJogador){
//         chuteJogador = Number(prompt("Diga um número:"))
//             if (chuteJogador > num){
//                 console.log(`O número chutado foi ${chuteJogador}.`)
//                 console.log(`Errou. O número escolhido é maior!`)
//         }
//             else if (chuteJogador < num){
//                 console.log(`O número chutado foi ${chuteJogador}.`)
//                 console.log(`Errou. O número escolhido é menor!`)
//         }
//             else {
//                 console.log(`Acertou!`)
//             }
//             tentativas += 1
//         }   
//         console.log(`O número de tentativas foi ${tentativas}!`)
// }
// jogo(primeiroNumero)

//2.-
// let tentativas = 0
// let primeiroNumero = Math.floor((Math.random() * 100) + 1)
// function jogo (num){
//     confirm("Vamos jogar!")
//     let chuteJogador = primeiroNumero + 1
//     while (primeiroNumero !== chuteJogador){
//         chuteJogador = Number(prompt("Diga um número:"))
//             if (chuteJogador > num){
//                 console.log(`O número chutado foi ${chuteJogador}.`)
//                 console.log(`Errou. O número escolhido é maior!`)
//         }
//             else if (chuteJogador < num){
//                 console.log(`O número chutado foi ${chuteJogador}.`)
//                 console.log(`Errou. O número escolhido é menor!`)
//         }
//             else {
//                 console.log(`Acertou!`)
//             }
//             tentativas += 1
//         }   
//         console.log(`O número de tentativas foi ${tentativas}!`)
// }
// jogo(primeiroNumero)

//Não sei como ficaria mais facil.