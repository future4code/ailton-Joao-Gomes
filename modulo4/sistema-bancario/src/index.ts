import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Account } from "./Types";
import { ArrayAccounts } from "./Types";
import { Extract } from "./Types";

const app: Express = express();
app.use(express.json());
app.use(cors());

//Criar Conta:

app.post("/createAccount", (req: Request, res: Response) => {
  try {
    let today = new Date();
    let birthDate = new Date(req.body.date);
    let age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      res.statusCode = 406;
      throw new Error("Idade deve ser maior que 18 anos");
    }

    let newAccount: Account = {
      name: req.body.name,
      cpf: Number(req.body.cpf),
      date: birthDate,
      balance: 0,
      extract: [],
    };

    ArrayAccounts.push(newAccount);

    res.status(201).send(ArrayAccounts);
  } catch (error: any) {
    console.log(error);
    res.status(res.statusCode).send(error.message);
  }
});

//Pegar Saldo:
app.get("/balance/:cpf", (req: Request, res: Response) => {
  try {
    let cpf: number = Number(req.params.cpf);
    let client = ArrayAccounts.filter((c) => {
      return c.cpf === cpf;
    });
    let clientBalance = client.map((c) => {
      return c.balance;
    });
    res.send(clientBalance);
  } catch (error) {}
});

//Adicionar Saldo:
app.put("/addValue/:cpf", (req: Request, res: Response) => {
  try {
    let cpf = Number(req.params.cpf);
    let clientIndex = ArrayAccounts.findIndex((client) => client.cpf === cpf);
    let client = ArrayAccounts[clientIndex];
    let value: number = Number(req.body.value);
    client.balance = client.balance + value;
    res.send(client);
  } catch (error) {}
});

//Pagar Conta:
app.put("/pay/:cpf", (req: Request, res: Response) => {
  try {
    let cpf = Number(req.params.cpf);
    let clientIndex = ArrayAccounts.findIndex((client) => client.cpf === cpf);
    let client = ArrayAccounts[clientIndex];
    let clientBalance = client.balance;
    let date = new Date(req.body.date);

    if (clientBalance < Number(req.body.value)) {
      res.statusCode = 406;
      throw new Error("Saldo insuficiente");
    }

    if (date < new Date(Date.now())) {
      res.statusCode = 406;
      throw new Error("Essa data já passou");
    }

    if (!date) {
      date = new Date(Date.now());
    }

    let pay: Extract = {
      value: req.body.value,
      description: req.body.description,
      date: date,
    };
    client.extract.push(pay);

    client.balance = client.balance - Number(pay.value);

    res.send(client);
  } catch (error: any) {
    console.log(error);
    res.status(res.statusCode).send(error.message);
  }
});

//Transferencia entre contas:
app.put

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
