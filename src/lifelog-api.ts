import bodyParser from "body-parser";
import express, { Application, Request, Response } from "express";
import { Query } from './config/psql';
import userRoutes from './routes/user';

const app: Application = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('<h2>The API for lifelog.lennythedude.com will be here shortly</h2>');
});

// app.post('/register', register)

app.use('/users', userRoutes);

app.listen(port, () => {
    return console.log(`The Lifelog API is listening on port ${port}`);
});