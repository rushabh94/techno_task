const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.config.js");
const { DataTypes } = require("sequelize");
const { UUID, STRING, TEXT } = DataTypes;
const UserInfo = sequelize.define(
  "user_info",
  {
    user_id: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    full_name: {
      type: STRING(100),
      allowNull: true,
    },
    email: {
      type: STRING(100),
      allowNull: true,
    },
    password: {
      type: TEXT,
      allowNull: true,
    },
    mobile_no: {
      type: STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "user_info",
    freezeTableName: true,
  }
);
module.exports = UserInfo;
