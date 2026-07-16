const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")

const  app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

const authRouter = require("./routes/auth.routes")
const projectRouter = require("./routes/project.routes")
const taskRouter = require("./routes/task.routes");

app.use("/api/auth" , authRouter)
app.use("/projects", projectRouter);
app.use("/api/tasks", taskRouter);


module.exports = app;