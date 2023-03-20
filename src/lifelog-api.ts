import express, { json } from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h2>API for lifelog.lennythedude.com will be here shortly</h2>');
});

app.listen(port, () => {
  return console.log(`The Lifelog API is listening on port ${port}`);
})