import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

//routes
import indexRouter from "./routes/indexRouter";

const app: Application = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use('/', indexRouter);

export default app;
