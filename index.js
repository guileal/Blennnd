import express from 'express'
import routes from './routes/index.js'

const app = express()
const port = 3000

// Middleware
app.use(express.json())

app.use('/api', routes)
app.get('/', async (req, res) => {
    res.send('Estamos usando o endpoint http://localhost:${port}/api')
})

app.listen(port, () => {
    console.log(`
    Server is running on
    http://localhost:${port}`)
})

export default app