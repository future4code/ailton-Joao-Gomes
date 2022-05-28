function calculaNota(ex, p1, p2) {
  let conceitoFinal = 0
  let notaFinal = ((ex * 1) + (p1 * 2) + (p2 * 3)) / 6
  if (notaFinal >= 9){
    conceitoFinal = "A"
  } if (notaFinal < 9 && notaFinal >= 7.5){
    conceitoFinal = "B"
  } if (notaFinal < 7.5 && notaFinal > 6){
    conceitoFinal = "C"
  } if (notaFinal < 6) {
    conceitoFinal = "D"
  }
  return conceitoFinal
}