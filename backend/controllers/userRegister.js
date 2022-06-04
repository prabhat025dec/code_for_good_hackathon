const bcrypt = require("bcrypt");
const UserProfile = require("../models/userProfile.js");

exports.register = async (req, res) => {
  type = req.params.type;

  try {
    //checking if user with email is already registered
    let user = await UserProfile.findOne({ userEmail: req.body.userEmail });
    if (user && user.userType === type)
      return res.status(400).json({ message: "User already registered" });
    //checking if user with phone is already registered
    user = await UserProfile.findOne({ userPhone: req.body.userPhone });
    if (user && user.userType === type)
      return res.status(400).json({ message: "User already registered" });

    let Obj = JSON.parse(JSON.stringify(req.body));

    user = await new UserProfile(Obj);
    //console.log(user);
    user.userImage = (req.file && req.file.path) || "";
    const salt = await bcrypt.genSalt(10);
    user.userPassword = await bcrypt.hash(req.body.userPassword, salt);
    await user.save();

    const token = user.generateAuthToken();
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(user);
  } catch (e) {
    console.log("error caught");
    return res.status(400).json({ message: "Error caught" });
  }
};

exports.alladmin = async (req, res) => {
  let users = await UserProfile.find();
  var adminUsers = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].userType === "admin") {
      adminUsers.push(users[i]);
    }
  }
  res.send(adminUsers);
};

exports.allngo = async (req, res) => {
  let users = await UserProfile.find();
  var ngoUsers = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].userType === "ngo") {
      ngoUsers.push(users[i]);
    }
  }
  res.send(ngoUsers);
};

exports.update = async (req, res) => {
  let user = await UserProfile.findOne({ _id: req.params.id });

  if (!user) return res.status(404).json({ message: "User does not exist" });

  let userEmail = await UserProfile.findOne({ userEmail: req.body.userEmail });
  let userPhone = await UserProfile.findOne({ userPhone: req.body.userPhone });
  let Obj = JSON.parse(JSON.stringify(req.body));
  if (userEmail)
    if (!(user.userEmail === userEmail.userEmail))
      return res.status(404).json({ message: "Phone Or Email already exists" });
  if (userPhone)
    if (!(user.userPhone === userPhone.userPhone))
      return res.status(404).json({ message: "Phone Or Email already exists" });

  if (req.body.userPassword) {
    const salt = await bcrypt.genSalt(10);
    Obj.userPassword = await bcrypt.hash(req.body.userPassword, salt);
  }
  if (req.body.userType) {
    return res.status(400).json({ message: "Not allowed to change type" });
  }
  console.log(user);
  let newObj = {
    ...Obj,
    userImage: (req.file && req.file.path) || user.userImage,
  };
  const updateUser = await UserProfile.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: newObj,
    }
  );
  res.status(200).json({ updates: newObj });
};
