import express, {Application, NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import roleRoutes from './routes/roleRoutes';

dotenv.config();

const app : Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express and Environment Variables!');
});

// Use user routes
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', roleRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});