const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./data/category.json')

app.get('/', (req, res) => {
    res.send('News api running')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => console.log('News server running on port', port))