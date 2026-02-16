import express from 'express';
import cors from 'cors';
import config from './config/config.js';
import routes from './routes/index.route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});