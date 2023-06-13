import { Router } from 'express';
import { getStatus } from '../../controllers';

const router = Router();

router.get('', getStatus);

export default router;
