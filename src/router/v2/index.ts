import express from 'express';
import { first_tutiral } from '../../v2-module/firstTu/firstTu.router';
import { Secend_tutiral } from '../../v2-module/Secend/Secend.router';
import { modeltest } from '../../v2-module/modeltest/modeltest.router';
import { test_tutiral } from '../../v2-module/test/test.router';
import { admition_tutiral } from '../../v2-module/admition/admition.router';
import { healf_year_exam } from '../../v2-module/Healf/Healf.router';

const router = express.Router();

const moduleRoute = [
  {
    path: '/first_tutiral',
    route: first_tutiral,
  },
  {
    path: '/second_tutiral',
    route: Secend_tutiral,
  },
  {
    path: '/modeltest',
    route: modeltest,
  },
  {
    path: '/test',
    route: test_tutiral,
  },
  {
    path: '/admition_exam',
    route: admition_tutiral,
  },
  {
    path: '/healf-year-exam',
    route: healf_year_exam,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export const v2Route = router;
