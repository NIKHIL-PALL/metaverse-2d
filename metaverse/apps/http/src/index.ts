import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the MetaVerse HTTP Server!');
});

app.listen(3000, () => {
  console.log('HTTP server is running on http://localhost:3000');
});