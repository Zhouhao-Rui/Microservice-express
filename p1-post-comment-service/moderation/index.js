const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post('/events', async (req, res) => {
    const { type, data } = req.body

    if (type === 'commentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved'

        await axios.post('http://localhost:4005/events', {
            type: 'commentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }
})

app.listen(4003, () => {
    console.log('Moderation running on 4003')
})