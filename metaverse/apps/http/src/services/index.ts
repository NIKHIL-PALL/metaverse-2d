import express from 'express';


const app = express();

app.get('/health', (req:any, res:any) => {
  res.send('OK');
});

const PORT = 9554;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});