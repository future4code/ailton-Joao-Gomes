// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03

function compararNumeros(a, b) {
    return a - b;
}
function retornaArrayOrdenado(array) {
  return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
  for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
        arrayPares.push(array[i])
      }
  } return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayElevado = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 ===0){
            arrayElevado.push(array[i]*array[i])
        }
    }return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let arrayMaiorNum = []
    for (let i = 0; i < array.length; i++){
        if (array[i] > arrayMaiorNum){
            arrayMaiorNum.pop()
            arrayMaiorNum.push(array[i])
        }
    } 
    let arrayMaiorNum2 = arrayMaiorNum[0]
    return arrayMaiorNum2
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNum = 0
    let maiorDivisivelPeloMen = 0
    let diferenc = 0
    let objeto1 = {maiorNumero: 0,}
    let objeto2 = {maiorNumero: 0,} 
    if (num1 > num2){
        maiorNum = num1
        maiorDivisivelPeloMen = num1 % num2 === 0
        diferenc = num1 - num2
        objeto1.maiorNumero = maiorNum
        objeto1.maiorDivisivelPorMenor = maiorDivisivelPeloMen,
        objeto1.diferenca = diferenc 
           return objeto1
        }  else{
        maiorNum = num2
        maiorDivisivelPeloMen = num2 % num1 === 0
        diferenc = num2 - num1
        objeto2.maiorNumero = maiorNum,
        objeto2.maiorDivisivelPorMenor= maiorDivisivelPeloMen,
        objeto2.diferenca = diferenc 
            return objeto2
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = []
    for (let i = 0; i < n; i++){
        arrayPares.push(i*2)
    }
   return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo
if (ladoA === ladoB && ladoC === ladoA && ladoB === ladoC){
    return tipoTriangulo = "Equilátero"
} else if (ladoA != ladoB && ladoC != ladoA && ladoB != ladoC){
    return tipoTriangulo = "Escaleno"
} else{
    return tipoTriangulo = "Isósceles"
}
}

// EXERCÍCIO 10
function compararNumeros(a, b) {
    return a - b;
}
function retornaSegundoMaiorESegundoMenor(array) {
    let tamanhoArray = array.length
    array.sort(compararNumeros)
    let novoArray = []
    novoArray.push(array[tamanhoArray -2], array[1])
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaAnonima = {...pessoa}
    pessoaAnonima.nome = "ANÔNIMO"
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasQuePodem = []
   for (let i = 0; i < pessoas.length; i++){
       if (pessoas[i].idade > 14 && pessoas[i].idade < 60 && pessoas[i].altura >= 1.50){
            pessoasQuePodem.push(pessoas[i])
            }
   }
   return pessoasQuePodem
}       

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasQueNaoPodem = []
    for (const item of pessoas) {
        if (item.idade <= 14 || item.idade >= 60 || item.altura < 1.50){
            pessoasQueNaoPodem.push(item)
        }
  }
  return pessoasQueNaoPodem
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++){

    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}