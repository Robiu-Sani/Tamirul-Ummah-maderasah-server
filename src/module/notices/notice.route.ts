import express from 'express';
import noticeController from './notice.controllar';

const router = express.Router();

router.post('/create-notice', noticeController.createNotice);
router.get('/', noticeController.getAllNotice);
router.get('/banner', noticeController.getBannerNotice);
router.get('/single-notice/:id', noticeController.getSingleNotice);
router.delete('/delete-notice/:id', noticeController.deleteSingleNotice);
router.patch(
  '/update-single-notice-by-patch/:id',
  noticeController.updateSingleByPatchNotice,
);
router.put(
  '/update-single-notice-by-put/:id',
  noticeController.updateSingleByPutNotice,
);

export const notice_router = router;
