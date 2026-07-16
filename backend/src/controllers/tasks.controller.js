const Task = require("../models/task.model");


async function createTask(req, res) {
    try {
        const { title, description, projectId } = req.body;

        const task = await Task.create({
            title,
            description,
            project: projectId,
            createdBy: req.user.id
        });

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}



async function getTasks(req, res) {
    try {

        const tasks = await Task.find({
            project: req.params.projectId
        });

        res.json(tasks);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


async function getTask(req, res) {
    try {

        const task = await Task.findById(req.params.taskId);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


async function updateTask(req, res) {
    try {

        const task = await Task.findById(req.params.taskId);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }


        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;


        await task.save();


        res.json(task);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}


async function deleteTask(req, res) {
    try {

        const task = await Task.findById(req.params.taskId);


        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }


        await task.deleteOne();


        res.json({
            message: "Task deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}


module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};
