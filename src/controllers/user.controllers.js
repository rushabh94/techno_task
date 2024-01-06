const UserInfo = require("../models/user_info");
const {
  createResponse,
  encryptedString,
  decryptedString,
  generateToken,
} = require("../utils/commonUtils");

const createUser = async (request, response) => {
  const userInstance = await UserInfo.findOne({
    where: {
      email: request.body.email,
    },
  });

  if (userInstance) {
    return createResponse(response, 202, {}, "User already exist");
  }
  const encryptPass = await encryptedString(request.body.password);

  await UserInfo.create({
    email: request.body.email,
    full_name: request.body.full_name,
    password: encryptPass,
    mobile_no: request.body.mobile,
  });

  return createResponse(response, 200, {}, "New user created");
};

const loginUser = async (request, response) => {
  const userInsnce = await UserInfo.findOne({
    where: {
      email: request.body.email,
    },
  });
  if (!userInsnce) return createResponse(response, 404, {}, "User not found");

  const isMatch = await decryptedString(
    request.body?.password,
    userInsnce?.password
  );
  if (!isMatch) return createResponse(response, 404, {}, "Invalid credential");

  const accessToken = generateToken(userInsnce.user_id);

  return createResponse(
    response,
    200,
    { token: accessToken },
    "User login successfully"
  );
};

module.exports = { createUser, loginUser };
