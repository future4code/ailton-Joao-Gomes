import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { productsInsert } from "../types/productsType";

export default async function createProduct(req:Request,res:Response) {
    try {
        
        const { name, price, image_url }: productsInsert = req.body;

        if (!name || !price || !image_url) {
          throw new Error("Os valores de name , price e image devem ser passados");
        }

        const productsData: productsInsert = {
          name,
          price,
          image_url
        };

        const result = await connection("labecommerce_products")
        .insert(productsData)
        
        res.status(201).send("Produto cadastrado.")
        
    } catch (error:any) {
        res.status(500).send({ message: error.message });
    }
}