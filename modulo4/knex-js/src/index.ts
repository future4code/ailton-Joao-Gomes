import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();

app.use(express.json());
app.use(cors());

//Ator pelo Nome
app.get("/actor/:name",async(req:Request,res:Response)=> {
    try {

      let {name} = req.params;
      if (!name) {
        res.statusCode = 404;
        throw new Error("Você deve passar o nome de um ator");
      }
      let result = await connection.raw(`
          SELECT * From Actor WHERE nome="${name}"
      `)
      if(!result) {
        res.statusCode = 404;
        throw new Error("Ator não encontrado")
      }
      res.send(result[0])

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})
//Nao funciona verificaçao de parametros--------------------------------------------------------------------------------

//Quantidade de Atores por genero
app.get("/actorbygender/:genero", async(req:Request,res:Response)=>{
    try {
        let {genero} = req.params
        if(!genero){
            res.statusCode = 404
            throw new Error("Você precisa passar um gênero por parâmetro")
        }
        let result = await connection.raw(`
        SELECT COUNT(*) as "${genero}" FROM Actor WHERE gender = "${genero}"
        `)

        res.send(result[0][0])
        
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})
//Nao funciona verificaçao de parametros--------------------------------------------------------------------------------

//Atualiza salario de ator
app.put("/salaryupdate", async(req:Request,res:Response)=>{
    try {
        let {salary,id} = req.body
        if(!salary || !id){
            res.statusCode = 404
            throw new Error("Você precisa passar um salário e um id")
        }
        await connection("Actor")
        .update({
            salary
        })
        .where({id})
        res.send("Sucesso!")
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})
//Atualiza salario de ator que nao existe mais----------------------------------------------------------------------
//Nao funciona verificaçao de parametros--------------------------------------------------------------------------------

//Deleta ator por id
app.delete("/deleteActor/:id", async(req:Request,res:Response)=>{
    try {
        let {id} = req.params
        if(!id){
            res.statusCode = 404
            throw new Error("Passe o id do ator que deseja apagar")
        }
        await connection("Actor")
        .delete()
        .where({id})
        res.send(`Ator de id ${id} apagado.`)
        
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})
//Apaga o mesmo ator varias vezes ---------------------------------------------------------------------------------------
//Nao funciona verificaçao de parametros--------------------------------------------------------------------------------

//Media de salario por genero
app.get("/averageSalary/:genero", async(req:Request,res:Response)=>{
    try {
        let { genero } = req.params;
        if (!genero) {
          res.statusCode = 404;
          throw new Error("Passe o id do ator que deseja apagar");
        }
        let result = await connection("Actor")
          .avg(`salary as ${genero}`)
          .where({ gender:genero });
        res.send(result[0]);
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
    
})
//Nao funciona verificaçao de parametros--------------------------------------------------------------------------------
//Não precisa de select

//Adiciona Ator
app.post("/createActor", async(req:Request,res:Response)=>{
    try {
        let actorInfo = {
            id:req.body.id,
            nome:req.body.nome,
            salary:req.body.salary,
            birth_date: new Date(req.body.birth_date),
            gender:req.body.gender
        }
        await connection("Actor").insert(actorInfo)

        res.send("ator adicionado")
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})

//Adiciona filme
app.post("/createMovie",async(req:Request,res:Response)=>{
    try {
        let { id, nome, sinopse, lançamento, nota } = req.body;
        let movieInfo = {
            id,
            nome,
            sinopse,
            lançamento:new Date(lançamento),
            nota
        }

        await connection("Movie").insert(movieInfo)
        res.send("filme adicionado")

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})

//Retorna filmes
app.get("/movie/all",async(req:Request,res:Response)=>{
    try {
        let result = await connection("Movie").select("*")
        res.send(result)
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})

//




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});