function comprarCarta() {
   // Cria array de cartas
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
   // Cria array de naipes
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
   // Sorteia uma carta
   const numero = cartas[Math.floor(Math.random() * 13)]
 
   // Sorteia um naipe
   const naipe = naipes[Math.floor(Math.random() * 4)]
 
   let valor
 
   // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   if (numero === "A") {
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
     valor = Number(numero)
   }
 
   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {
     texto: numero + naipe,
     valor: valor
   }
 
   return carta
 }

 //==========================================================================================================================

   
   
   if (confirm(`Boas vindas ao Blackjack! Você quer iniciar uma nova rodada?`)){
   const carta1 = comprarCarta()
    const carta2 = comprarCarta()
    const carta3 = comprarCarta()
    const carta4 = comprarCarta()
    let valorMaoUsuario = carta1.valor + carta2.valor
    let valorMaoComputador = carta3.valor + carta4.valor
    let todaMaoUsuario = []
    let todaMaoComputador = []
    
    
    
    function cartasDoUsuario (negocio1,negocio2){
       let somaUsuario = negocio1.valor + negocio2.valor
       if (somaUsuario > 21){ 

       } else{
      console.log (`Sua primeira carta é ${negocio1.texto} e sua segunda ${negocio2.texto}, sua pontuação foi ${somaUsuario}`)
        } }
cartasDoUsuario(carta1,carta2)
    
   function cartasDoComputador (negocio3,negocio4){
       let somaComputador = negocio3.valor + negocio4.valor
      console.log (`A primeira carta do computador é ${negocio3.texto} e a segunda ${negocio4.texto}, pontuação ${somaComputador}`)   
    }
cartasDoComputador(carta3,carta4)

    function quemGanhou (valorUsuario,valorComputador){
       if (valorUsuario > valorComputador){
          console.log(`Você ganhou!`)
       } else if (valorComputador > valorUsuario){
          console.log(`Computador ganhou!`)
       } else  {
          console.log("Empate!")
       }
    }
quemGanhou(valorMaoUsuario,valorMaoComputador)

   }else {
      console.log(`Obrigado por jogar.`)
   }

