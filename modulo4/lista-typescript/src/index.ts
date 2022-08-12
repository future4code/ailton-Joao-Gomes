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

// entrada

type clientes = {
    cliente:string,
    saldoTotal:number,
    debitos:number[]
}
    
const clientela:clientes[] =[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]

const function6 = (pingoliro:clientes[]):clientes[] => {
    

    
    return 
}
console.log(function6(clientela))