import express, {json} from 'express';
import morgan from 'morgan';
import projectsRoutes from './routes/projectsRoutes';
import tasksRoutes from './routes/tasksRoutes';

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use(json());
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);

export default app;
