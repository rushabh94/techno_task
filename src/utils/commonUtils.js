const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createResponse = (response, statusCode, data, message) => {
  const messageMap = {
    200: "Success",
    400: "Bad request",
    404: "Not found",
    401: "Unauthorized",
    403: "Forbidden",
  };

  if (!message && statusCode) {
    message = messageMap[statusCode] || message;
  }

  const responseData = { message: message, data: data, statusCode: statusCode };

  return response.status(statusCode).json(responseData);
};

const encryptedString = async (str) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedStr = await bcrypt.hash(str, salt);
  return encryptedStr;
};

const decryptedString = (bodyStr, dbStr) => {
  return bcrypt.compare(bodyStr, dbStr);
};

const generateToken = (userId) => {
  let payLoad = {
    user: {
      id: userId,
    },
  };
  return jwt.sign(payLoad, process.env.JWTKEY, {
    expiresIn: 36000,
  });
};

module.exports = {
  createResponse,
  encryptedString,
  decryptedString,
  generateToken,
};
