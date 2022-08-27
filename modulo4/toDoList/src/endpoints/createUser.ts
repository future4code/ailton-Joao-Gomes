import {Request,Response} from "express";
import { connection } from "..";
import { userType } from "./types";

export default async function createUser(req:Request,res:Response){
    try {
        const {username,nickname,email} = req.body
        if (!username || !nickname || !email) {
          res.statusCode = 404;
          throw new Error("Você deve passar todos os parâmetros");
        }
        const newUser:userType = {
            username,
            nickname,
            email
        }
        await connection("user")
        .insert(newUser)

        res.status(200).send("Usuário criado!")
        
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}