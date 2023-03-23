import express, { Application, Request, Response } from "express";
import { Query } from './config/psql';

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('<h2>The API for lifelog.lennythedude.com will be here shortly</h2>');
});

Query("SELECT * FROM users")
    .then(result => console.log('Query result:', result.rows))
    .catch(error => console.error('Error executing query', error.stack));


app.listen(port, () => {
    return console.log(`The Lifelog API is listening on port ${port}`);
})