import { Request, Response } from "express";
import { connection } from "..";

export default async function getTaskById(req:Request,res:Response){
    try {
        
        const id = Number(req.params.id)

        if(!id){
            res.statusCode = 404;
            throw new Error("Você deve passar um id como parâmetro");
        }

        const result = await connection("task")
        .select("*")
        .where({id})

        res.status(200).send(result[0])

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}