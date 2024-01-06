require("dotenv").config();
const getEnv = (variable) => {
  return process.env[variable] || null;
};

module.exports = getEnv;
