import db from '../config/firebase.js'
import { doc, collection, getDocs, getDoc } from 'firebase/firestore'

class Movie {
    constructor(id, title, director, year, genres, rate) {
        this.id = id
        this.title = title
        this.director = director
        this.year = year
        this.genres = genres
        this.rate = rate
    }
}

// Reference to collection in the database
const moviesCollection = collection(db, "movies")

async function getData() {
    const collectionSnapshot = await getDocs(moviesCollection)

    const movies = []

    collectionSnapshot.forEach(doc => {
        movies.push(doc.data())
    })


    if (collectionSnapshot.empty) {
        console.log('model/Movie: Empty snapshot')
        return
    }

    return movies
}

async function getDataById(movieId) {
    const movieRef = doc(moviesCollection, movieId)
    const movieSnapshot = await getDoc(movieRef)

    if (!movieSnapshot.exists()) {
        console.log(`Document ${movieId} not founded `)
        return null
    }

    console.log(`Movie Snapshot >>>${movieSnapshot.data()}`)
    return movieSnapshot.data()

}

const movieModel = {
    Movie,
    getData,
    getDataById
}

export default movieModel