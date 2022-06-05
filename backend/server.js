const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const ngoDataRegistrationRouter = require("../backend/routes/ngoDataRegister-routes");

/** 
 * Importing Modules to Convert Excel to Json to store that in the backend
 * const fileUpload = require("express-fileupload");
 * const bodyParser = require("body-parser");
 * const morgan = require("morgan");
 * const _ = require("lodash");
 * const excelToJson = require("convert-excel-to-json");
*/

const userLoginRouter = require("./routes/userLogin");
const userRegisterRouter = require("./routes/userRegister");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

/** 
 * app.use(
 * fileUpload({
 * createParentPath: true,
 * })
 * );
*/

app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

/**
 * app.use(bodyParser.json());
 * app.use(bodyParser.urlencoded({ extended: true }));
 * app.use(morgan("dev"));

 */

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


app.use("/ngo", ngoDataRegistrationRouter);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}.`);
});

/** 
 * async function convertExcelToJson() {
 * return new Promise(async (resolve, reject) => {
 *  try {
 * const result = await excelToJson({
 *      sourceFile: `./uploads/cfg.xlsx`,
 * });
 * console.log(result);
 * resolve(result);
 * } catch (err) {
 * console.log(err);
 * reject(err);
 * }
 * });
 * }
 * 
 * app.post("/uploadExcel", async (req, res) => {
 * try {
 * if (!req.files) {
 * res.send({
 * status: false,
 * message: "No file uploaded",
 * });
 * } else {
 * let avatar = req.files.avatar;
 * await avatar.mv("./uploads/cfg.xlsx");
 * await convertExcelToJson();
 * res.send({
 * status: true,
 * message: "File is uploaded",
 * data: {
 * name: "cfg.xlsx",
 * mimetype: avatar.mimetype,
 * size: avatar.size,
 * },
 * });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
*/
