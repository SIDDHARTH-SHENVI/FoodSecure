import express from 'express';
import { createFood, getFood } from '../controller/food.controller.js';

const router=express.Router();
router.post('/', createFood);

router.get("/",getFood)

export default router;