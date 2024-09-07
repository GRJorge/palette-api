import { Router } from 'express';
import controller from '../controllers/user.controller';

const router = Router();

router.post('/create', controller.createUser);

export default router;
