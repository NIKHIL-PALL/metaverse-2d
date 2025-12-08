import { Router } from 'express';
import userRoute from './user.route.js';
import adminRoute from './admin.route.js';

const router = Router();

router.use('/users', userRoute);
router.use('/admin', adminRoute);

export default router;