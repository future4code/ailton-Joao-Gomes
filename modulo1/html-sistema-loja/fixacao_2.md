function calculaPrecoTotal(quantidade) {
  let totalCompra = 0
  if (quantidade < 12){
    totalCompra = quantidade*1.30
  } else{
    totalCompra = quantidade*1
  }
  return totalCompra
}