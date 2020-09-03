const express = require('express')
const config = require("config")
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/links.routes'))

const Port = config.get('port') || 5000

async function start() {
    try{
        await mongoose.connect(config.get("mongoUri"),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(Port, () => console.log(`app has been started on port ${Port}...`))
    } catch(e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()
