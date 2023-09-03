import express from "express";
import { createList, deleteList, getLists } from "../controller/ListController.js";
import { verify } from "../VerifyToken.js";
const router = express.Router()

// POST REQUEST
router.post('/',verify,createList)
// DELETE REQUEST
router.delete('/:id',verify,deleteList)
// GET REQUEST
router.get('/',verify,getLists)
export default router