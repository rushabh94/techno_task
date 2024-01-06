const { Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.config");
const UserInfo = require("./user_info");
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
    user_id: {
      type: UUID,
      references: {
        model: UserInfo,
        key: "user_id",
      },
    },
  },
  {
    tableName: "task_details",
    freezeTableName: true,
  }
);
module.exports = TaskDetails;
