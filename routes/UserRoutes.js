import express from 'express'
const userRouter = express.Router()

userRouter.get(`/:id`, (req, res) => {
    // Logica do firestore
    const idUser = req.params.id
    console.log(idUser)
    res.send(`retorna usuario= ${idUser}`)
})

userRouter.get('/', (req, res) => {
    res.send('users aqui')
})



export default userRouter

