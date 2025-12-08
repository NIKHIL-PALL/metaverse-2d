import { Router } from 'express';
import { prisma } from '@repo/db';

const router = Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  
  try {
    const user = await prisma.user.findUnique({ 
      where: { username } 
    });
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // TODO: Add password verification logic here (e.g., using bcrypt)
    // For now, just checking if user exists
    
    res.json({ 
      message: 'Login successful', 
      user: { 
        id: user.id, 
        username: user.username,
        email: user.email 
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;