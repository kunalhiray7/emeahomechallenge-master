const express = require('express');
const bodyParser = require('body-parser');
const csv = require('csvtojson');
const cors = require('cors');

const server = express();

//accept only JSON
server.use(bodyParser.json());
server.use(cors());

// healthcheck API
server.get('/api/ping', (req, res) => res.send('pong'));

let jsonBooks;

server.get('/api/books', async (req, res) => {
  if(!jsonBooks) {
    jsonBooks = await csv({delimiter: ";"}).fromFile('./books_copy.csv');
  }
  res.send(jsonBooks);
});

server.get('/api/books/:id', async (req, res) => {
  if(!jsonBooks) {
    jsonBooks = await csv({delimiter: ";"}).fromFile('./books_copy.csv');
  }
  const id = req.params.id
  const singleBook = jsonBooks.find(book => book.ID === id)
  if(singleBook === undefined) {
    res.status(404).send({message: `No book found for ID ${id}`})
  }
  res.send(singleBook);
});

//set port and log to the console
server.listen(3000, () => console.log('server listening'));
