import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app: Express = express();
app.use(express.json());
app.use(cors());

//Exercicio 1: 

app.get("/ping", (req,res) => {
    res.send("Pong")
})

//Exercicio 2:

type Afazer = {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

//Exercicio 3:

let arrayAfazeres:Afazer[] = [
    {
        userId:1,
        id:1,
        title:"Arrumar a cama",
        completed:true

    },
    {
        userId:1,
        id:2,
        title:"Escovar os dentes",
        completed:true

    },
    {
        userId:1,
        id:3,
        title:"Comer",
        completed:false

    },
    {
        userId:1,
        id:4,
        title:"Caminhar na rua",
        completed:false

    }
]

//Exercicio 4:

app.get("/afazeres/:completed", (req,res) => {

    let paramsCompleted:string = req.params.completed

    if(paramsCompleted === "true"){
        let newArray:Afazer[] = arrayAfazeres.filter((data) =>{
            return data.completed === true
        })
        res.send(newArray)
    }
    if(paramsCompleted === "false"){
        let newArray:Afazer[] = arrayAfazeres.filter((data) =>{
            return data.completed === false
        })
        res.send(newArray)
    }
})

//Exercicio 5: 

app.post("/createAfazer", (req,res) => {
    let newAfazer:Afazer = req.body
    arrayAfazeres.push(newAfazer)
    res.send(arrayAfazeres)
})

//Exercicio 6:

app.put("/editStatus/:id/:completed", (req,res) => {
    let paramsId2 = Number(req.params.id)
    let paramsCompleted2 = req.params.completed

    let afazerEdit:Afazer | undefined = arrayAfazeres.find((data) => {
        return data.id === paramsId2
    })

    if(paramsCompleted2 === "true"){
         let editedAfazer = {...afazerEdit, completed:true}
         res.send(editedAfazer)
    }
    if(paramsCompleted2 === "false"){
        let editedAfazer = {...afazerEdit, completed:false}
        res.send(editedAfazer)
    }
})

//Exercicio 7:

app.delete("/deleteAfazer/:id",(req,res)=>{
    let paramsId3:number = Number(req.params.id)

    let newArray7:Afazer[] = arrayAfazeres.filter((data) => {
        return data.id !== paramsId3
    })

    res.send(newArray7)
})

//Exercicio 8:

app.get("/afazeresById/:userId",(req,res)=>{
    let paramsId4:number = Number(req.params.userId)

    let newArray8 = arrayAfazeres.filter((data)=>{
        return data.userId === paramsId4
    })

    res.send(newArray8)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});