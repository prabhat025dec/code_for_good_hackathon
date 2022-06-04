const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const userLoginRouter = require("./routes/userLogin");
const userRegisterRouter = require("./routes/userRegister");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

if (!process.env._jwtprivate) {
  console.log("FATAL ERROR : jwtprivate key not defined.");
  process.exit(1);
}

const URI = process.env.URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

//all routes
app.use("/", userLoginRouter);
app.use("/", userRegisterRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}.`);
});
