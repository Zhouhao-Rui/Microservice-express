const express = require('express')

const app = express()

app.get('/comments', (req, res) => {

})

app.post('/comments', (req, res) => {

})

app.listen(5000, () => {
    console.log('COMMENTS listen on 5000')
})