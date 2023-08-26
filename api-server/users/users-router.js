const express = require("express");
const middleware = require("./users-middleware");
const controller = require("./users-controller");
const bodyParser = require("body-parser");

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.post("/", middleware.validateUserCreation, controller.createUser);

module.exports = userRouter;