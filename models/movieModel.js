import db from '../config/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

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

async function getData() {
    const moviesRef = collection(db, "movies")
    const collectionSnapshot = await getDocs(moviesRef)

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

const movieModel = {
    Movie,
    getData
}

export default movieModel