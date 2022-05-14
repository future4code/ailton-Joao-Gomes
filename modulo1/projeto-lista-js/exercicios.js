// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Insira uma altura")
  const largura = prompt("Insira uma largura")
  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual!"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento!"))
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  // let pesoUsuario = Number(prompt("Fale seu peso em kg:"))
  // let alturaUsuario = Number(prompt("Digite sua altura em metros:"))
  // return pesoUsuario/(alturaUsuario*alturaUsuario)
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeDoUsuario = prompt("Qual o seu nome?")
  let idadeDoUsuario = prompt("Qual a sua idade?")
  let emailDoUsuario = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresFavoritas = [prompt("Digite sua primeira cor favorita:"),prompt("Digite a segunda"),prompt("Digite a terceira")]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanho1 = string1.length
  let tamanho2 = string2.length
  return tamanho1 === tamanho2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  // let copoA = array[0]
  // let copoB = array[-1]
  // copoC = copoB
  // copoB = copoA
  // copoC = copoB

  // return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  // let formata1 = string1.toUpperCase
  // let formata2 = string2.toUpperCase
  return string1.toUpperCase === string2.toUpperCase

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}