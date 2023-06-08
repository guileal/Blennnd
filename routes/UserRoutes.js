import express from 'express'
import db from '../config/firebase.js'
import { collection, getDocs } from 'firebase/firestore'
const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    try {
        const query = await searchInCollection("users")
        res.send(JSON.stringify(query))
    } catch (error) {
        res.status(500).send('500 - Erro ao buscar usuários')
    }

})

userRouter.get(`/: id`, (req, res) => {
    // Logica do firestore
    const idUser = req.params.id
    console.log(idUser)
    res.send(`retorna usuario = ${idUser} `)
})


//Create

//Read
// 1

// one collection
async function searchInCollection(collectionName) {
    const snapshot = await getDocs(collection(db, collectionName))
    const queryArray = []

    snapshot.forEach((doc) => {
        queryArray.push(doc.data())
        // console.log(doc.id, " => ", doc.data());
    });

    return queryArray
}



//Update

//Delete

export default userRouter

