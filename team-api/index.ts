import express, { Express, Request, Response } from 'express';
import teamRouter from './routes/team';
import authRouter from './routes/authentication';
import cors from 'cors';
const app: Express = express();
app.use(cors())
app.use(express.json());
app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000}`);
});
app.use('/teams',teamRouter);
app.use('/auth',authRouter);
