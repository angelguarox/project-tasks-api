import {Router} from 'express';
import {getAllProjects, getOneProject, createProject, deleteProject, updateProject} from '../controllers/projectsControllers';

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getOneProject);
router.post('/', createProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

export default router;