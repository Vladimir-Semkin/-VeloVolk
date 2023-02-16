const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const ssr = require("../middleware/ssr");
const sessionConfig = require("./sessionConfig");
const corsOption = {
  origin: ["https://api-maps.yandex.ru", "http://localhost:3000"],
};
const getUser = require("../middleware/getUser");

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);
  app.use(cors(corsOption));
  app.use(getUser);
};
module.exports = config;
