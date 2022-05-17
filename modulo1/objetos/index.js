//EXERCICIO DE INTERPRETAÇAO DE CODIGO 
//1------------------------------------------------------
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//O prmeiro console ira mostrar Matheus Nachtergaele
//O Segundo mostrara Virginia Cavendish
//O terceiro Canal:Globo e Horario:14h

//2------------------------------------------------------

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//No primeiro ira apracer todo o Objeto cachorro
//No segundo ira aparecer a mesma coisa porem com o nome trocado para Juba
//No terceiro ira aparecer a mesma coisa que o segundo mas com o nome Jubo

//... copia as informações do objeto anterior 

//3-----------------------------------------------------------------
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//Na primeira aparecera False, aconteceu pois chama o backender, que é falso dentro do objeto
//Na segunda não aparecera nada pois altura não é definida dentro do objeto 

//EXERCICIOS DE ESCRITA DE CODIGO
//1---------------------------------------
//a.--------------------
// const objeto1 = {
//     nome: "João",
//     apelidos: ["Juba", "Zang", "Zeca"]
// }
// function imprimeObjeto1 (obj) {
//     console.log(`Eu sou ${obj.nome}, mas pode me chama de : ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}.`)
// }

// imprimeObjeto1(objeto1)
// //b.-------------------------------------
//  const novoObjeto1 = {
//      ...objeto1,
//      apelidos: ["Juju","Bahiano","Gaucho"]
//  }
// imprimeObjeto1(novoObjeto1)
 
//2-------------------------------------
// const objetoDiferente1 = {
//     nome: "João",
//     idade: 21,
//     profissao: "Programador"
// }

// const objetoDiferente2 = {
//     nome: "Pedro",
//     idade: 22,
//     profissao: "Químico"
// }

// function retornaCoisas (obj){
    
//     obj = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
//     return obj
// }
// console.log(retornaCoisas(objetoDiferente1))

//3----------------------------------------------------
// let carrinho = []

// const fruta1 = {
//     nome: "Tomate",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "Maça",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "Pêra",
//     disponibilidade: true
// }

// function colocaNoCarrinho (fruta){
//     carrinho.push(fruta)
// }

// colocaNoCarrinho(fruta1)
// colocaNoCarrinho(fruta2)
// colocaNoCarrinho(fruta3)

// console.log(carrinho)
