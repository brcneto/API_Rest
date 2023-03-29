import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir(falha de segurança)
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Caso específico

// router.post('/', userController.store); // prevenir bot de spam.
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> Lista todos os usuários ----------GET
store/create -> cria um novo usuário ------POST
delete -> apaga uum usuário ---------------DELETE
show -> mostra um usuário -----------------GET
update -> atualiza um usuário -------------PATCH ou PUT
*/
