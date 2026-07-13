const { Router } = require("express");
const router = Router();

const { authUser } = require("../middlewares/auth.middleware");
const projectController = require("../controllers/project.controller");


router.post("/", authUser, projectController.createProject);

router.get("/", authUser, projectController.getProjects);

router.get("/:id", authUser, projectController.getProject);

router.put("/:id", authUser, projectController.updateProject);

router.delete("/:id", authUser, projectController.deleteProject);

module.exports = router;