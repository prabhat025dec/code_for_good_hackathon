const bcrypt = require("bcrypt");
const UserProfile = require("../models/userProfile");

exports.login = async (req, res) => {
  type = req.params.type;

  let user;
  //checking if useremail is registered or not
  if (req.body.userEmail) {
    user = await UserProfile.findOne({ userEmail: req.body.userEmail });
    if (!user)
      return res.status(404).json({ message: "Email Id dosen't exists" });
  } else if (req.body.userPhone) {
    //checking if userphone is registered or not
    user = await UserProfile.findOne({ userPhone: req.body.userPhone });
    if (!user)
      return res.status(404).json({ message: "Phone number dosen't exists" });
  } else {
    return res.status(505).json({ message: "Provide all Required fields" });
  }

  if (user.userType !== type) {
    return res.status(401).json({ message: "Access Denied." });
  }

  const validpass = await bcrypt.compare(
    req.body.userPassword,
    user.userPassword
  );
  if (!validpass)
    return res.status(401).json({ message: "Invalid Credentials" });

  const token = user.generateAuthToken();
  res.send(token);
};
