import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> Lista todos os usuários ----------GET
store/create -> cria um novo usuário ------POST
delete -> apaga uum usuário ---------------DELETE
show -> mostra um usuário -----------------GET
update -> atualiza um usuário -------------PATCH ou PUT
*/
