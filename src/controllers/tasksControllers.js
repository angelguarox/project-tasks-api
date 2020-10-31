import Tasks from '../models/tasksModels';

export async function getAllTasks(req, res){
	try{
		const allTasks = await Tasks.findAll();
		console.log(allTasks);
		return res.json({
			message: 'Tasks list',
			data: allTasks
		});
	}
	catch(e){
		console.log(e);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {}
		});
	}
}

export async function getOneTask(req, res){
	const {id} = req.params;
	try{
		const oneTask = await Tasks.findOne({
			where: {id}
		});
		console.log(oneTask);
		return res.json({
			message: 'Task found',
			data: oneTask
		});
	}
	catch(e){
		console.log(e);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {}
		});
	}
}

export async function createTask(req, res){
	const {name, done, projectId} = req.body;
	try{
		const newTask = await Tasks.create({
			name,
			done,
			projectId
		}, {
			fields: ['name', 'done', 'projectId']
		});
		if(newTask){
			console.log(newTask);
			return res.json({
				message: 'Task created successfully',
				data: newTask
			});
		}
	}
	catch(e){
		console.log(e);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {}
		});
	}
}

export async function deleteTask(req, res){
	const {id} = req.params;
	try{
		const deleteTask = await Tasks.destroy({
			where: {id}
		});
		console.log(deleteTask);
		return res.json({
			message: 'Task deleted successfully',
			count: deleteTask
		});
	}
	catch(e){
		console.log(e);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {}
		});
	}
}

export async function updateTask(req, res){
	const {id} = req.params;
	const {name, done, projectId} = req.body;
	const listTasks = await Tasks.findAll({
		attributes: ['id', 'name', 'done', 'projectId'],
		where: {id}
	});
	try{
		if(listTasks.length > 0){
			listTasks.forEach(async (Tasks) => {
				const editTask = await Tasks.update({
					name,
					done,
					projectId
				});
			});
		}
		console.log(listTasks);
		return res.json({
			message: 'Task updated successfully',
			data: listTasks
		});
	}
	catch(e){
		console.log(e);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {}
		});
	}
}

export async function getTaskByProject(req, res){
	const {projectId} = req.params;
	try{
		const tasksByProjects = await Tasks.findAll({
			where: {projectId}
		});
		console.log(tasksByProjects);
		return res.json({
			message: 'Tasks list by Projects',
			data: tasksByProjects
		});
	}
	catch(e){
		console.log(e);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {}
		});
	}
}