const Sequelize = require("sequelize");
const getEnv = require("./env.config.js");

const sequelize = new Sequelize(
  getEnv("DB_NAME"),
  getEnv("DB_USERNAME"),
  getEnv("DB_PASSWORD"),
  {
    host: getEnv("DB_HOST"),
    port: getEnv("DB_PORT"),
    dialect: getEnv("DB_DIALECT"),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
