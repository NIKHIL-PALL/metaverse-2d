import express from 'express';
import router from './routes/index.js';


const app = express();

app.use('/api/v1', router);
app.get('/health', (req:any, res:any) => {
  res.send('OK');
});

const PORT = 9554;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});