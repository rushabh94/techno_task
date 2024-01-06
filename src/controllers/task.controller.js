const TaskDetails = require("../models/task_details");
const UserInfo = require("../models/user_info");
const { createResponse } = require("../utils/commonUtils");

const addTask = async (request, response) => {
  const { title, description, due_date } = request.body;
  await TaskDetails.create({
    title,
    description,
    due_date,
    user_id: request.user.id,
  });
  return createResponse(response, 200, {}, "task added");
};

const getAllTask = async (request, response) => {
  const taskDetials = await TaskDetails.findAll({
    where: {
      user_id: request.user.id,
    },
  });
  if (taskDetials.length === 0)
    return createResponse(response, 200, "Not task added");
  const taskData = [];
  for (const task of taskDetials) {
    const taskObj = {
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
      is_task_completed: task.is_task_completed,
      is_task_deleted: task.is_task_deleted,
    };
    taskData.push(taskObj);
  }
  return createResponse(response, 200, taskData);
};

const updateTaskStatus = async (request, response) => {
  await TaskDetails.update(
    {
      status: request.body.status,
    },
    {
      where: {
        task_id: request.params.taskId,
      },
    }
  );

  return createResponse(response, 200, {});
};

module.exports = { addTask, getAllTask, updateTaskStatus };
