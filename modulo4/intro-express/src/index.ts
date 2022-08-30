import express, {Express} from 'express'
import { AddressInfo } from "net";
import cors from 'cors'

const app: Express = express();


app.use(express.json());
app.use(cors());


//Parte 1:

// app.get("/", (req,res) => {
//     res.send("Hellow World!")
// })

//Parte 2:

type User = {
    id:number,
    name:string,
    phone:number,
    email:string,
    website:string
}

let arrayUsers:User[] = [
    {id: 1,
    name:"João",
    phone: 55555555,
    email:"joao@gmail.com",
    website:"joao.com"},
    {id:2,
    name:"Eduardo",
    phone: 66666666,
    email:"eduardo@gmail.com",
    website:"eduardo.com"},
    {id:3,
    name:"Paulo",
    phone: 77777777,
    email:"paulo@gmail.com",
    website:"paulo@gmail.com"}
]

app.get("/users", (req,res) => {
    res.send(arrayUsers)
})

//Parte 3:

type Post = {
    userId:number,
    id:number,
    title:string,
    body:string
}

let arrayPosts:Post[] = [
    {
        userId:1,
        id:1,
        title:"Bom dia",
        body:"Tenha um ótimo dia ;)"
    },
    {
        userId:2,
        id:2,
        title:"Boa Tarde",
        body:"Tenha uma ótima tarde ;)"
    },
    {
        userId:3,
        id:3,
        title:"Boa Noite",
        body:"Tenha uma ótima noite ;)"
    }
]
//Acho melhor criar fora do array de usuários por motivo de organização e não dar muito poder para uma array apenas. 

app.get("/posts/:userId", (req,res) => {

    let paramsUserId:number = Number(req.params.userId)
    let newArray:Post[] = arrayPosts.filter((data) => {
        return data.userId === paramsUserId
    })
    res.send(newArray) 
})

app.delete("/deletePost/:id", (req,res) => {
    let paramsId:number = Number(req.params.id)
    let newArray2:Post[] = arrayPosts.filter((data) => {
        return data.id !== paramsId
    })
    res.send(newArray2) 
})

app.delete("/deleteUser/:id", (req,res) => {
    let paramsId2:number = Number(req.params.id)
    let newArray3:User[] = arrayUsers.filter((data) => {
        return data.id !== paramsId2
    })
    res.send(newArray3)
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});