import { Request, Response } from "express";
import { connection } from "..";
import { userType } from "./types";

export default async function editUser(req:Request,res:Response){
    try {
        const id = Number(req.params.id)
        const {username,nickname,email} = req.body
        const editedUser:userType = {
            username,
            nickname,
            email
        }
        if(!id){
            res.statusCode = 404;
            throw new Error("Você deve passar um número como parâmetro");
        }
        if(!username || !nickname || !email){
            res.statusCode = 404;
            throw new Error("Você deve passar todos os parâmetro necessários");
        }
        await connection("user")
        .update(
            editedUser
        )
        .where({"id":id})
        
        res.status(200).send("Sucesso! Usuário alterado")

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}