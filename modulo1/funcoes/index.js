//EXERCICIOS AULA FUNÇOES =========================
//Exercicios de interpretação de codigo -----

//1---------------------------------------

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// Vai ser impresso 10 e 50
// No console não ira aparecer nada

//2-----------------------------------------------

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//Esta função ira pegar um texto escrito pelo usuario através da let textoDoUsuario = prompt e ira retornar o texto com letras minusculas e falando se a palavra cenoura esta dentro da string.
// i. True ; ii. True ; iii. True  ; por causa do toLowerCase vindo primeiro.

//Exercicios de escrita de código-----------------------

// 1----------------------------------------
//a.
// let mensagem1 = "Eu sou João, tenho 24 anos, moro em Porto Alegre e sou estudante."

// function imprimiMensagem (mensagem){
//     console.log(mensagem)
// }

// imprimiMensagem(mensagem1)

// function imprimiMensagem (){
//     `Eu sou João, tenho 21 anos, moro em Porto Alegre e sou estudante.`
// }

// console.log(imprimiMensagem)

//b.
// let nomeUsuario = prompt("Qual é o seu nome?")
// let idadeUsuario = prompt("Qual a sua idade?")
// let endereçoUsuario = prompt("Qual é a sua Cidade?")
// let profissaoUsuario = prompt("Qual sua profissão")

// function recebe4Parametros (nome,idade,endereço,profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereço} e sou ${profissao}`)
// }
// recebe4Parametros(nomeUsuario,idadeUsuario,endereçoUsuario,profissaoUsuario)

//2------------------------------------------------------------

//a.----------------------------
//function soma2Numeros (num1,num2){
   // console.log(num1 + num2)
   ////return num1 + num2
//}

//soma2Numeros(2,4)
////console.log(soma2Numeros(2,4))

//b.------------------------------------
// function recebe2Numeros (num1,num2){
//     let numeroIgual = num1 === num2
//     return numeroIgual
// }

// console.log(recebe2Numeros(6,6))

//c.-------------------------------
// function numeroParOuNao (num1){
//     let numeroParzinhoOuNao = num1 % 2 === 0
//     return numeroParzinhoOuNao
// }
// console.log(numeroParOuNao(10))

//d.---------------------------------
// function fazTudo (mensagem){
//     console.log(mensagem.toLowerCase())
//     console.log(mensagem.length)
// }
// let mensagemDoUsuario = prompt("Digite algo")
// fazTudo(mensagemDoUsuario)

//3-------------------------------------------------------
// function essaSoma (num1,num2){
//     let soma = num1 + num2
//     return soma
// }
// function essaSubtrai (num1,num2){
//     let subtracao = num1 - num2
//     return subtracao
// }
// function essaMultiplica (num1,num2){
//     let multiplica = num1 * num2
//     return multiplica
// }
// function essaDivide (num1,num2){
//     let divide = num1 / num2
//     return divide
// }
// let insira1Numero = Number(prompt("Escolha o primeiro número"))
// let insira2Numero = Number(prompt("Insira o segundo número"))

// console.log(`Números inseridos: ${insira1Numero} e ${insira2Numero}
// Soma: ${essaSoma(insira1Numero,insira2Numero)}
// Diferença: ${essaSubtrai(insira1Numero,insira2Numero)}
// Multiplicação: ${essaMultiplica(insira1Numero,insira2Numero)}
// Divisão: ${essaDivide(insira1Numero,insira2Numero)}`
// )


