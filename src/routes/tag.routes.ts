import { Router } from 'express';
import controller from '../controllers/tag.controller';
const router = Router();

router.post('/new', controller.newTag);

export default router;
