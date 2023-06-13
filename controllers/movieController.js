import movieModel from '../models/movieModel.js'

const movieController = {
    async getAllMovies(req, res) {
        const movies = await movieModel.getData()
        console.log(movies)
        return res.json(movies)
    }
}

export default movieController