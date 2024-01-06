const sequelize = require("./sequelize.config");

const testDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("DB Connection Error: ", error);
  }
};

module.exports = testDBConnection;
