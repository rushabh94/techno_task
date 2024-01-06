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

module.exports = { sequelize };

const testDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("DB Connection Error: ", error);
  }
};

module.exports = testDBConnection;
