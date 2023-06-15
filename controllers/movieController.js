import movieModel from '../models/movieModel.js'

const movieController = {
    async getAllMovies(req, res) {
        const movies = await movieModel.getData()
        console.log(movies)
        return res.json(movies)
    },

    async getMovieById(req, res) {
        const movieId = req.params.id
        const movie = await movieModel.getDataById(movieId)
        return res.json(movie)
    }
}

export default movieController