import express from 'express';
import schedulingController from '../controllers/scheduling.controller.js';

const router = express.Router();

router.post('/', schedulingController.createScheduling);

export default router;