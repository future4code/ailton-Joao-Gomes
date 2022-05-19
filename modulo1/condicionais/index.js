//Exercicios interpretaçao de codico---------------------------

//1--------------------
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//a. -----Oque o codigo faz: Recebe uma número via prompt, em seguida altera o valor string para number,
//depois um if ira ver se o número em questão é divisivel por 2 utilizando %,
//caso seja divisivel a sobre da operação será 0, logo o console.log ira falar "Passou no teste",
//se houver sobra, não sera divisivel e caira no else, mostrando um console.log "Não passou no teste".
//b. -----Para numeros divisiveis por 2
//c. -----Para numeros não divisiveis por 2

//2---------------------
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a.-----O código serve para receber um nome de fruta e gerar um console.log com a fruta escolhida pelo usuario,
//e também o preço.
//b.-----"O preço da fruta Maça é R$ 2.25"
//c.-----Aparecera 5 reais inves de 5.5 pois o valor de pêra vira o atribuido a default.

//3----------------------------------------------
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a.-----Criando uma variavel onde recebe via prompt um numero e depois altera de string para number.
//b.-----Esse numero passou no teste; Nada.
//c.-----SIm tera erro pois let mensagem não é definido fora do if.

//Exercicios de escrita de código-------------------------------------------------------
//1------------------------------------------------
// let recebeIdade = Number(prompt("Qual a sua idade?"))
// if (recebeIdade >= 18){
//     console.log("Você pode dirigir")
// } else{
//     console.log("Você não pode dirigir")
// }

//2---------------------------------------------------
// let recebeTurno = prompt("Qual o seu turno? Digite M para matutino, V para vespertino e N para noturno.")
// if (recebeTurno === "M"){
//     console.log("Bom dia")
// } else if (recebeTurno === "V"){
//     console.log("Boa tarde")
// } else if (recebeTurno === "N"){
//     console.log("Boa noite")
// } else{
//     console.log("Turno não identificado")
// }

//3--------------------------------------
// let recebeTurno = prompt("Qual o seu turno? Digite M para matutino, V para vespertino e N para noturno.")
// switch (recebeTurno){
//         case "M": 
//         console.log("Bom dia")
//         case "V": 
//         console.log("Boa tarde")
//         case "N": 
//         console.log("Boa noite")
//         default: 
//         console.log("Turno não identificado")
// }

//4------------------------------------------------
// let generoFilme = prompt("Qual o gênero de filme que você quer assistir?") === "Fantasia"
// let precoIngresso = Number(prompt("Qual o valor do ingresso?")) <= 15
// if (generoFilme && precoIngresso){
//     console.log("Bom filme")
// }else {
//         console.log("Escolha outro filme kkkk") }

//Desafios-----------------------------------------------------
//1----------------------------------------
// let generoFilme = prompt("Qual o gênero de filme que você quer assistir?") === "Fantasia"
// let precoIngresso = Number(prompt("Qual o valor do ingresso?")) <= 15
// if (generoFilme && precoIngresso){
//     console.log("Bom filme")
// }else {
//         console.log("Escolha outro filme kkkk") }