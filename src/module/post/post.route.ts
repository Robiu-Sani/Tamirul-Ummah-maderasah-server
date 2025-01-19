import express from 'express';
import PostController from './post.controllar';

const router = express.Router();

router.post('/create-post', PostController.createPost);
router.get('/', PostController.getAllPost);
router.get('/table', PostController.getTablePost);
router.get('/report', PostController.getAllreportPost);
router.get('/single-post/:id', PostController.getSinglePost);
router.delete('/delete-post/:id', PostController.deleteSinglePost);
router.patch(
  '/update-single-post-by-patch/:id',
  PostController.updateSingleByPatchPost,
);
router.put(
  '/update-single-post-by-put/:id',
  PostController.updateSingleByPutPost,
);

export const post_router = router;
