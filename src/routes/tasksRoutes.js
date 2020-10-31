import {Router} from 'express';
import {getAllTasks, getOneTask, createTask, deleteTask, updateTask, getTaskByProject} from '../controllers/tasksControllers';

const router = Router();

router.get('/', getAllTasks);
router.get('/:id', getOneTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/tasksbyprojects/:projectId', getTaskByProject);

export default router;