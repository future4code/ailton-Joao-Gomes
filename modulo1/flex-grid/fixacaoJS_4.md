function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let vezesNumero = 0
  let numeroNaoEncontrado = "Número não encontrado"
  for (let i = 0; i < arrayDeNumeros.length; i++ ){
    if (arrayDeNumeros[i] === numeroEscolhido){
      vezesNumero += 1 
    } 
  }
  if (vezesNumero > 0){
  return (`O número ${numeroEscolhido} aparece ${vezesNumero}x`)
  } else {
    return (`Número não encontrado`)
  }
}