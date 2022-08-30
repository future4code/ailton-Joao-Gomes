import { Request, Response } from "express";
import { connection } from "..";

export default async function postTaskResponsible(req:Request,res:Response){
    try {
        
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}
