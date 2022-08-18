import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { arrayProdutos, Produto, NewProduto } from "./data";


const app: Express = express();
app.use(express.json());
app.use(cors());

//Exercicio 1:
app.get("/test", (req:Request,res:Response) => {
    res.send("Está funcionando")
})

//Exercicio 3:
app.post("/createProduct", (req:Request,res:Response) => {
    let newBody:NewProduto= req.body
    let newId = String(Math.random() * (240000000 + 10) + 10)
        
    let newProduct:Produto = {
        id:newId,
        name:newBody.name,
        price:newBody.price
    }
    arrayProdutos.push(newProduct)
    res.send(arrayProdutos)
})

//Exercicio 4:
app.get("/allProducts", (req:Request,res:Response) => {
    res.send(arrayProdutos)
})

//Exercicio 5: 
app.put("/editPrice/:id", (req:Request,res:Response) => {
    let paramsId = req.params.id
    let newPrice = req.body
    
    let newPriceArray = arrayProdutos.filter((data) => {
        return data.id === paramsId
    })
    res.send(newPriceArray)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});