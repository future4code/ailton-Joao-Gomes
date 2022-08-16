//Exercicio 2:

if (process.argv[2] === `add`) {
  return console.log(Number(process.argv[3]) + Number(process.argv[4]));
}
if (process.argv[2] === `sub`) {
  return console.log(Number(process.argv[3]) - Number(process.argv[4]));
}
if (process.argv[2] === `mult`) {
  return console.log(Number(process.argv[3]) * Number(process.argv[4]));
}
if (process.argv[2] === `div`) {
  return console.log(Number(process.argv[3]) / Number(process.argv[4]));
}
