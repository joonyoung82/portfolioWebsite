const express = require('express')
const app = express()

var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => res.send('Hello World!'))



app.get('/hello', (req, res) => res.send('hello calvin'))

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});