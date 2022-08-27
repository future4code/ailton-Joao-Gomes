import { Request, Response } from "express";
import { connection } from "..";


export default async function getUserById(req:Request,res:Response){
    try {
        const id = Number(req.params.id)
        if(!id){
            res.statusCode = 404;
            throw new Error("Você deve passar um número como parâmetro");
        }
        const result = await connection("user")
        .select("id","nickname")
        .where({id})
        if(!result.length){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado");
        }
        res.status(200).send(result[0])
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}