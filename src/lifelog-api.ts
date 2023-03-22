import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('<h2>The API for lifelog.lennythedude.com will be here shortly</h2>');
});

app.listen(port, () => {
    return console.log(`The Lifelog API is listening on port ${port}`);
})