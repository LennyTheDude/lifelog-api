import express, { json } from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h2>API for network.lennythedude.com will be here shortly</h2>');
});

app.listen(port, () => {
  return console.log(`The network API is listening on port ${port}`);
})