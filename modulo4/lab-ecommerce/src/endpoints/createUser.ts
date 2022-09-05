import { Request,Response } from "express";
import { connection } from "../data/baseDataBase";
import { userInput } from "../types/userTypes";

export default async function createUser(req:Request,res:Response) {
    try {
        
        const {name, email, password}: userInput = req.body

        if (!name || !email || !password) {
            throw new Error("Os 3 parâmetros devem ser passados.")
        }

        const userInsert: userInput = {
            name,
            email,
            password
        }

        const result = await connection("labecommerce_users")
        .insert(userInsert)

        res.status(201).send({ message: result})

    } catch (error:any) {
        res.status(500).send("Cadastrado.")
    }
}