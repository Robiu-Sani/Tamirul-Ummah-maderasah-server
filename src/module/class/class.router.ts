/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import * as classController from './class.controller';

const router = express.Router();

router.post('/', classController.createClass);
router.get('/', classController.getAllClasses);
router.get('/:id', classController.getClassById as any);
router.put('/:id', classController.updateClass as any);
router.delete('/:id', classController.softDeleteClass as any);

export const class_rouote = router;
