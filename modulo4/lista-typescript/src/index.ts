//Exercicio 1: 

// const function1 = (data:string, name:string):string => {

//     const splitted:string[] = data.split("/")  
//     const frase:string = `Olá me chamo ${name}, nasci no dia ${splitted[0]} do mês ${splitted[1]} do ano de ${splitted[2]}`
//     return frase
// }
// console.log(function1("12/12/2022","João"))

//Exercicio 2:

// const function2 = (data:any):any =>{
//     return typeof data

// }
// console.log(function2(22))

//Exercicio 3: 

// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }
// type filme = {
//         nome:string,
//         ano:number,
//         genero:GENERO,
//         nota?:number
//     }

// const function3 = (nome:string,ano:number, genero:GENERO,nota?:number) => {
//     if (nota === undefined){
//         let Filme:filme = {
//         nome: nome,
//         ano: ano,
//         genero: genero
//     }
//     return Filme
//     }else {
//         let Filme:filme = {
//         nome: nome,
//         ano: ano,
//         genero: genero,
//         nota:nota
//     }
//     return Filme
// }    
// }

// console.log(function3("Pi", 2019, GENERO.ACAO, 79))

//Exercicio 4:

// enum SETORES {
//     MARKETING = "marketing",
//     VENDAS = "vendas",
//     FINANCEIRO = "financeiro",
// }

// type pessoas = {
//     nome:string,
//     salario:number,
//     setor:SETORES,
//     presencial:boolean
// }

// const funcionarios:pessoas[] =
// 	[{ nome: "Marcos", salario: 2500, setor: SETORES.MARKETING, presencial: true },
// 	{ nome: "Maria" ,salario: 1500, setor: SETORES.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salario: 2200, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "João" ,salario: 2800, setor: SETORES.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salario: 5500, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salario: 4700, setor: SETORES.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salario: 3500, setor: SETORES.MARKETING, presencial: true }
//     ]

// const function4 = (pingoliro:pessoas[]):pessoas[] => {
//     const newArray = pingoliro.filter((data) => {
//         return data.presencial === true && data.setor === SETORES.MARKETING
//     })

//     return newArray
// }
// console.table(function4(funcionarios))

//Exercicio 5:

// type users = {
//     name:string,
//     email:string,
//     role:string
// }

// const usuarios:users[] = [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
//     ] 

// const function5 = (pingoliro:users[]):string[] => {

//     const newArray = pingoliro.filter((data) => {
//         return data.role === "admin"
//     })

//     const mapNewArray = newArray.map((data,index) => {
//         return data.email
//     })

//     return mapNewArray
// }

// console.log(function5(usuarios))

//Exercicio 6:

// type clientes = {
//     cliente:string,
//     saldoTotal:number,
//     debitos:number[]
// }
    
// const clientela:clientes[] =[
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
//     ]

// const function6 = (pingoliro:clientes[]):clientes[] => {

// 	let valorInicial = 0
    
// 	const newArray:any = pingoliro.map((data:clientes,index:number) =>{
// 		const somas:number = data.debitos.reduce(
//     (acumulador , valorAtual) => acumulador + valorAtual
//     , valorInicial
// );
// 		const teste:number = data.saldoTotal - somas
		
// 		const teste2:number = data.saldoTotal = teste

// 		const teste3:any = data.debitos = []

// 		return data
// 	})

// 	const newArray2 = pingoliro.filter((tchengus:clientes) => {
// 		return tchengus.saldoTotal < 0
// 	})
    
//     return newArray2
// }
// console.table(function6(clientela))

//Exercicio 7: 

// const ajustaPreco = (preco :number): string => {
// 	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
// 	return "R$ "+valorAjustado
// }

// type produtos = {
// 	nome:string,
// 	quantidade:number,
// 	valorUnitario:number | string
// }

// const coisas:produtos[] =
// [
// 	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
// 	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
// 	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
// 	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
// 	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
// 	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
// 	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
// ]

// const function7 = (bengus:produtos[]):produtos[] => {

// 	const newArray:produtos[] = bengus.map((data:produtos,index) => {
		
// 		data.valorUnitario = ajustaPreco(data.valorUnitario as number)
// 		return data
// 	})

// 	const compara = (a:produtos,b:produtos):number => {
// 		if (a.quantidade>b.quantidade) return 1;
// 		if (a.quantidade<b.quantidade) return -1;
// 		return 0
// 	}

// 	return newArray.sort(compara)
// }

// console.table(function7(coisas))

//Exercicio 8:

