const express = require("express");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const { verifyToken } = require("../controllers/user.controllers");
const {
  addTask,
  getAllTask,
  updateTaskStatus,
} = require("../controllers/task.controller");

const taskRouter = express.Router();

taskRouter.post("/add", asyncMiddleware(verifyToken), addTask);

taskRouter.get("/all", asyncMiddleware(verifyToken), getAllTask);

taskRouter.put(
  "/update-status/:taskId",
  asyncMiddleware(verifyToken),
  updateTaskStatus
);

module.exports = taskRouter;
