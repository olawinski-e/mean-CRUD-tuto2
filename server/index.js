const express = require("express");
const morgan = require("morgan");
const app = express();

const { mongo } = require("./database");

//settings
app.set("port", process.env.PORT || 3001);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/employee", require("./route/employee.routes"));

//Starting the server
app.listen(3001, () => {
  console.log("Server on port", app.get("port"));
});
