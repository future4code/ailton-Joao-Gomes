import { Request, Response } from "express";
import { connection } from "..";
import { taskType } from "./types";

export default async function createTask(req:Request,res:Response){
    try {
        const {title,description,creator_user_id,limit_date} = req.body

        if(!title || !description || !creator_user_id || !limit_date){
            res.statusCode = 404;
            throw new Error("Você deve passar todos os parâmetros");
        }
        
        const BRtoUS = (data:string):string => {
            const dates = data.split("/")
            return `${dates[2]}-${dates[1]}-${dates[0]}`
        }
        const oficialLimitDate:string = BRtoUS(limit_date)

        const newTask:taskType = {
            title,
            description,
            limit_date:oficialLimitDate,
            creator_user_id
        }
        
        await connection("task")
        .insert(newTask)

        res.status(200).send("Tarefa criada com sucesso.")
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}
