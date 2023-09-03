import express from "express";
import { verify } from "../VerifyToken.js";
import { createMovie, deleteMovie, getAllMovies, getMovieById, getRandom, updateMovie } from "../controller/MovieController.js";
const router = express.Router()


// POST REQUEST
router.post('/',verify,createMovie)
// PUT REQUEST
router.put('/:id',verify,updateMovie)
// DELETE REQUEST
router.delete('/:id',verify,deleteMovie)
// GET REQUEST
router.get('/',verify,getAllMovies)
router.get('/find/:id',getMovieById)
router.get('/random',getRandom)

export default router