const express = require('express')
const app = express()

const populateDB = require('./utils/populateDB')
const port = 3000

populateDB()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(require('./routes/people'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})