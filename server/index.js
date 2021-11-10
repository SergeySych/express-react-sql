const express = require('express')
const router = require('./src/router/index')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({credentials: true, origin: 'https://sergeysychexpressreactclient.herokuapp.com'}))

app.use('/', router)

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()