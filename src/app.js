const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const testDBConnection = require("./config/db.config.js");
const appRouter = require("./routes/index.js");
const app = express();

const initialize = async () => {
  app.use(cors());

  // Parse JSON bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json({ type: "application/json" }));
  app.use(express.urlencoded({ extended: true }));

  app.use("/", appRouter);

  // DB Connection
  await testDBConnection();
};

initialize();

module.exports = { app };
