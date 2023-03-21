import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
