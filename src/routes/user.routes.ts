import { Router } from 'express';
import controller from '../controllers/user.controller';

const router = Router();

router.post('/createUser', controller.createUser);

export default router;
