import { Request, Response } from "express";
import { connection } from "..";

export default async function getUserByNameOrNickname(req:Request,res:Response){
    try {
        const search = req.query.search
        if(!search){
            res.statusCode = 404;
            throw new Error("Você deve passar o query indicado.");
        }

        const result = await connection.raw(
          `SELECT id, nickname FROM user WHERE nickname LIKE '%${search}%' OR username LIKE '%${search}%'`
        );
        
        res.status(201).send(result[0])

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
}