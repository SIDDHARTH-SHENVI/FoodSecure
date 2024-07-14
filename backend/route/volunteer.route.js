import express from 'express';
import { handleVolunteerSubmission } from '../controller/volunteer.controller.js';


const router = express.Router();

router.post('/', handleVolunteerSubmission);

export default router;
