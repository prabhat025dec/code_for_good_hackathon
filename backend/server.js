const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const forgetRouter = require("./routes/forget");

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
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", forgetRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}.`);
});
