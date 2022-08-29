import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser"
import getUserById from "./endpoints/getUserById"
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask"
import getTaskById from "./endpoints/getTaskById"
import getAllUsers from "./endpoints/getAllUsers"
import getTaskByUser from "./endpoints/getTaskByUser"
import getUserByNameOrNickname from "./endpoints/getUserByNameOrNickname"

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user",createUser);
app.get("/user/all", getAllUsers);
app.get("/user/:id",getUserById);
app.put("/user/edit/:id",editUser);
app.post("/task",createTask);
app.get("/task/:id",getTaskById);
app.get("/task",getTaskByUser);
app.get("/user",getUserByNameOrNickname)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
