const express = require("express");
const { createUser, loginUser } = require("../controllers/user.controllers");

const userRouter = express.Router();

userRouter.post("/create", createUser);

userRouter.post("/login", loginUser);

module.exports = userRouter;
