//Exercicio 1 a:
//Utilizando process.argv

//Exercicio 1 b:

const red = '\u001b[31m';

if (process.argv[2]  && isNaN(Number(process.argv[3])) === false) {
  return console.log(
    red +`Olá, ${process.argv[2]}! Você tem ${
      process.argv[3]
    } anos. Em sete anos você terá ${Number(process.argv[3]) + 7}.`
  );
}
if (process.argv[2]  && isNaN(Number(process.argv[3])) === true) {
  return console.log(
    red+ "Você deve inserir uma idade em números no segundo parâmetro."
  );
} 
else {
  console.log( red + "Esperava 2 parâmetros.");
}

