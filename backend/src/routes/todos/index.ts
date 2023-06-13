import { Router } from 'express';
import { createTodo, getTodos } from '../../controllers/todos';

const router = Router();

router.get('', getTodos);

router.post('', createTodo);

export default router;
