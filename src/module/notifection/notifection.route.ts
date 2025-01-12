import express from 'express';
import NotifectionController from './notifection.controllar';

const router = express.Router();

router.post('/create-notifection', NotifectionController.createNotifection);
router.get('/', NotifectionController.getAllNotifection);
router.get('/box', NotifectionController.noticectionBox);
router.get('/admition', NotifectionController.noticectionAdmition);
router.get('/alert', NotifectionController.noticectionAlert);
router.get(
  '/single-notifection/:id',
  NotifectionController.getSingleNotifection,
);
router.delete(
  '/delete-notifection/:id',
  NotifectionController.deleteSingleNotifection,
);
router.patch(
  '/update-single-notifection-by-patch/:id',
  NotifectionController.updateSingleByPatchNotifection,
);
router.put(
  '/update-single-notifection-by-put/:id',
  NotifectionController.updateSingleByPutNotifection,
);

export const notifection_router = router;
