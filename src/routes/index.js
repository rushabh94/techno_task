const express = require("express");
const userRouter = require("./user.routes");
const taskRouter = require("./task.routes");

const appRouter = express.Router();

appRouter.use("/user", userRouter);

appRouter.use("/task", taskRouter);

module.exports = appRouter;
