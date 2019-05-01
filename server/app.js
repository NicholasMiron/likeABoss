const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('../db/index.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json({urlencoded: false}))

app.use(express.static('dist'));

app.get('/api/boards', (req, res) => {
  const boardId = req.query.boardId;
  db.getBoard(boardId)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
})

app.post('/api/boards', (req, res) => {
  const boardId = req.body.boardId;
  const lists = req.body.lists;

  db.addBoard(boardId, lists)
  .then((results) => {
    res.send(results);
  })
  .catch(err => {
    res.send(err);
  })
})

app.get('/api/boards/list', (req, res) => {
  const listTitle = req.query.title;

  db.getList(listTitle)
  .then(results => {
    res.send(results);
  })
  .catch(err => {
    res.send(err);
  })
})

app.post('/api/boards/list', (req, res) => {
  const boardId = req.body.boardId;
  const list = req.body.list;

  db.addList(boardId, list) 
  .then(results => {
    res.send(results);
  })
  .catch(err => {
    res.send(err);
  })
})



module.exports = app;
