import express from "express";
const router = express.Router()
import { deletUser, getAllUsers, getUserById, updateUser, userSubscribedPerMonth } from "../controller/UserController.js";
import { verify } from "../VerifyToken.js";

// PUT REQUEST
router.put('/:id',verify,updateUser)
// DELETE REQUEST
router.delete('/:id',verify,deletUser)
// GET REQUEST
router.get('/',verify,getAllUsers)
router.get('/find/:id',getUserById)
router.get('/stats',userSubscribedPerMonth)

export default router