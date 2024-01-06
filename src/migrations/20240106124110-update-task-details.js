"use strict";

const UserInfo = require("../models/user_info");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("task_details", "user_id", {
      type: Sequelize.UUID,
      references: {
        model: "user_info",
        key: "user_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {},
};
