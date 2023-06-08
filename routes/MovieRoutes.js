import express from 'express'
const movieRouter = express.Router()

movieRouter.get('/', (req, res) => {
    res.send('All Movies Here :)')
})

movieRouter.get(`/:id`, (req, res) => {
    const idMovie = req.params.id
    console.log(idMovie)
    res.send(idMovie)
})


// TODO in Firebase Firestore
// GET
// PUT
// POST
// DELETE



export default movieRouter