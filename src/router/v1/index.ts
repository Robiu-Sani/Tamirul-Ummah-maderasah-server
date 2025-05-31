import express from 'express';
import { notice_router } from '../../module/notices/notice.route';
import { auth_route } from '../../module/auth/auth.route';
import { institution_router } from '../../module/contact-info/contact.route';
import { slide_router } from '../../module/carousel/carousel.route';
import { student_router } from '../../module/student/student.route';
import { father_router } from '../../module/student/father/father.router';
import { Mother_router } from '../../module/student/mother/mother.route';
import { Gairdean_router } from '../../module/student/gairdean/gairdean.route';
import { teacher_router } from '../../module/teacher/teacher.route';
import { stafe_router } from '../../module/stafe/stafe.route';
import { Fee_router } from '../../module/student/education-fee/fee.route';
import { post_router } from '../../module/post/post.route';
import { result_router } from '../../module/student/result/result.route';
import { feesStructure_router } from '../../module/FeesStructure/FeesStructure.route';
import { selary_router } from '../../module/selary/selary.route';
import { notifection_router } from '../../module/notifection/notifection.route';
import { about_router } from '../../module/about-institute/about.route';
import { consult_router } from '../../module/consulting/consulting.route';
import { gain_router } from '../../module/gain/gain.router';
import { image_router } from '../../module/image/image.route';
import { release_route } from '../../module/student/result/release/release.route';
import { user_router } from '../../module/user/user.router';

const router = express.Router();

const moduleRoute = [
  {
    path: '/notice',
    route: notice_router,
  },
  {
    path: '/auth',
    route: auth_route,
  },
  {
    path: '/institution',
    route: institution_router,
  },
  {
    path: '/slide',
    route: slide_router,
  },
  {
    path: '/student',
    route: student_router,
  },
  {
    path: '/father',
    route: father_router,
  },
  {
    path: '/mother',
    route: Mother_router,
  },
  {
    path: '/gairdean',
    route: Gairdean_router,
  },
  {
    path: '/teacher',
    route: teacher_router,
  },
  {
    path: '/stafe',
    route: stafe_router,
  },
  {
    path: '/fee',
    route: Fee_router,
  },
  {
    path: '/post',
    route: post_router,
  },
  {
    path: '/result',
    route: result_router,
  },
  {
    path: '/feesStructure',
    route: feesStructure_router,
  },
  {
    path: '/selary',
    route: selary_router,
  },
  {
    path: '/notifection',
    route: notifection_router,
  },
  {
    path: '/about',
    route: about_router,
  },
  {
    path: '/consult',
    route: consult_router,
  },
  {
    path: '/gain',
    route: gain_router,
  },
  {
    path: '/image',
    route: image_router,
  },
  {
    path: '/release',
    route: release_route,
  },
  {
    path: '/user',
    route: user_router,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export const v1Route = router;
