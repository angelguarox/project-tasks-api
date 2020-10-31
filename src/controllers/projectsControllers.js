import Projects from '../models/projectsModels';

export async function getAllProjects(req, res){
	try{
		const allProjects = await Projects.findAll();
		console.log(allProjects);
		return res.json({
			message: 'Projects list',
			data: allProjects
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

export async function getOneProject(req, res){
	const {id} = req.params;
	try{
		const oneProject = await Projects.findOne({
			where: {id}
		});
		console.log(oneProject);
		return res.json({
			message: 'Project found',
			data: oneProject
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

export async function createProject(req, res){
	const {name, priority, description, deliverydate} = req.body;
	try{
		const newProject = await Projects.create({
			name,
			priority,
			description,
			deliverydate
		}, {
			fields: ['name', 'priority', 'description', 'deliverydate']
		});
		if(newProject){
			console.log(newProject);
			return res.json({
				message: 'Project created successfully',
				data: newProject
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

export async function deleteProject(req, res){
	const {id} = req.params;
	try{
		const deleteProject = await Projects.destroy({
			where: {id}
		});
		console.log(deleteProject);
		return res.json({
			message: 'Project deleted successfully',
			count: deleteProject
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

export async function updateProject(req, res){
	const {id} = req.params;
	const {name, priority, description, deliverydate} = req.body;
	const listProjects = await Projects.findAll({
		attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
		where: {id}
	});
	try{
		if(listProjects.length > 0){
			listProjects.forEach(async (Projects) => {
				const editProject = await Projects.update({
					name,
					priority,
					description,
					deliverydate
				});
			});
		}
		console.log(listProjects);
		return res.json({
			message: 'Project updated successfully',
			data: listProjects
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