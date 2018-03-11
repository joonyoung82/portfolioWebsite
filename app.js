const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello', (req, res) => res.send('hello calvin'))

app.listen(80, () => console.log('Example app listening on port 3000!'))