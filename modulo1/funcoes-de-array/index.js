//Exercicio de interpretaçao de codigo -------------------------------------------------------------------------------
//1.------------------------------------
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
//Ira ser impresso no console os itens do array, a posição destes itens no array e o array na quantidade de vezes que rodar, no caso 3x

//2.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
//Ira ser impresso apenas os nomes de cada item da array, devido a o item.nome. Amanda ..Lais .. Leticia etc.

//3.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
//Ira ser impresso os itens que não possuem o apelido igual a chijo, logo, serão impressos os itens de index 0 e 1.

//Exercicios escrita de codigo---------------------------------------------------------------------------------------
//1.---------------------------
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //a. 
//  const arrayNomes = pets.map((item,index,array) => {
//      return item.nome
//  })
//  console.log(arrayNomes)
 //b.
// const arraySalsichas = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha"
// })
// console.log (arraySalsichas)
//c.
// const arrayMensagem = pets.filter((item, index, array) => {
//     if (item.raca === "Poodle"){
//         console.log(`Você ganhou desconto para tosar o/a ${item.nome}`)
//     }
// })

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a.
//  const apenasNome = produtos.map((item, index, array) => {
//      return item.nome
//  })
//  console.log(apenasNome)
//b. 
// const arrayDoido = produtos.map((item, index, array) => {
//         const objeto = {
//             Nome: item.nome,
//             Preço: item.preco * 0.95
//         }
//         return objeto
// })
// console.log(arrayDoido)
//c.
// const arrayApenasBebidas = produtos.filter((item, index, array) => {
//     return item.categoria === "Bebidas"
// })
// console.log(arrayApenasBebidas)
//d. 
// const arrayDoYpe = produtos.filter((item, index, array) => {
//     return item.nome.includes("Ypê")
// })
// console.log(arrayDoYpe)
//e.
const novissimoArray = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")

}).map((item, index, array) =>{
        return(`Compre ${item.nome} por ${item.preco}`)
})
console.log(novissimoArray)

