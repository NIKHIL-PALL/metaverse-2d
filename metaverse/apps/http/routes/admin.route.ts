import { Router } from 'express';

const router = Router();

router.get('/admin', (req, res) => {
  res.send('Hello Admin');
});

export default router;