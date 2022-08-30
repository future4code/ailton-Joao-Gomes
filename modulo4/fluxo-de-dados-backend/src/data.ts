export type Produto = {
    id:string,
    name:string,
    price:number
}

export type NewProduto = {
    name:string,
    price:number
}

export let arrayProdutos:Produto[] = [
    {
        id:"1",
        name:"Mouse",
        price:50
    },
    {
        id:"2",
        name:"Teclado",
        price:100
    },
    {
        id:"3",
        name:"Fone",
        price:75
    }
]