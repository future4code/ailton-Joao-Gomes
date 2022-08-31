import {app} from "./app";
import { getByName } from "./endpoints/getByName";

app.get("/name",getByName)