require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const data = {
  "person": {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "skills": ["JavaScript", "Python"]
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
  res.send('Mohit')
})

app.get('/login', (req, res) => {
  res.send('<h1> Please login at Mohits Website </h1>')
})

app.get('/data', (req, res) => {
  res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
