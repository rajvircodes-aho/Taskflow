const Project = require("../models/project.model");

async function createProject(req, res) {
  try {
    const { title, description } = req.body;

    const project = await Project.create({
      title,
      description,
      owner: req.user.id,
    });

    res.status(201).json(project);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}
async function getProjects(req, res) {

    const projects = await Project.find({
        owner: req.user.id
    });

    res.json(projects);
}
async function getProject(req, res) {

    const project = await Project.findOne({
        _id: req.params.id,
        owner: req.user.id
    });

    if(!project){
        return res.status(404).json({
            message:"Project not found"
        });
    }

    res.json(project);
}
async function updateProject(req,res){

    const project = await Project.findOneAndUpdate(
        {
            _id:req.params.id,
            owner:req.user.id
        },
        req.body,
        {
            new:true
        }
    );

    if(!project){
        return res.status(404).json({
            message:"Project not found"
        });
    }

    res.json(project);
}
async function deleteProject(req,res){

    const project = await Project.findOneAndDelete({
        _id:req.params.id,
        owner:req.user.id
    });

    if(!project){
        return res.status(404).json({
            message:"Project not found"
        });
    }

    res.json({
        message:"Project deleted"
    });
}

module.exports = {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
}