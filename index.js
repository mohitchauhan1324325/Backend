require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/facebook', (req, res) => {
  res.send('Mohit')
});

app.get('/login', (req, res) => {
  res.send('<h1> Please login at Mohits Website </h1>')
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'joke 1',
      content: 'This is a joke'
    },
    {
      id: 2,
      title: 'joke 2',
      content: 'This is a joke 2'
    },
    {
      id: 3,
      title: 'joke 3',
      content: 'This is a joke 3'
    }
  ];
  res.send(jokes);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});
