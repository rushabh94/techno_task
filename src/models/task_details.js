const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.config.js");
const { DataTypes } = require("sequelize");
const { UUID, STRING, BOOLEAN, TEXT } = DataTypes;
const TaskDetails = sequelize.define(
  "task_details",
  {
    task_id: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: STRING(100),
      allowNull: true,
    },
    description: {
      type: TEXT,
      allowNull: true,
    },
    status: {
      type: STRING(100),
      allowNull: true,
      defaultValue: "Pending",
    },
    due_date: {
      type: STRING(100),
      allowNull: true,
    },
    is_task_completed: {
      type: BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    is_task_deleted: {
      type: BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    tableName: "task_details",
    freezeTableName: true,
  }
);
module.exports = TaskDetails;
