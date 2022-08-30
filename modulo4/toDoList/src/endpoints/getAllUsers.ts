import { Request, Response } from "express";
import { connection } from "..";

export default async function getAllUsers(req:Request,res:Response){
    try {
        const result = await connection("user")
        .select("*")

        res.status(200).send(result)
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}