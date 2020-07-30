const express = require('express')

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json())
app.use(express.json())

require('./routes')(app)

app.listen(5000, () => {
    console.log("Listening on Port 5000")
})