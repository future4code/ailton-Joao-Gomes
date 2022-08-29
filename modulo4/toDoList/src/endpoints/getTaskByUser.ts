import { Request, Response } from "express";
import { connection } from "..";

export default async function getTaskByUser(req:Request,res:Response){
    try {
        const creator = Number(req.query.creator)
        if(!creator){
            res.statusCode = 404;
            throw new Error("Você deve passar o query indicado.");
        }

        const result = await connection("task")
        .select("*")
        .where({creator_user_id:creator})

        res.status(201).send(result)
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}