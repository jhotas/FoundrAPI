import express from 'express'
import { startups } from './data/data.js'

const app = express()
const apiRouter = express.Router()

app.get('/api', (req, res) => {
    
})

app.get('/api/:field/:term', (req, res) => {
    
})

app.listen(8000, () => console.log(`Server running on port ${PORT}`))