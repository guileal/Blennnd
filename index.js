import express from 'express'
import routes from './routes/index.js'

const app = express()
const port = 3000

// import { db } from './config/firebase.js'
// import { collection, addDoc } from "firebase/firestore";


// Middleware
app.use(express.json())

// API
app.use('/api', routes)

// Web
app.get('/', async (req, res) => {
    res.send('Estamos usando o endpoint /api')
})

app.listen(port, () => {
    console.log(`
    Server is running on
    http://localhost:${port}`)
})

export default app

