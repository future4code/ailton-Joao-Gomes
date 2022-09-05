import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { typeUser } from "../functions";

export default async function getAllUsers(req:Request,res:Response) {
    try {
        
        const result = await connection("labecommerce_users")
        
        const allUsersType = result.map((user)=>{
            return typeUser(user)
        })

        if(!allUsersType?.length){
            throw new Error("Não há nenhum usuario cadastrado.")
        }

        res.status(200).send(allUsersType)

    } catch (error:any) {
        res.status(500).send({ message: error.message });
    }
}