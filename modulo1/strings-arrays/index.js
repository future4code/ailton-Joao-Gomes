//EXERCICIOS DE INTERPRETAÇAO DE CODIGO
//QUESTAO 1 =================================================================
// let array
// console.log('a. ', array)
//undefined

// array = null
// console.log('b. ', array)
//null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
//11

// let i = 0
// console.log('d. ', array[i])
//array não definida

// array[i+1] = 19
// console.log('e. ', array)
// array não definida, sem sentido

// const valor = array[i+6]
// console.log('f. ', valor)
//array não definida

//QUESTAO 2 ===================================================================
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Será impresso: SUBI NUM ONIBUS EM MIRROCOS 27

//EXERCICIOS DE ESCRITA DE CODIGO =================================================
//1-----------------------------------------------------------------
// let emailDoUsuario = prompt("Qual o seu email?")
// let nomeDoUsuario = prompt("Qual é o seu nome?")

// console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2------------------------------------------------------------------
// let comidasPreferidas = ["Pizza", "Pão de batata", "Brigadeiro", "Cuscuz", "Acarajé"]
// console.log(comidasPreferidas)
// console.log(`Essas são as minha comida preferidas: 
// -${comidasPreferidas[0]}
// -${comidasPreferidas[1]}
// -${comidasPreferidas[2]}
// -${comidasPreferidas[3]}
// -${comidasPreferidas[4]}`)
// const comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")
// let novaComidaPreferida = ["Pizza", comidaFavoritaUsuario,"Brigadeiro", "Cuscuz", "Acarajé"]
// console.log(novaComidaPreferida)

// //3---------------------------------------------------------------------------
// let listaDeTarefas = [prompt("Digite três tarefas que você faz no dia-dia, Primeira:"),prompt("Segunda:"),prompt("Terceira:")]
// console.log(listaDeTarefas[0], listaDeTarefas[1], listaDeTarefas[2])
// let escolhaUm = prompt("Escolha entre 0, 1 e 2:")
// let retirarUm = listaDeTarefas.splice(escolhaUm,1)
// console.log(listaDeTarefas)
