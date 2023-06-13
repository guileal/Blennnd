import express from 'express'
import movieController from '../controllers/movieController.js'

const movieRouter = express.Router()

// CREATE
// movieRouter.post('/', callbackfn)

// READ
movieRouter.get('/', movieController.getAllMovies)
// movieRouter.get('/:id', callbackfn)

// UPDATE
// movieRouter.put('/:id', callbackfn)

// DELETE
// movieRouter.delete('/:id', callbackfn)

export default movieRouter































async function registerBatch() {
    const moviesRef = collection(db, "movies")

    const movie1 = new Movie("movie1", "The Shawshank Redemption", "Frank Darabont", 1994, ["Drama"], 9.3);
    const movie2 = new Movie("movie2", "The Godfather", "Francis Ford Coppola", 1972, ["Crime", "Drama"], 9.2);
    const movie3 = new Movie("movie3", "Pulp Fiction", "Quentin Tarantino", 1994, ["Crime", "Drama"], 8.9);
    const movie4 = new Movie("movie4", "The Dark Knight", "Christopher Nolan", 2008, ["Action", "Crime", "Drama"], 9.0);
    const movie5 = new Movie("movie5", "Fight Club", "David Fincher", 1999, ["Drama"], 8.8);

    await setDoc(doc(moviesRef, movie1.id), { ...movie1 });
    await setDoc(doc(moviesRef, movie2.id), { ...movie2 });
    await setDoc(doc(moviesRef, movie3.id), { ...movie3 });
    await setDoc(doc(moviesRef, movie4.id), { ...movie4 });
    await setDoc(doc(moviesRef, movie5.id), { ...movie5 });
}































// Aqui devem ser apenas as rotas e enviar para o controller :)

// movieRouter.get('/', async (req, res) => {
//     try {
//         const moviesRef = collection(db, "movies")
//         const collectionSnapshot = await getDocs(moviesRef)

//         if (collectionSnapshot.empty) {
//             res.status(404).send('coleção não existe')
//             return
//         }
//         const allMovies = collectionSnapshot.docs.map(doc => doc.data())
//         res.send(JSON.stringify(allMovies))
//     } catch (error) {
//         console.log(error)
//         res.status(500).send('Ocorreu um erro ao buscar os filmes')
//     }
// })

// movieRouter.post('/', async (req, res) => {
//     try {
//         registerBatch()
//         console.log('|||| Cadastro Realizado :) |||| ')
//         res.send('Cadastro realizado')
//     } catch (error) {
//         console.log(error)
//         console.log(error.message)
//         console.error(error.stack)
//     }

// })

// movieRouter.get(`/:id`, (req, res) => {
//     const idMovie = req.params.id
//     console.log(idMovie)
//     res.send(idMovie)
// })

// TODO
// CREATE