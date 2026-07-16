const { Router } = require("express");
const router = Router();

const { authUser } = require("../middlewares/auth.middleware");
const taskController = require("../controllers/tasks.controller");



router.post("/", authUser, taskController.createTask);


router.get("/project/:projectId", authUser, taskController.getTasks);



router.get("/:id", authUser, taskController.getTask);



router.put("/:id", authUser, taskController.updateTask);



router.delete("/:id", authUser, taskController.deleteTask);


module.exports = router;