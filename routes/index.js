import express from 'express'
import movieRoutes from './MovieRoutes.js'
import userRoutes from './UserRoutes.js'

const router = express.Router()

//Index de Rotas
router.use('/movies', movieRoutes)
router.use('/user', userRoutes)

export default router