const port = 3000;
const express = require("express");
const routes = require("./routes");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// require("./database");
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

app.listen(port, () =>
  console.log(`🚀 O servidor esta rodando em http://localhost:${port}`)
);
