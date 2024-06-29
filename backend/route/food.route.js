import express from 'express';
import { createFood, deleteFood, getFood} from '../controller/food.controller.js';

const router=express.Router();
router.post('/', createFood);

router.get("/",getFood);

router.delete('/:id', deleteFood);

export default router;