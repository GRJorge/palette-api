import { Router } from 'express';
import controller from '../controllers/user.controller';

const router = Router();

router.post('/create', controller.createUser);
router.put('/edit', controller.editUser)

export default router;
