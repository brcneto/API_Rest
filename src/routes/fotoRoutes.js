import { Router } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', fotoController.store);

export default router;
