import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import userRoutes from './routes/user';
import config from "./config/config";
import cors from "cors";

const app: Application = express();
const port = config.server.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.get('/', (req: Request, res: Response) => {
    res.send('<h2>The API for lifelog.lennythedude.com will be here shortly</h2>');
});

app.use('/users', userRoutes);

app.listen(port, () => {
    return console.log(`The Lifelog API is listening on port ${port}`);
});