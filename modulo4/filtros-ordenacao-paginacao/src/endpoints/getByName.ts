import { Request, Response } from "express";
import { connection } from "../app";
import { Account } from "../types";

export const getByName = async (req: Request, res: Response) => {
  try {
    let queryName = req.query.name
    if (!queryName) {
      queryName = "";
    }
    let result = await connection("aula48_exercicio")
    .select("*")
    .where("name","like",`${queryName}`)

    
    res.send(result)

  } catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
};
